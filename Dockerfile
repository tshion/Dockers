FROM sickp/alpine-sshd

ARG VersionAngularCLI=latest

COPY ./command/my-serve /usr/local/bin/my-serve

RUN passwd -d root \
    && adduser -D work \
    && echo "work:pass" | chpasswd \
    && chmod a+x /usr/local/bin/my-serve \
    && apk add --no-cache nodejs \
    && npm install -g @angular/cli@${VersionAngularCLI}