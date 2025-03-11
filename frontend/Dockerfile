FROM node:20-alpine

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8888

CMD ["npm", "start"]
