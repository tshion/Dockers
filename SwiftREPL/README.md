# SwiftREPLInDocker
You can use these features in a docker container.

* swift commands
* Visual Studio Code Extensions for [sourcekit-lsp]

If Apple release the extension, this image will be needless.


## Quick Start
Parameter | Description
--- | ---
```[mount path]``` | Host OS's directory to mount to docker container.
```[tag]``` | Docker image tag.<br />Please check [DockerHub/Tags].

### Case1: Attach Visual Studio Code
* Docker Desktop is already installed
* Visual Studio Code is already installed
    * [Docker Extension] is already installed
    * [Remote Development Extension] is already installed

When the above is ready, please try these.

1. Run this.
``` bash
docker run --rm --it -v [mount path]:/home/worker tshion/swift-repl:[tag]
```
2. Open "Docker" tab in Visual Studio Code
3. Select 2's container, and right click and select "Attach Visual Studio Code"
4. Do initialize settings
5. Open "Extension" tab in 4's Visual Studio Code, and install from vsix of ```/root/sourcekit-lsp-vscode-dev.vsix```


## Features
In detail, I would like you to check [Dockerfile](./Dockerfile).


## Links
### Blogs
* [SwiftREPLInDocker の使い方](https://mokumokulog.netlify.app/tech/20191201090741)

### Products
* [DockerHub]
* [GitHub]

### References
* [alpine]
* [Docker Extension]
* [node]
* [Remote Development Extension]
* [sourcekit-lsp]
* [swift]


[alpine]: https://hub.docker.com/_/alpine
[Docker Extension]: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker
[DockerHub]: https://hub.docker.com/r/tshion/swift-repl/
[DockerHub/Tags]: https://hub.docker.com/r/tshion/swift-repl/tags
[GitHub]: https://github.com/TentaShion/Dockers/SwiftREPL
[node]: https://hub.docker.com/_/node
[Remote Development Extension]: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack
[sourcekit-lsp]: https://github.com/apple/sourcekit-lsp
[swift]: https://hub.docker.com/_/swift
