# VuePressREPLInDocker
You can use [VuePress] commands in a docker container.


## Quick Start
Parameter | Description
--- | ---
```[mount path]``` | Host OS's directory to mount to docker container.
```[tag]``` | Docker image tag.<br />Please check [DockerHub/Tags].

### Case1: ```docker run```
``` bash
docker run --rm --it -p 8080:8080 -v [mount path]:/home/worker tshion/vuepress-repl:[tag]
```

If you want to exit, please run ```exit``` command.

### Case2: Use as base image
``` dockerfile
FROM tshion/vuepress-repl:[tag]
```


## Features
In detail, I would like you to check [Dockerfile](./Dockerfile).


## Links
### Products
* [DockerHub]
* [GitHub]

### References
* [node]
* [VuePress]


[DockerHub]: https://hub.docker.com/r/tshion/vuepress-repl/
[DockerHub/Tags]: https://hub.docker.com/r/tshion/vuepress-repl/tags
[GitHub]: https://github.com/TentaShion/Dockers/VuePressREPL
[node]: https://hub.docker.com/_/node/
[VuePress]: https://vuepress.vuejs.org/
