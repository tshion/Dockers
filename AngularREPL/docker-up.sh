#!/bin/sh

docker build -t angular-cli ./
docker run --rm -it -p 4200:4200 -v $(pwd)/_mount:/work angular-cli