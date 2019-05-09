#start with node container
FROM node:lts

#Labels
LABEL maintainer="kev@hackernovice.com"

#Install Python and Gosu
RUN apt-get update && apt-get install -y python3 gosu && rm -rf /var/lib/apt/lists/*

#Setup Variables
ARG HTTP_PORT=3000
ENV HTTP_PORT="${HTTPS_PORT}"

ENV VERSION="0.1"

#Install Packages
WORKDIR /usr/src/app

COPY ./appcode/package*.json ./

RUN npm install

#Copy Source Code
COPY ./appcode .

RUN chown -R node:node /usr/src/app

#Run
CMD [ "gosu", "node", "npm", "start" ]