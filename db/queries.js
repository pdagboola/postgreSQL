const pool = require("./Pool");
const populateDatabase = require("./populatedb");

async function getUserNames() {
  try {
    const { rows } = await pool.query("SELECT * FROM usernames");
    return rows;
  } catch (err) {
    console.log("Error getting usernames", err);
  }
}
async function searchUserNames(username) {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM usernames WHERE username LIKE $1",
      [`%${username}%`]
    );
    console.log(rows);
    return rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function insertUserName(username) {
  try {
    await populateDatabase();
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [
      username,
    ]);
  } catch (err) {
    console.log("Error inserting names", err);
    throw err;
  }
}

async function deleteUserName() {
  try {
    await pool.query("DROP TABLE IF EXISTS usernames");
    console.log("Table 'usernames' has been dropped successfully.");
  } catch (err) {
    console.error("Error dropping table:", err);
    throw err;
  }
}
module.exports = {
  getUserNames,
  searchUserNames,
  insertUserName,
  deleteUserName,
};
