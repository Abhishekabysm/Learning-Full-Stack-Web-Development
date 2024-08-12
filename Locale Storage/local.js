let getName = document.querySelector(".get-name");
let userName = document.querySelector(".user-name");
let getAge = document.querySelector(".get-age");
let userAge = document.querySelector(".user-age");

// userName.innerHTML = localStorage.getItem("userName");
// getName.addEventListener("input", (e) => {
//   //   userName.innerHTML = e.target.value;
//   localStorage.setItem("userName", e.target.value);
//   userName.innerHTML = localStorage.getItem("userName");
// });

// userAge.innerHTML = localStorage.getItem("userAge");
// getAge.addEventListener("input", (e) => {
//   //   userName.innerHTML = e.target.value;
//   localStorage.setItem("userAge", e.target.value);
//   userAge.innerHTML = localStorage.getItem("userAge");
// });

// let myDetails = JSON.parse(localStorage.getItem("myDetails")) || {};

let myDetails = {
  myName: "",
  myAge: "",
};

getName.addEventListener("input", (e) => {
  myDetails.myName = e.target.value;

  localStorage.setItem("myDetails", JSON.stringify(myDetails));
  userName.innerHTML = myDetails.myName;
});

getAge.addEventListener("input", (e) => {
  myDetails.myAge = e.target.value;
  userAge.innerHTML = myDetails.myAge;
});
