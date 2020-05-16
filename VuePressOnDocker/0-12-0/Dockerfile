ARG VersionNode=8.11.2-alpine
ARG VersionVuePress=0.12.0

FROM node:${VersionNode}

RUN yarn global add vuepress@${VersionVuePress}
EXPOSE 8080

VOLUME [ "/_mount" ]
WORKDIR /_mount

ENTRYPOINT ["/bin/sh"]