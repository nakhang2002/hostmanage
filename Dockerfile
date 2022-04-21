# syntax=docker/dockerfile:1

FROM node:16.14.2

ENV NODE_ENV=production

WORKDIR /app

COPY  ./ /app

RUN npm install --production

CMD [ "node", "server.js" ]