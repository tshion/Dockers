# AngularREPLInDocker
You can use angular cli in a docker container.


## Quick Start
Parameter | Description
--- | ---
```[mount path]``` | Host OS's directory to mount to docker container.
```[tag]``` | Docker image tag.<br />Please check [DockerHub/Tags].

### Case1: ```docker run```
``` bash
docker run --rm --it -p 4200:4200 -v [mount path]:/home/worker tshion/angular-repl:[tag]
```

If you want to exit, please run ```exit``` command.

### Case2: Use as base image
``` dockerfile
FROM tshion/angular-repl:[tag]
```


## Features
In detail, I would like you to check [Dockerfile](./Dockerfile).


## Links
### Blogs
* [AngularREPLInDocker の使い方](https://mokumokulog.netlify.app//tech/20180506205614)

### Products
* [DockerHub]
* [GitHub]

### References
* [@angular/cli]
* [node]


[@angular/cli]: https://www.npmjs.com/package/@angular/cli
[DockerHub]: https://hub.docker.com/r/tshion/angular-repl/
[DockerHub/Tags]: https://hub.docker.com/r/tshion/angular-repl/tags
[GitHub]: https://github.com/TentaShion/Dockers/AngularREPL
[node]: https://hub.docker.com/_/node/
