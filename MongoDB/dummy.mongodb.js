// Select the database to use.
use("sigma");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "Python",
    price: 15000,
    instructor: "Adam",
  },
  {
    name: "JavaScript",
    price: 25000,
    Multiplier: 1.5,
    instructor: "Emma",
  },
  {
    name: "Java",
    price: 20000,
    instructor: "Abhishek",
  },
  {
    name: "C++",
    price: 18000,
    instructor: "Liam",
  },
  {
    name: "C#",
    price: 22000,
    instructor: "Olivia",
  },
  {
    name: "R",
    price: 14000,
    instructor: "Noah",
  },
  {
    name: "Swift",
    price: 24000,
    instructor: "Emily",
  },
  {
    name: "Go",
    price: 19000,
    instructor: "William",
  },
  {
    name: "Kotlin",
    price: 17000,
    partum: true,
    instructor: "Isabella",
  },
  {
    name: "Ruby",
    price: 21000,
    instructor: "Benjamin",
  },
]);

// Print a message to the output window.
console.log(`Done inserting.`);
