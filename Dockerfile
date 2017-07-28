FROM node:latest
WORKDIR /software/express-server
ADD . /software/express-server

CMD ["npm", "run", "prod"]

MAINTAINER tomyitav@gmail.com