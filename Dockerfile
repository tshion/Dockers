FROM node:12.13.1-alpine3.10

RUN apk add imagemagick
COPY index.js /home/
