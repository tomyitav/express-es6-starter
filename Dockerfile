FROM node:latest
WORKDIR /software/graphql-server
ADD . /software/graphql-server

CMD ["npm", "run", "prod"]

MAINTAINER tomyitav@gmail.com