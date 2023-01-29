const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: process.env.PASSWORD,
  DB: "testdb",
  dialect: "mysql",
  // port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
