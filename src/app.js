const path = require("path");
const express = require("express");
const chalk = require("chalk");

console.log("path", path.join(__dirname, ""));
console.log("path", path.join(__dirname, ".."));

const publicPath = path.join(__dirname, "../public");

// create express app
const app = express();

// static file
app.use(express.static(publicPath));

// about with html
app.get("/about", (req, res) => {
  res.sendFile(publicPath + "/about.html");
});

// weather with json
app.get("/weather", (req, res) => {
  res.send({ name: "walid", age: 27 });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// start the server
app.listen(3000, () => {
  console.log(chalk.green("server start at port 3000"));
});
