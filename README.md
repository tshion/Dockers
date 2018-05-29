# AngularCLIOnDocker
Docker コンテナを起動するとAngular CLI のコマンドが使えるようになります。
ホスト側からフォルダーをマウントするようになっているので、データの外だしも可能です。
開発時にお役立てください。



## Docker コンテナの指定可能項目
用途 | 指定方法 | 備考
--- | --- | ---
Node.js が入ったDocker イメージのバージョン指定 | Dockerfile 内の変数```VersionNode``` に指定する | バージョン情報は[library/node - Docker Hub](https://hub.docker.com/_/node/) を確認ください
Angular CLI のバージョン指定 | Dockerfile 内の変数```VersionAngularCLI``` に指定する | バージョン情報は[@angular/cli - npm](https://www.npmjs.com/package/@angular/cli) を確認ください
公開ポート | ```docker run``` 時に```-p``` オプションで指定してください | コンテナ側は4200 ポートを公開しています
マウントフォルダー | ```docker run``` 時に```-v``` オプションで指定してください | ```/work``` にホスト側のフォルダーをマウントします



## Docker コンテナ内で使える追加コマンド
処理 | ファイル | 備考
--- | --- | ---
検証環境の立ち上げ | my-serve | ng serve にDocker 環境で動かすための引数を加えたコマンド



## Docker コンテナ操作時に使える追加コマンド
処理 | ファイル | 備考
--- | --- | ---
作業環境を立ち上げる | docker-up.sh | 



## 備考
* 使い方の詳細は[AngularCLIOnDocker の使い方](http://tshion.webcrow.jp/itlog/index.html?id=20180506205614) を確認してください
* マウントボリュームはソース管理に含めないようにしています。必要に応じて修正してください



## 参考文献
* [docker-composeでangular-cliの環境を作ってみる](https://qiita.com/friedaji/items/c3aba48542872f029c21)