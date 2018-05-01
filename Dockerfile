FROM sickp/alpine-sshd

RUN apk add --no-cache nodejs && \
    npm install -g @angular/cli