FROM node:latest
WORKDIR /software/express-server

#Adding relevant folders to image
ADD ./dist /software/express-server
ADD ./node_modules /software/express-server/dist

WORKDIR /software/express-server/dist

CMD ["node", "server.js"]

MAINTAINER tomyitav@gmail.com