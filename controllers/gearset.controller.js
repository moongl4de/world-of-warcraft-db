const db = require("../models/");
const Gearset = db.gearset;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  console.log("CREATE REQ: ", req.body);
  if (!req.body.name) {
    res.status(400).send({
      message: "content cannot be empty!",
    });
    return;
  }
  const item = {
    name: req.body.name,
    stats: req.body.stats,
    flavorText: req.body.flavorText,
    type: req.body.type,
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
  const query = req.params.id;
  console.log(query);
  Gearset.findOne({ where: { id: `${query}` } })
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
