FROM node:lts-alpine

WORKDIR /home/node/app

COPY ./site/package*.json ./

RUN npm install

EXPOSE 3030

CMD ["npm", "run", "start"]
