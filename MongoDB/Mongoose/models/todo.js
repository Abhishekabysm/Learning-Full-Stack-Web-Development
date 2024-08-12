import mongoose from "mongoose";

//Schema for todo
const todoSchema = new mongoose.Schema({
  name: String,
  age: Number,
  isCompleted: Boolean,
});

export const todo = mongoose.model("todo", todoSchema);
