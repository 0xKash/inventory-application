const pool = require("./pool");

async function getInventory() {
  const { rows } = await pool.query("SELECT * FROM inventory");

  return rows;
}

async function createGame(name, genre, developer) {
  await pool.query(
    "INSERT INTO inventory (game_name, game_genre, game_developer) VALUES($1, $2, $3)",
    [name, genre, developer]
  );
}

async function checkDuplicate(reqBody) {
  await pool.query();
}

module.exports = { getInventory, createGame };
