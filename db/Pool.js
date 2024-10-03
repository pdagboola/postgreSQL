require("dotenv").config();
const { Pool } = require("pg");

const DB_URL = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

module.exports = new Pool({
  connectionString: DB_URL,
});
