const db = require("../db/queries");

exports.showInventory = async (req, res) => {
  const inventory = await db.getInventory();

  res.render("index", { inventory: inventory });
};

exports.createGameGet = (req, res) => res.render("createItem");
exports.createGamePost = async (req, res) => {
  const { name, genre, developer } = req.body;

  await db.createGame(name, genre, developer);
  res.redirect("/");
};
