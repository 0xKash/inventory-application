const db = require("../db/queries");

exports.showInventory = async (req, res) => {
  const inventory = await db.getInventory();

  res.render("index", { inventory: inventory });
};
