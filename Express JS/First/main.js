const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/blog", (req, res) => {
  console.log(req);
  console.log(req.params);
  res.send("Hello Blog");
});

app.get("/blog/:slug", (req, res) => {
  console.log(req);
  console.log(req.params);
  res.send(`Hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
