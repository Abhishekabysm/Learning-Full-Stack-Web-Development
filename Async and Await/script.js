// Async and Await

// async function getData() {
//   //Simulating getting data from the server
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// async function getData() {
//   //Simulating getting data from the server
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   let data = await x.json();
//   //   console.log(data);
//   return data;
// }

async function getData() {
  // Simulate getting data from a server
  // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let data = await x.json();
  return data;
}
// we can only use await in async function only
async function main() {
  console.log("Loading Modules");
  console.log("Do something else");

  console.log("Load Data");
  let data = await getData();
  console.log(data);
  console.log("Processing Data...");
  console.log("Something Important coming up...");
}

main();

// but this is not the good way to do it
// data.then((value) => {
//   //   console.log(data);
//   console.log("Processing Data...");
//   console.log("Something Important coming up...");
// });
