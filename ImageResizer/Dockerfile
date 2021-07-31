# Node イメージの指定
FROM node:14.17.4-alpine3.14

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
