module.exports = (sequelize, DataTypes) => {
  const Gearset = sequelize.define("gearset", {
    class: {
      type: DataTypes.STRING(255),
    },
    phaseNumber: {
      type: DataTypes.INTEGER,
      // get: function () {
      //   return JSON.parse(this.getDataValue("value"));
      // },
      // set: function (value) {
      //   this.setDataValue("value", JSON.stringify(value));
      // },
    },
    specialization: {
      type: DataTypes.STRING(255),
    },
    head: {
      type: DataTypes.JSON,
    },
    neck: {
      type: DataTypes.STRING(255),
    },
    shoulder: {
      type: DataTypes.STRING(255),
    },
    back: {
      type: DataTypes.STRING(255),
    },
    chest: {
      type: DataTypes.STRING(255),
    },
    wrist: {
      type: DataTypes.STRING(255),
    },
    hands: {
      type: DataTypes.STRING(255),
    },
    waist: {
      type: DataTypes.STRING(255),
    },
    legs: {
      type: DataTypes.STRING(255),
    },
    feet: {
      type: DataTypes.STRING(255),
    },
    ring1: {
      type: DataTypes.STRING(255),
    },
    ring2: {
      type: DataTypes.STRING(255),
    },
    trinket1: {
      type: DataTypes.STRING(255),
    },
    trinket2: {
      type: DataTypes.STRING(255),
    },
    mainhand: {
      type: DataTypes.STRING(255),
    },
    offhand: {
      type: DataTypes.STRING(255),
    },
    ranged: {
      type: DataTypes.STRING(255),
    },
    //

    enchantHead: {
      type: DataTypes.STRING(255),
    },
    enchantShoulder: {
      type: DataTypes.STRING(255),
    },
    enchantBack: {
      type: DataTypes.STRING(255),
    },
    enchantChest: {
      type: DataTypes.STRING(255),
    },
    enchantWrist: {
      type: DataTypes.STRING(255),
    },
    enchantHands: {
      type: DataTypes.STRING(255),
    },
    enchantLegs: {
      type: DataTypes.STRING(255),
    },
    enchantFeet: {
      type: DataTypes.STRING(255),
    },
    enchantMainhand: {
      type: DataTypes.STRING(255),
    },
    enchantOffhand: {
      type: DataTypes.STRING(255),
    },
    enchantRanged: {
      type: DataTypes.STRING(255),
    },
  });
  return Gearset;
};
