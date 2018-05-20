# AngularCLIOnDocker
Docker コンテナ上にAngular CLI がインストールしてあるので、
ssh 接続でコンテナにログインするとAngular CLI のコマンドが自由に使えます。

実行環境の```/_mount``` フォルダーは、コンテナ内の```/home/work/mnt``` にマッピングされているので、
ソースコードを外だしすることも可能です。



## 使い方（サンプルプロジェクト作成から実行まで）
### 1. コンテナを立ち上げる
このソースコードがある場所で、```docker-compose -f docker-compose.yml up -d --build``` を実行する

※あるいは、```sh docker-up.sh``` を実行する

### 2. コンテナにSSH 接続する
エンドポイントが違うので、下記の場合でsh ファイルをたたき分けてください

#### Docker Engine の場合
コマンド```sh login.sh``` を実行し、パスワードに```pass``` と入力してログインする

#### Docker Toolbox の場合
コマンド```sh login-tb.sh``` を実行し、パスワードに```pass``` と入力してログインする

### 3. マウントしているボリュームに移動する
ログイン直後は```/home/work``` にいるので、```cd mnt``` を実行して、マウントしているボリュームに移動する

### 4. プロジェクト作成
コマンド```ng new (プロジェクト名)``` を実行して、プロジェクトを作成する

### 5. プロジェクトフォルダーに移動する
コマンド```cd (プロジェクト名)``` を実行して、移動する

### 6. 実行
コマンド```ng serve --host 0.0.0.0 --poll=2000``` を実行して、ブラウザで表示を確認する。

Docker 実行環境 | エンドポイント
--- | ---
Engine | localhost:4200
ToolBox | 192.168.99.100:4200

※あるいは、カスタムコマンド```my-serve``` を実行する

### 7. 実行の中断
```Ctrl + C``` などのショートカットキーを押して、中断する

### 8. SSH 接続の終了
コマンド```exit``` を実行して、SSH 接続を終了する

### 9. コンテナを片付ける
コマンド```docker-compose -f docker-compose.yml down``` を実行する

※あるいは、```sh docker-down.sh``` を実行する



## ツールバージョンの指定方法
Angular CLI のバージョンは、
docker-compose.yml のbuild > args で定義されている下記の値で指定できます。

変数名 | 用途 | 備考
--- | --- | ---
VersionAngularCLI | Angular CLI のバージョン番号 | バージョン情報は[@angular/cli - npm](https://www.npmjs.com/package/@angular/cli) を確認ください



## 追加コマンドについて
### シェルスクリプト
処理 | ファイル | 備考
--- | --- | ---
作業環境を立ち上げる | docker-up.sh | 
立ち上げた作業環境にSSH 接続する | login.sh | Docker Engine の場合に使用
立ち上げた作業環境にSSH 接続する | login-tb.sh | Docker Toolbox の場合に使用
作業環境を片付ける | docker-down.sh | 

### カスタムコマンド
処理 | ファイル | 備考
--- | --- | ---
検証環境の立ち上げ | my-serve | ng serve にDocker 環境で動かすための引数を加えたコマンド



## 注意点
* マウントボリュームはソース管理に含めないようにしています。必要に応じて修正してください。



## 参考文献
* [sickp/alpine-sshd - Docker Hub](https://hub.docker.com/r/sickp/alpine-sshd/)
* [docker-composeでangular-cliの環境を作ってみる](https://qiita.com/friedaji/items/c3aba48542872f029c21)