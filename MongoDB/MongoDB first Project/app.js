import express from "express";
import mongoose from "mongoose";
import { employees } from "./models/employee_schema.js";

const app = express();
const port = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

mongoose.connect("mongodb://127.0.0.1:27017/company2");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.get("/company", (req, res) => {
  //Array for companyEmployees list from where random employee will be choosen
  const companyEmployees = [
    "Abhishek",
    "Amrit",
    "Basu",
    "Golu",
    "Ashu",
    "Suman",
    "Neha",
    "Ravi",
    "Rohit",
    "Pooja",
    "Rahul",
    "Anjali",
    "Vikram",
    "Sneha",
    "Arjun",
  ];
  function companyEmployee() {
    return companyEmployees[
      Math.floor(Math.random() * companyEmployees.length)
    ];
  }
  const employee = companyEmployee();
  // console.log(employee);

  //Array for employeesSalary list from where random employeeSalary will be choosen
  const employeeSalaries = [
    50000, 60000, 55000, 52000, 58000, 62000, 49000, 61000, 53000, 54000, 57000,
    63000, 56000, 59000, 65000,
  ];
  function employeeSalary() {
    return employeeSalaries[
      Math.floor(Math.random() * employeeSalaries.length)
    ];
  }
  const employeemoney = employeeSalary();

  //Array for employeesLanguage list from where random employeeLanguage will be choosen
  const employeeLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "Ruby",
    "C++",
    "PHP",
    "Swift",
    "Go",
    "Kotlin",
    "TypeScript",
    "Scala",
    "Perl",
    "R",
    "Dart",
  ];
  function employeeLanguage() {
    return employeeLanguages[
      Math.floor(Math.random() * employeeLanguages.length)
    ];
  }
  const employeeLanguag = employeeLanguage();

  //Array for employeesLanguage list from where random employeeLanguage will be choosen
  const employeeCities = [
    "New Delhi",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Gurgaon",
    "Noida",
    "Chandigarh",
    "Jaipur",
    "Lucknow",
    "Patna",
    "Indore",
  ];
  function employeecity() {
    return employeeCities[Math.floor(Math.random() * employeeCities.length)];
  }
  const employeeCity = employeecity();

  //isManager
  const manager = [true, false];
  function isManager() {
    return manager[Math.floor(Math.random() * manager.length)];
  }
  const Manager = isManager();

  const Employees = new employees({
    name: `${employee}`,
    salary: `${employeemoney}`,
    language: `${employeeLanguag}`,
    city: `${employeeCity}`,
    isManager: `${Manager}`,
  });
  Employees.save();
  res.json(Employees);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
