var slugify = require("slugify");

let a = slugify("some and or not string"); // some-string
console.log(a);

// if you prefer something other than '-' as separator
let b = slugify("some string", "*"); // some_string
console.log(b);
