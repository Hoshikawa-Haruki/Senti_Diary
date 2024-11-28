require('dotenv').config();

const development_sqlite = {
  "dialect" : "sqlite",
  "storage" : "./database.sqlite3"
};

const development_mysql = {
  "username": process.env.MYSQL_USERNAME,
  "password": process.env.MYSQL_PASSWORD,
  "database": process.env.MYSQL_DATABASE,
  "host": process.env.MYSQL_HOST,
  "dialect": "mysql"
};

const test = {
  "username": process.env.MYSQL_USERNAME,
  "password": process.env.MYSQL_PASSWORD,
  "database": process.env.MYSQL_DATABASE,
  "host": process.env.MYSQL_HOST,
  "dialect": "mysql"
};
const production = {
  "username": process.env.MYSQL_USERNAME,
  "password": process.env.MYSQL_PASSWORD,
  "database": process.env.MYSQL_DATABASE,
  "host": process.env.MYSQL_HOST,
  "dialect": "mysql"
};

module.exports = {development_sqlite, development_mysql, test, production};