# Node イメージの指定
FROM node:18.12.1-alpine3.16

# 作業フォルダーのマウントポイントの設定
VOLUME [ "/home/worker" ]

# 実行コマンドの設定
ENTRYPOINT [ "/bin/sh", "--login" ]

# ImageMagick の設定
RUN apk add imagemagick

# スクリプトのコピー
COPY icon-fav.js /home/
COPY icon-ios.js /home/
COPY icon-pwa.js /home/
COPY index.js /home/

# 作業フォルダーに変更
WORKDIR /home/worker
