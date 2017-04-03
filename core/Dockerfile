FROM node:latest
COPY package.json /usr/src/app/
WORKDIR /usr/src/app
RUN npm install && npm cache clean
