# IonicREPLInDocker
Docker コンテナ内でIonic コマンドが使えるイメージの開発リポジトリ


## 環境設定
### コンテナ設定
Docker コンテナは下記のポートを公開しています。

* 4200: ng e2e
* 8100: ionic serve
* 9876: ng test
* 35729: liveload
* 53703: dev logger

また作業フォルダーとして```/home/worker``` を追加しています。
対応させるローカル側の作業フォルダーは```.dockerignore``` に追記してください。

まとめるとコンテナ起動は下記のようなコマンドで実行してください。

``` bash
docker run --rm -it -p 4200:4200 -p 8100:8100 -p 9876:9876 -p 35729:35729 -p 53703:53703 -v [local path]:/home/worker tshion/ionic-repl:[tag]
```

コンテナ起動するとずっとユーザー入力を待つ状態になるので、作業が完了したら```exit``` コマンドを実行し、コンテナを停止してください。

### Ionic 関連の設定
Capacitor とIonic がインストール済みです。
またIonic はYarn をデフォルトで使用するように設定しています。

ただしDocker コンテナ内からホストOS 側のアプリを呼び出せないため一部コマンドに制限があります。

* ```cap open```
* ```ionic serve``` → ```ionic serve --address=0.0.0.0``` にしてホストOS からアクセスして代用します
* ```ng e2e```


## 参考資料
* [@capacitor/cli  -  npm](https://www.npmjs.com/package/@capacitor/cli)
* [@capacitor/core  -  npm](https://www.npmjs.com/package/@capacitor/core)
* [ionic  -  npm](https://www.npmjs.com/package/ionic)
* [node - Docker Hub](https://hub.docker.com/_/node/)
