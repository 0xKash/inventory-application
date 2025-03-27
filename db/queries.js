const pool = require("./pool");

async function getGenres() {
  const { rows } = await pool.query("SELECT * FROM genres ORDER BY genre");

  return rows;
}

async function getDevelopers() {
  const { rows } = await pool.query(
    "SELECT * FROM developers ORDER BY developer"
  );

  return rows;
}

async function getInventory() {
  const { rows } = await pool.query(
    "SELECT * FROM inventory ORDER BY game_name"
  );

  return rows;
}

async function createGenre(genre) {
  await pool.query("INSERT INTO genres (genre) VALUES ($1)", [genre]);
}

async function createDeveloper(developer) {
  await pool.query("INSERT INTO developers (developer) VALUES ($1)", [
    developer,
  ]);
}

async function createGame(name, genre, developer) {
  await pool.query(
    "INSERT INTO inventory (game_name, game_genre, game_developer) VALUES($1, $2, $3)",
    [name, genre, developer]
  );
}

async function checkDuplicate(name, genre, developer) {
  const { rows } = await pool.query(
    `SELECT * FROM inventory WHERE game_name = $1 AND game_genre = $2 AND game_developer = $3`,
    [name, genre, developer]
  );

  return rows;
}

module.exports = {
  getGenres,
  getDevelopers,
  getInventory,
  createGenre,
  createDeveloper,
  createGame,
  checkDuplicate,
};
