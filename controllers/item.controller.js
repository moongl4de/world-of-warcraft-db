const db = require("../models");
const Item = db.items;
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
  };

  console.log("item", item);

  Item.create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findAll = (req, res) => {
  console.log("QUERY", req.query);
  const name = req.query.name;
  const condition = name ? { name: { [Op.like]: `%${title}%` } } : null;

  Item.findAll().then((data) => {
    res.send(data);
  });
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};

exports.delete = (req, res) => {};

exports.delete = (req, res) => {};

exports.findAllPublished = (req, res) => {};
