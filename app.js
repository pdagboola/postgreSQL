const express = require("express");
const { body, validationResult } = require("express-validator");
const app = express();
const addUser = require("./routes/addUser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", addUser);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`App is now running on ${PORT}`);
});
