const dbConfig = require("../config/db.config.js");

const { Sequelize, DataTypes } = require("sequelize");
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

// db.sequelize.sync();

module.exports = db;
