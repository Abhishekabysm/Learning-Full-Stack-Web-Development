const express = require("express");
const blog = require("./routes/myBlogPost");
const app = express();

const port = 3000;

app.use("/blog", blog);
// app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("Hello World!");
  console.log("Hello Home Page");
  res.sendFile("templates/myHomePage.html", { root: __dirname });
  // res.send("Hello");
});

app.post("/post", (req, res) => {
  res.send("Hello from post request");
});

app.put("/put", (req, res) => {
  res.send("Hello from put request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
