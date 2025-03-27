const pool = require("./pool");

async function getInventory() {
  const { rows } = await pool.query("SELECT * FROM inventory ORDER BY id");

  return rows;
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

module.exports = { getInventory, createGame, checkDuplicate, increaseQuantity };
