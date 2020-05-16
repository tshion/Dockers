# IonicREPLInDocker
Docker コンテナ内でIonic コマンドが使えるイメージの開発リポジトリ。
イメージは[Docker Hub](https://hub.docker.com/r/tshion/ionic-repl) から入手出来ます。

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



## 補足
### 実際の利用例
下記にて公開しているので、良かったらご覧ください。

* [YouTube](https://youtu.be/GDehLx1YTmM)

### Docker コンテナ内で使えるコマンド一覧
コマンド | 利用可能かどうか | 備考
--- | :---: | ---
```capacitor add```, ```ionic capacitor add``` | △ | android, electron, ios のプロジェクト自体は作成可能
```capacitor copy```, ```ionic capacitor copy``` | ◯ |  |
```capacitor open```, ```ionic capacitor open``` | × | Docker イメージ内にAndroid Studio やXcode がないため
```capacitor run```, ```ionic capacitor run``` | × |  |
```capacitor sync```, ```ionic capacitor sync``` | △ | ネイティブアプリのコンパイルは出来ないため
```capacitor update```, ```ionic capacitor update``` | △ | ネイティブアプリのコンパイルは出来ないため
```ionic build``` | ◯ |  |
```ionic config get``` | ◯ |  |
```ionic config set``` | ◯ |  |
```ionic config unset``` | ◯ |  |
```ionic cordova build``` | △ | ネイティブアプリのコンパイルは出来ないため
```ionic cordova compile``` | × | ネイティブアプリのコンパイルは出来ないため
```ionic cordova emulate``` | × |  |
```ionic cordova platform``` | ◯ |  |
```ionic cordova platform add``` | △ | android, ios のプロジェクト自体は作成可能
```ionic cordova platform rm``` | △ | コンテナ内のゴミ箱に行くみたいなので使わない方がいいかも
```ionic cordova plugin``` | ◯ |  |
```ionic cordova prepare``` | ◯ |  |
```ionic cordova requirements``` | ◯ |  |
```ionic cordova resources``` | ◯ | cordova-res 導入済み
```ionic cordova run``` | × | native-run 未導入のため
```ionic docs``` | × | Docker イメージ内のブラウザをホスト側から覗けないため
```ionic doctor check``` | ◯ |  |
```ionic doctor list``` | ◯ |  |
```ionic doctor treat``` | ◯ |  |
```ionic generate``` | ◯ |  |
```ionic help``` | ◯ |  |
```ionic info``` | ◯ |  |
```ionic integrations enable capacitor``` | ◯ |  |
```ionic serve``` | ◯ |  |
```ionic start``` | ◯ |  |
```ng e2e``` | × | Docker イメージ内にChrome がないため

### Docker イメージタグのバージョニング
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
