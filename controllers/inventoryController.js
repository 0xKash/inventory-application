const db = require("../db/queries");

exports.showInventory = async (req, res) => {
  const inventory = await db.getInventory();

  res.render("index", { inventory: inventory });
};

exports.createItemGet = (req, res) => res.render("createItem");
exports.createItemPost = async (req, res) => {
  const { name, category, quality } = req.body;

  await db.createItem(name, category, quality);
  res.redirect("/");
};
