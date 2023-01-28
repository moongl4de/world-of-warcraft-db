module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("item", {
    name: {
      type: DataTypes.STRING(255),
    },
    stats: {
      type: DataTypes.JSON,
      // get: function () {
      //   return JSON.parse(this.getDataValue("value"));
      // },
      // set: function (value) {
      //   this.setDataValue("value", JSON.stringify(value));
      // },
    },
    type: {
      type: DataTypes.STRING(255),
    },
    flavorText: {
      type: DataTypes.STRING(255),
    },
  });
  return Item;
};
