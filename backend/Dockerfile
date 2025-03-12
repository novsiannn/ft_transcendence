FROM node:18-alpine

# Установка необходимых пакетов
RUN apk add --no-cache sqlite sqlite-dev

WORKDIR /app

# Копирование и установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование исходного кода
COPY . .

# Создание пустого файла базы данных, если его нет
RUN touch database.sqlite && chmod 666 database.sqlite

EXPOSE 3000

CMD ["node", "src/index.js"]