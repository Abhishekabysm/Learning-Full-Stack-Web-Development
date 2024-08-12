// Error Handling

let a = prompt("Enter first number:");
let b = prompt("Enter second number:");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("This cannot be done.");
}
let sum = parseInt(a) + parseInt(b);
// Try Catch
//syntax
// try {

// } catch (error) {

// }

try {
  console.log("The sum is:", sum * x);
} catch (error) {
  console.log("Error Aagya hai bhai");
  alert("ERROR ERROR!!");
}
