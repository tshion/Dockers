# SwiftREPLInDocker
Docker コンテナ内にSwift 関連の下記を整備したイメージの開発リポジトリ。
イメージは[Docker Hub](https://hub.docker.com/r/tshion/swift-repl) から入手出来ます。

* Language Server
* Visual Studio Code 拡張機能
* ビルド環境

Apple から[sourcekit-lsp](https://github.com/apple/sourcekit-lsp) が正式リリースされれば、
全て機能を公式リリースのもので賄えるようになるので、**それまでのつなぎとしてお使いください。**



## Quick Start(導入から利用まで)
0. 前準備
    * [Docker Desktop](https://docs.docker.com/v17.09/engine/installation/) をインストールする
    * [Visual Studio Code](https://code.visualstudio.com/Download) と下記拡張機能をインストールする
        * [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
        * [Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
1. ```docker pull tshion/swift-repl``` を実行する
2. Visual Studio Code のDocker 表示で手順１のイメージを右クリックして"Run Interactive" を実行する
3. Visual Studio Code のRemote 表示から手順２のコンテナに接続する
4. Docker コンテナにリモート接続されるので、ガイドに従って初期設定する
5. Visual Studio Code 拡張機能から"VSIX からのインストール" をクリックし、```/root/sourcekit-lsp-vscode-dev.vsix``` をインストールする



## More Document
下記にもまとめていくので併せてご確認ください。

* [SwiftREPLInDocker の使い方](https://mokumokulog.netlify.com/tech/20191201090741)
