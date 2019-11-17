# Node イメージの指定
FROM node:10.17.0-alpine

# Capacitor バージョンの指定
ENV VersionCapacitor=1.3.0

# Ionic CLI バージョンの指定
ENV VersionIonic=5.4.6


# C++, Python の設定
# ベースイメージと同じものを採用
# https://github.com/nodejs/docker-node/blob/f8c22aeb318ec3df876f8271b9b8a86005f0f53d/10/alpine/Dockerfile
RUN apk add --no-cache \
    g++ \
    make \
    python

# Node パッケージの設定
RUN yarn global add @capacitor/cli@${VersionCapacitor} ionic@${VersionIonic} \
    ## Ionic でYarn の利用を既定値にする
    && ionic config set -g yarn true \
    && ionic config set -g npmClient yarn


# 公開するポートの設定
#  4200: ng e2e
#  8100: ionic serve
#  9876: ng test
# 35729: liveload
# 53703: dev logger
EXPOSE 4200 8100 9876 35729 53703


# 作業フォルダーの設定
VOLUME [ "/home/worker" ]
WORKDIR /home/worker


# 実行コマンドの設定
ENTRYPOINT ["/bin/sh"]
