# Node イメージの指定
FROM node:16.17.0-alpine3.16

# 作業フォルダーのマウントポイントの設定
VOLUME [ "/home/worker" ]

# 実行コマンドの設定
ENTRYPOINT [ "/bin/sh", "--login" ]

# 公開するポートの設定
#  4200: ng e2e
#  8100: ionic serve
#  9876: ng test
# 35729: liveload
# 53703: dev logger
EXPOSE 4200 8100 9876 35729 53703

RUN \
    # シェル環境変数の設定
    echo <<EOF > ~/.profile \
        # ionic serve 時のホストアドレス変更
        export IONIC_CMDOPTS_SERVE_HOST=0.0.0.0 \
        # ionic serve 時にブラウザ起動を抑制する
        export IONIC_CMDOPTS_SERVE_OPEN=0 \
    EOF \
    # Yarn 設定
    && yarn config set ignore-optional true --global

# Python の設定
# ベースイメージと同じものを採用
# https://github.com/nodejs/docker-node/blob/main/14/alpine3.13/Dockerfile
RUN apk add --no-cache \
    g++ \
    make \
    python3 \
    vips-dev

# Cordova バージョンの指定
ENV VersionCordova=11.0.0

# Cordova Res バージョンの指定
ENV VersionCordovaRes=0.15.4

# Ionic CLI バージョンの指定
ENV VersionIonic=6.20.3

# Node パッケージの設定
RUN yarn global add cordova@${VersionCordova} cordova-res@${VersionCordovaRes} @ionic/cli@${VersionIonic} --exact \
    ## Ionic でYarn の利用を既定値にする
    && ionic config set -g yarn true \
    && ionic config set -g npmClient yarn

# 作業フォルダーに変更
WORKDIR /home/worker
