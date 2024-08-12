import mongoose from "mongoose";

//Schema for Employees
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

export const employees = mongoose.model("employees", employeeSchema);
