# Node イメージの指定
FROM node:18.12.1-alpine3.16

# 作業フォルダーのマウントポイントの設定
VOLUME [ "/home/worker" ]

# 実行コマンドの設定
ENTRYPOINT [ "/bin/sh", "--login" ]

# 公開するポートの設定
#  4200: ng serve
EXPOSE 4200

RUN \
    # Yarn 設定
    yarn config set ignore-optional true --global

# Angular バージョンの指定
ENV VersionAngular=15.0.0

# Node パッケージの設定
RUN yarn global add @angular/cli@${VersionAngular} --exact \
    ## Angular でYarn の利用を既定値にする
    && ng config --global cli.packageManager yarn

# 作業フォルダーに変更
WORKDIR /home/worker
