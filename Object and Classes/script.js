// let obj = {
//   a: 1,
//   b: "Abhishek",
// };
// // console.log(obj);

// let animal = {
//   eats: true,
//   wildlife: true,
// };

// let rabbit = {
//   jumps: true,
// };
// //We use prototypal inheritance

// rabbit.__proto__ = animal; //This is how we make prototype

class Animal {
  constructor(name) {
    this.name = name;
    console.log("This is Constructor.");
  }
  eats() {
    console.log("Kha raha hoon");
  }
  jumps() {
    console.log("Kood raha hoon");
  }
}

class Lion extends Animal {
  roaring() {
    console.log("Lion is Roaring be careful");
  }
}

let animal = new Animal("Bunny");
// console.log(animal);

let lion = new Lion("Shera");
console.log(lion);
