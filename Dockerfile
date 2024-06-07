FROM node:14.17

WORKDIR /qa-automation-javascript

COPY package.json yarn.lock ./

RUN npm install\
    yarn install

COPY . .

ENV NODE_ENV=production

EXPOSE 3000

CMD ["yarn", "webapp:start"]
