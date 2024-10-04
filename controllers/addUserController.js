const db = require("../db/queries");

async function addUserGet(req, res) {
  // console.log("usernames will be logged here - wip");
  const usernames = await db.getUserNames();
  console.log("Usernames: ", usernames);
  res.render("index", {
    title: "List of  top users",
    titleTwo: "Search for user",
    usernames: usernames,
  });
}
async function addUserGetNew(req, res) {
  res.render("addUserName", { title: "Top Users Database" });
}
async function addUserPostNew(req, res) {
  const { username } = req.body;
  await db.insertUserName(username);
  res.redirect("/");
  console.log("username to be saved: ", req.body.username);
}

async function searchUserGet(req, res) {
  const { usernameSearch } = req.query;
  console.log(usernameSearch);
  const result = await db.searchUserNames(usernameSearch);
  const newResult = result.map((item) => item.username);
  const newResultNotFound = "No matching results found";
  if (newResult.length === 0) {
    res.render("search", {
      title: `Search results for ${usernameSearch}`,
      result: newResultNotFound,
    });
  } else {
    res.render("search", {
      title: `Search results for ${usernameSearch}`,
      result: newResult,
    });
  }

  console.log(newResult);
}
async function deleteUserGet(req, res) {
  await db.deleteUserName();
  res.redirect("/");
}
module.exports = {
  addUserGet,
  addUserGetNew,
  addUserPostNew,
  searchUserGet,
  deleteUserGet,
};
