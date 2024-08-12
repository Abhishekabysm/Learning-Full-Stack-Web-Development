const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Employee = require("./models/Employee.js");

mongoose.connect("mongodb://127.0.0.1:27017/company");

// set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/generate", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
