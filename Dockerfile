# sourcekit-lsp の取得
FROM alpine:3.10.3 AS fetcher
RUN apk add git

ENV SourceKitTag=swift-DEVELOPMENT-SNAPSHOT-2019-11-19-a
RUN cd /tmp \
    && git clone --depth 1 -b ${SourceKitTag} https://github.com/apple/sourcekit-lsp.git



# Language Server の構築
FROM swift:5.1.2-bionic AS build-lang-server

ENV LibSQLite3=3.22.0-1ubuntu0.1
RUN apt-get -y update \
    && apt-get -y upgrade \
    && apt-get install -y libsqlite3-dev=${LibSQLite3}

COPY --from=fetcher /tmp/sourcekit-lsp /tmp
RUN cd /tmp \
    || swift build



# VSCode 拡張機能のビルド
FROM node:8.16.2-alpine3.10 AS build-extension
COPY --from=fetcher /tmp/sourcekit-lsp/Editors/vscode /tmp
RUN cd /tmp \
    && npm install \
    && npm run postinstall \
    && ./node_modules/.bin/vsce package -o ./out/sourcekit-lsp-vscode-dev.vsix



# 実行環境のビルド
FROM swift:5.1.2-bionic

# Language Server のコピー
COPY --from=build-lang-server /usr/bin/sourcekit-lsp /bin/sourcekit-lsp

# Visual Studio Code 拡張機能のコピー
COPY --from=build-extension /tmp/out/sourcekit-lsp-vscode-dev.vsix /root/
