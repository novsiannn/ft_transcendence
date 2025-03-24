const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Плагин для копирования index.html и добавления скриптов

const keyPath = path.join(__dirname, '/certs/key.pem'); // added by kilchenk
const certPath = path.join(__dirname, '/certs/cert.pem'); // added by kilchenk

const isHttps = fs.existsSync(keyPath) && fs.existsSync(certPath); // added by kilchenk

module.exports = {
  entry: './src/index.ts', // Входной файл
  devtool: 'inline-source-map', // Для отладки (показывает исходные файлы)
  mode: 'development', // IF PROGRAMM CRASHS DELETE THIS LINE !!!!!!!!!!!!!!!!!!!!!!!!
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Обрабатываем файлы TypeScript
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Расширения, которые Webpack будет обрабатывать
  },
  output: {
    filename: 'script.js', // Название собранного файла
    path: path.resolve(__dirname, 'dist'), // Папка dist
    publicPath: '/', // Путь для правильной работы с сервером
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Отдаем файлы из папки dist
    },
    compress: true, // added by kilchenk
    historyApiFallback: true, // Поддержка SPA
    port: 8888, // Запуск на порте 8888
    hot: true,
    open: true, // Автоматически откроется браузер

    //added by kilchenk from
    server: isHttps ? {
      type: 'https',
      options: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      }
    } : 'http',
    //added by kilchenk to
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Используем шаблон index.html из папки src
    }),
  ],
};
