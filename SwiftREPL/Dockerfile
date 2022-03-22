# sourcekit-lsp の取得
FROM alpine:3.15.1 AS fetcher
RUN apk add git

ENV SourceKitTag=swift-DEVELOPMENT-SNAPSHOT-2022-03-22-a
RUN cd /tmp \
    && git clone --depth 1 -b ${SourceKitTag} https://github.com/apple/sourcekit-lsp.git



# Language Server の構築
FROM swift:5.6.0-bionic AS build-lang-server

RUN apt-get -y update \
    && apt-get -y upgrade \
    && apt-get install -y libsqlite3-dev

COPY --from=fetcher /tmp/sourcekit-lsp /tmp
RUN cd /tmp \
    || swift build



# 実行環境のビルド
FROM swift:5.6.0-bionic

# 作業フォルダーのマウントポイントの設定
VOLUME [ "/home/worker" ]

# Language Server のコピー
COPY --from=build-lang-server /usr/bin/sourcekit-lsp /bin/sourcekit-lsp

# 作業フォルダーに変更
WORKDIR /home/worker
