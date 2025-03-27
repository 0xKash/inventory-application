const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    game_name VARCHAR ( 255 ),
    game_genre VARCHAR ( 255 ),
    game_developer VARCHAR ( 255 ),
    game_quantity INTEGER
);
`;

const SQL2 = `
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    category VARCHAR ( 255 )
  );
`;

const SQL3 = `
  CREATE TABLE IF NOT EXISTS developers (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    developer VARCHAR ( 255 )
  );
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: "postgresql://postgres:1234@localhost:5432/inventory",
  });
  await client.connect();
  await client.query(SQL);
  await client.query(SQL2);
  await client.query(SQL3);
  await client.end();

  console.log("done");
}

main();
