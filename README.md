# IonicREPLInDocker
Docker コンテナ内でIonic コマンドが使えるイメージの開発リポジトリ。
イメージは[Docker Hub](https://hub.docker.com/repository/docker/tshion/ionic-repl) から入手出来ます。

## Quick Start(導入から利用まで)
### そのままイメージを使う場合
下記コマンドを実行しDocker コンテナを起動します。

``` bash
docker run --rm -it -p 4200:4200 -p 8100:8100 -p 9876:9876 -p 35729:35729 -p 53703:53703 -v [mount path]:/home/worker tshion/ionic-repl:[tag]
```

上記のパラメータ部分はお好みの設定で書き換えてください。

* ```[mount path]```: ホストOS からDocker コンテナへマウントするディレクトリのパス
* ```[tag]```: 利用したいDocker のイメージタグ

起動が成功するとコマンドを実行したディレクトリが```/home/worker``` にマウントされ、Ionic コマンドが使えるようになります。
ただしコマンドには制限事項があるので注意が必要です(詳細は"仕様 > 制限事項" を参照してください)

作業が完了したら```exit``` コマンドを入力するとDocker コンテナが破棄されます。

### ベースイメージとして使う場合
``` dockerfile
FROM tshion/ionic-repl:[tag]
```

利用方法等は前述した"そのままイメージを使う場合" と同様ですので省略します。
注意点は下記となります。

* docker-compose など複数コンテナを併用するのは難しいです
→ このDocker イメージはコマンド入力を受け付けるようにしているため、それらが無効になるものと相性が悪いです
→ リモートデスクトップ接続を受け入れる設定もしていないので、起動後に接続するのは難しいと思われます
* "仕様 > Docker イメージの設定" を確認し、注意深く踏襲してください



## Docker イメージタグのバージョニング
下記のルールで採番します。

```
(Ionic CLI のメジャー).(Ionic CLI のマイナー).(Ionic CLI のリビジョン).(このイメージのビルド番号)
```

サフィックスとして下記のどちらかをつけます。

* ```alpha```: feature ブランチに付与
* ```beta```: develop ブランチでマージ済みのものに付与



## More Document
下記にまとめていくので併せてご確認ください。

* [IonicREPLInDocker の使い方](https://mokumokulog.netlify.com/tech/20191117110929)
* [IonicREPLInDocker の開発について](https://mokumokulog.netlify.com/tech/20191117122300)
