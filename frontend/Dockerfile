FROM node:18-alpine

WORKDIR /app

# Копирование и установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование исходного кода
COPY . .

EXPOSE 8888

CMD ["npm", "start"]