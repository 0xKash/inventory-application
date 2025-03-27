const db = require("../db/queries");

exports.showInventory = async (req, res) => {
  const genres = await db.getGenres();
  const developers = await db.getDevelopers();
  const inventory = await db.getInventory();

  res.render("index", {
    inventory: inventory,
    genres: genres,
    developers: developers,
  });
};

exports.createGenreGet = async (req, res) => {
  res.render("createGenre");
};

exports.createGenrePost = async (req, res) => {
  await db.createGenre(req.body.genre);
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
  const genres = await db.getGenres();
  const developers = await db.getDevelopers();
  res.render("createGame", { genres: genres, developers: developers });
};

exports.createGamePost = async (req, res) => {
  const { name, genre, developer } = req.body;
  const dupGame = await db.checkDuplicate(name, genre, developer);

  dupGame.length === 0 && (await db.createGame(name, genre, developer));

  res.redirect("/");
};
