module.exports = (sequelize, DataTypes) => {
  const Gearset = sequelize.define("gearset", {
    class: {
      type: DataTypes.STRING(255),
    },
    phaseNumber: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.JSON,
    },
    shoulder: {
      type: DataTypes.JSON,
    },
    back: {
      type: DataTypes.JSON,
    },
    chest: {
      type: DataTypes.JSON,
    },
    wrist: {
      type: DataTypes.JSON,
    },
    hands: {
      type: DataTypes.JSON,
    },
    waist: {
      type: DataTypes.JSON,
    },
    legs: {
      type: DataTypes.JSON,
    },
    feet: {
      type: DataTypes.JSON,
    },
    ring1: {
      type: DataTypes.JSON,
    },
    ring2: {
      type: DataTypes.JSON,
    },
    trinket1: {
      type: DataTypes.JSON,
    },
    trinket2: {
      type: DataTypes.JSON,
    },
    mainhand: {
      type: DataTypes.JSON,
    },
    offhand: {
      type: DataTypes.JSON,
    },
    ranged: {
      type: DataTypes.JSON,
    },
    //

    enchantHead: {
      type: DataTypes.JSON,
    },
    enchantShoulder: {
      type: DataTypes.JSON,
    },
    enchantBack: {
      type: DataTypes.JSON,
    },
    enchantChest: {
      type: DataTypes.JSON,
    },
    enchantWrist: {
      type: DataTypes.JSON,
    },
    enchantHands: {
      type: DataTypes.JSON,
    },
    enchantLegs: {
      type: DataTypes.JSON,
    },
    enchantFeet: {
      type: DataTypes.JSON,
    },
    enchantMainhand: {
      type: DataTypes.JSON,
    },
    enchantOffhand: {
      type: DataTypes.JSON,
    },
    enchantRanged: {
      type: DataTypes.JSON,
    },
  });
  return Gearset;
};
