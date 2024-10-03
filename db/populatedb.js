require("dotenv").config();
const { Client } = require("pg");
// const pool = require("./Pool");

const SQL = `CREATE TABLE IF NOT EXISTS usernames(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR(255)
);
    
    `;

async function main() {
  console.log("seeding...");
  console.log("DB_HOST:", process.env.DB_HOST);
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
  console.log("DB_NAME:", process.env.DB_NAME);
  console.log("DB_PORT:", process.env.DB_PORT);

  const client = new Client({
    connectionString:
      `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}` ||
      "postgresql://peter:password@localhost:5432/top_users",
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

module.exports = main;
