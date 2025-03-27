const db = require("../db/queries");

exports.showInventory = async (req, res) => {
  const categories = await db.getCategories();
  const developers = await db.getDevelopers();
  const inventory = await db.getInventory();

  res.render("index", {
    inventory: inventory,
    categories: categories,
    developers: developers,
  });
};

exports.createCategoryGet = async (req, res) => {
  res.render("createCategory");
};

exports.createCategoryPost = async (req, res) => {
  await db.createCategory(req.body.category);
  res.redirect("/");
};

exports.createDeveloperGet = async (req, res) => {
  res.render("createDeveloper");
};

exports.createDeveloperPost = async (req, res) => {
  await db.createDeveloper(req.body.developer);
  res.redirect("/");
};

exports.createGameGet = async (req, res) => {
  const categories = await db.getCategories();
  const developers = await db.getDevelopers();
  res.render("createItem", { categories: categories, developers: developers });
};

exports.createGamePost = async (req, res) => {
  const { name, genre, developer, quantity } = req.body;
  const dupGame = await db.checkDuplicate(name, genre, developer);

  dupGame.length === 0
    ? await db.createGame(name, genre, developer, quantity)
    : await db.increaseQuantity(quantity, dupGame[0].id);

  res.redirect("/");
};
