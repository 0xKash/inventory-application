const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    item_name VARCHAR ( 255 ),
    item_category VARCHAR ( 255 ),
    item_quality VARCHAR ( 255 ),
    item_quantity INTEGER
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://postgres:1234@localhost:5432/inventory",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("done");
}

main();
