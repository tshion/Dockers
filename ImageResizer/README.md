# ImageResizerOnDocker
You can resize images in a docker container.


## Quick Start
Parameter | Description
--- | ---
```[mount path]``` | Host OS's directory to mount to docker container.
```[tag]``` | Docker image tag.<br />Please check [DockerHub/Tags].

### Case1: ```docker run```
``` bash
docker run --rm --it -v [mount path]:/home/worker tshion/image-resizer:[tag]
```

If you want to exit, please run ```exit``` command.


## Features
In detail, I would like you to check [Dockerfile](./Dockerfile).

### Commands
Want to do | Commands | Note
--- | --- | ---
Resize image to favicon size | ```node ../icon-fav.js``` | Please locate original image at ```icon/```
Resize image to iOS icon size | ```node ../icon-ios.js``` | Please locate original image at ```icon/```
Resize image to PWA icon size | ```node ../icon-pwa.js``` | Please locate original image at ```icon/```
Resize image to mobile app size | ```node ../index.js``` | 


## Links
### Products
* [DockerHub]
* [GitHub]

### References
* [ImageMagick]
* [node]


[DockerHub]: https://hub.docker.com/r/tshion/image-resizer/
[DockerHub/Tags]: https://hub.docker.com/r/tshion/image-resizer/tags
[GitHub]: https://github.com/TentaShion/Dockers/ImageResizer
[ImageMagick]: https://imagemagick.org/index.php
[node]: https://hub.docker.com/_/node/
