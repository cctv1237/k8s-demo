FROM node:10.15.1-alpine

EXPOSE 80

RUN npm install yarn -g

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn

COPY . /app

CMD ["yarn", "start"]

# docker build -t storehub/demo1 .