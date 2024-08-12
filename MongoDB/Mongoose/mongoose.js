import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js"; //In models/todo.js there is a schema that is defined already

let cnn = await mongoose.connect("mongodb://localhost:27017/Todo");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const Todo = new todo({ name: "Abhishek", age: 21, isCompleted: true });
  const Todo2 = new todo({ name: "Anurag", age: 24, isCompleted: false });
  // Todo.save();
  Todo2.save();
  res.send("Hello World!");
});

app.get("/a", async (req, res) => {
  let Todo = await todo.findOne({});
  // res.send("Hello World!");
  res.json({ name: Todo.name, age: Todo.age, isCompleted: Todo.isCompleted });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
