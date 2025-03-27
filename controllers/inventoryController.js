const db = require("../db/queries");

exports.showInventory = async (req, res) => {
  const inventory = await db.getInventory();

  res.render("index", { inventory: inventory });
};

exports.createGameGet = (req, res) => res.render("createItem");
exports.createGamePost = async (req, res) => {
  const { name, genre, developer, quantity } = req.body;
  const dupGame = await db.checkDuplicate(name, genre, developer);

  if (typeof dupGame[0] === "undefined") {
    await db.createGame(name, genre, developer, quantity);
    res.redirect("/");
  } else {
    await db.increaseQuantity(quantity, dupGame[0].id);
    res.redirect("/");
  }
};
