const path = require("path");
const express = require("express");
const chalk = require("chalk");
const hbs = require("hbs");

// define path for express config
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../tamplates/views");
const partialsPath = path.join(__dirname, "../tamplates/partials");

// create express app
const app = express();

// static file
app.use(express.static(publicPath));

// setup view engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// about with html
app.get("/aboutStatic", (req, res) => {
  res.sendFile(publicPath + "/about.html");
});

// dnamic content
app.get("/dynamic", (req, res) => {
  res.render("index", {
    title: "Dynamic Content",
    name: "Welcome to the HBS",
    footer: "partials footer"
  });
});

// dnamic content
app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    name: "Welcome to the HBS Help",
    footer: "partials footer Help"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: " about",
    name: "Welcome to the HBS About",
    footer: "partials footer About"
  });
});

// weather with json
app.get("/weather", (req, res) => {
  res.send({ name: "walid", age: 27 });
});

//404 not found
app.get("/weather/*", (req, res) => {
  res.render("404", {
    name: "Weather"
  });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// start the server
app.listen(3000, () => {
  console.log(chalk.green("server start at port 3000"));
});
