const dbConfig = require("../config/db.config.js");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { Sequelize, DataTypes } = require("sequelize");
// console.log(dbConfig);

// console.log("manshdv", process.env.PASSWORD);
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize.authenticate().then(() => {
  console.log("Connected Successfully.");
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.items = require("./item.model")(sequelize, DataTypes);
db.gearset = require("./gearset.model")(sequelize, DataTypes);
console.log(db.gearset);

// db.sequelize.sync();

module.exports = db;
