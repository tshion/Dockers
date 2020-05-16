# IonicREPLInDocker
You can use ionic cli in a docker container.


## Quick Start
Parameter | Description
--- | ---
```[mount path]``` | Host OS's directory to mount to docker container.
```[tag]``` | Docker image tag.<br />Please check [DockerHub/Tags].

### Case1: ```docker run```
``` bash
docker run --rm -it -p 4200:4200 -p 8100:8100 -p 9876:9876 -p 35729:35729 -p 53703:53703 -v [mount path]:/home/worker tshion/ionic-repl:[tag]
```

If you want to exit, please run ```exit``` command.

### Case2: Use as base image
``` dockerfile
FROM tshion/ionic-repl:[tag]
```


## Features
In detail, I would like you to check [Dockerfile](./Dockerfile).


## Links
### Blogs
* [IonicREPLInDocker の使い方](https://mokumokulog.netlify.app/tech/20191117110929)
* [IonicREPLInDocker の開発について](https://mokumokulog.netlify.app/tech/20191117122300)
* [YouTube](https://youtu.be/GDehLx1YTmM)

### Products
* [DockerHub]
* [GitHub]

### References
* [@ionic/cli]
* [cordova]
* [cordova-res]
* [node]


[@ionic/cli]: https://www.npmjs.com/package/@ionic/cli
[cordova]: https://www.npmjs.com/package/cordova
[cordova-res]: https://www.npmjs.com/package/cordova-res
[DockerHub]: https://hub.docker.com/r/tshion/ionic-repl/
[DockerHub/Tags]: https://hub.docker.com/r/tshion/ionic-repl/tags
[GitHub]: https://github.com/TentaShion/Dockers/IonicREPL
[node]: https://hub.docker.com/_/node/
