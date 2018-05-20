FROM sickp/alpine-sshd

ARG VersionAngularCLI=latest

RUN apk add --no-cache nodejs && \
    npm install -g @angular/cli@${VersionAngularCLI}