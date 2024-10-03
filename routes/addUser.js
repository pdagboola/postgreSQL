const { Router } = require("express");
const addUser = Router();
const {
  addUserGet,
  addUserGetNew,
  addUserPostNew,
  searchUserGet,
  deleteUserGet,
} = require("../controllers/addUserController");

addUser.get("/", addUserGet);
addUser.get("/new", addUserGetNew);
addUser.post("/new", addUserPostNew);
addUser.get("/search", searchUserGet);
addUser.get("/delete", deleteUserGet);

module.exports = addUser;
