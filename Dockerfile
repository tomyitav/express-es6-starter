FROM node:latest
WORKDIR /software/express-server

#Adding relevant folders to image
ADD dist /software/express-server/dist
ADD node_modules /software/express-server/dist/node_modules

WORKDIR /software/express-server/dist

CMD ["node", "server.js"]

MAINTAINER tomyitav@gmail.com