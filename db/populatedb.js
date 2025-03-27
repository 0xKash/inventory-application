const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    game_name VARCHAR ( 255 ),
    game_genre VARCHAR ( 255 ),
    game_developer VARCHAR ( 255 )
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
