# Node イメージの指定
FROM node:8.11.2-alpine

# 作業フォルダーのマウントポイントの設定
VOLUME [ "/home/worker" ]

# 実行コマンドの設定
ENTRYPOINT [ "/bin/sh", "--login" ]

# 公開するポートの設定
EXPOSE 8080

RUN \
    # Yarn 設定
    yarn config set ignore-optional true --global

# VuePress バージョンの指定
ENV VersionVuePress=0.12.0

# Node パッケージの設定
RUN yarn global add vuepress@${VersionVuePress} --exact

# 作業フォルダーに変更
WORKDIR /home/worker