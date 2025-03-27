const pool = require("./pool");

async function getCategories() {
  const { rows } = await pool.query(
    "SELECT * FROM categories ORDER BY category"
  );

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
    "SELECT * FROM inventory ORDER BY game_quantity DESC"
  );

  return rows;
}

async function createCategory(category) {
  await pool.query("INSERT INTO categories (category) VALUES ($1)", [category]);
}

async function createDeveloper(developer) {
  await pool.query("INSERT INTO developers (developer) VALUES ($1)", [
    developer,
  ]);
}

async function createGame(name, genre, developer, quantity) {
  await pool.query(
    "INSERT INTO inventory (game_name, game_genre, game_developer, game_quantity) VALUES($1, $2, $3, $4)",
    [name, genre, developer, quantity]
  );
}

async function checkDuplicate(name, genre, developer) {
  const { rows } = await pool.query(
    `SELECT * FROM inventory WHERE game_name = $1 AND game_genre = $2 AND game_developer = $3`,
    [name, genre, developer]
  );

  return rows;
}

async function increaseQuantity(quantity, id) {
  await pool.query(
    `UPDATE inventory SET game_quantity = game_quantity + $1 WHERE id = $2`,
    [quantity, id]
  );
}

module.exports = {
  getCategories,
  getDevelopers,
  getInventory,
  createCategory,
  createDeveloper,
  createGame,
  checkDuplicate,
  increaseQuantity,
};
