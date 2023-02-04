const db = require("../models/");
const Gearset = db.gearset;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("CREATE REQ: ", req.body);
  if (!req.body.class) {
    res.status(400).send({
      message: "content cannot be empty!",
    });
    return;
  }
  const item = {
    class: req.body.class,
    specialization: req.body.specialization,
    phaseNumber: req.body.phaseNumber,

    head: req.body.head,
    neck: req.body.neck,
    shoulder: req.body.shoulder,
    back: req.body.back,
    chest: req.body.chest,
    wrist: req.body.wrist,
    hands: req.body.hands,
    waist: req.body.waist,
    legs: req.body.legs,
    feet: req.body.feet,
    ring1: req.body.ring1,
    ring2: req.body.ring2,
    trinket1: req.body.trinket1,
    trinket2: req.body.trinket2,
    mainhand: req.body.mainhand,
    offhand: req.body.offhand,
    ranged: req.body.ranged,

    enchantHead: req.body.enchantHead,
    enchantShoulder: req.body.enchantShoulder,
    enchantBack: req.body.enchantBack,
    enchantChest: req.body.enchantChest,
    enchantWrist: req.body.enchantWrist,
    enchantHands: req.body.enchantHands,
    enchantLegs: req.body.enchantLegs,
    enchantFeet: req.body.enchantFeet,
    enchantMainhand: req.body.enchantMainhand,
    enchantOffhand: req.body.enchantOffhand,
    enchantRanged: req.body.enchantRanged,
  };

  console.log("item", item);

  Gearset.create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findAll = (req, res) => {
  console.log("QUERY", req.query);
  // const name = req.query.name;
  // const condition = name ? { name: { [Op.like]: `%${title}%` } } : null;

  Gearset.findAll().then((data) => {
    res.send(data);
  });
};

exports.findOne = (req, res) => {
  const query = req.params;
  const className = req.params.class;
  const spec = req.params.spec;
  const phase = req.params.phase;

  console.log("query", query);
  Gearset.findOne({
    where: [
      { class: `${className}` },
      { specialization: `${spec}` },
      { phaseNumber: `${phase}` },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.update = (req, res) => {
  const queryID = req.params.id;
  const updated = req.body;
  console.log("query: ", queryID);
  console.log("body: ", updated);
  Gearset.update(updated, { where: { id: `${queryID}` } }).then((data) => {
    res.send("Item updated.");
  });
};

exports.delete = (req, res) => {
  const queryID = req.params.id;
  console.log("Deleting ID: ", queryID);
  console.log(req);

  Gearset.destroy({ where: { id: `${queryID}` } }).then((data) => {
    res.send("Item deleted.");
  });
};

// exports.delete = (req, res) => {};

exports.findAllPublished = (req, res) => {};
