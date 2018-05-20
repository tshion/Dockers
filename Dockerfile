FROM sickp/alpine-sshd

ARG VersionAngularCLI=latest

RUN passwd -d root \
    && adduser -D work \
    && echo "work:pass" | chpasswd \
    && apk add --no-cache nodejs \
    && npm install -g @angular/cli@${VersionAngularCLI}