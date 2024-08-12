// Callbacks and Promises

// console.log("Abhishek");
// console.log("Ankit");

// setTimeout(() => {
//   console.log("I am inside set Timeout");
// }, 3000);

// setTimeout(() => {
//   console.log("I am faster than other callbacks");
// }, 3000);

// console.log("Anish");

// const callback = (arg) => {
//   console.log(arg);
// };

// const loadScript = (src, callback) => {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = callback("India");
//   document.head.append(sc);
// };

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
//   callback
// );

// Promises

console.log("This is promises");

let prom1 = new Promise((resolve, reject) => {
  let rand = Math.random();
  if (rand < 0.5) {
    reject("Number is not supporting you");
  } else {
    setTimeout(() => {
      console.log("Yes i am done");
      resolve("Abhishek Kumar(Resolved)");
    }, 2000);
  }
});

prom1
  .then((a) => {
    console.log(a);
  })
  .catch((err) => {
    console.log(err);
  });
