const pool = require("./pool");

async function getInventory() {
  const { rows } = await pool.query("SELECT * FROM inventory");

  return rows;
}

async function createItem(name, category, quality) {
  await pool.query(
    "INSERT INTO inventory (item_name, item_category, item_quality) VALUES($1, $2, $3)",
    [name, category, quality]
  );
}

module.exports = { getInventory, createItem };
