ARG VersionNode=8.11.2-alpine
ARG VersionAngularCLI=6.0.3

FROM node:${VersionNode}

COPY ./command/my-serve /usr/local/bin/my-serve
RUN npm install -g @angular/cli@${VersionAngularCLI}
EXPOSE 4200

VOLUME [ "/work" ]
WORKDIR /work

ENTRYPOINT ["/bin/sh"]