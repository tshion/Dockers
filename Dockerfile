FROM node:12.13.1-alpine3.10

RUN apk add imagemagick
COPY icon-ios.js /home/
COPY icon-pwa.js /home/
COPY index.js /home/
