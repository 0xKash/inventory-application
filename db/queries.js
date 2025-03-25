const pool = require("./pool");

async function getInventory() {
  const { rows } = await pool.query("SELECT * FROM inventory");

  return rows;
}

module.exports = { getInventory };
