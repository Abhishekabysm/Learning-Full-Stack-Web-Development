const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

app.use(express.static("public"));
fs.writeFileSync("abhi.txt", "Hello  i am txt");
//Middleware 1
app.use((req, res, next) => {
  fs.appendFileSync("abhi.txt", `${Date.now()}\n`);
  console.log("Middleware 1");
  next();
});

//Middleware 2
app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
