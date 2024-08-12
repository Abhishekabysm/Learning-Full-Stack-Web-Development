use("CrudDB");
// console.log(db); First check whether you are using your required db or not

db.createCollection("PremiumOttPasswords");

// db.PremiumOttPasswords.insertOne({
//   username: "user7",
//   password: "password7",
//   email: "user7@example.com",
// });

// db.PremiumOttPasswords.insertMany([
//   {
//     name: "John Smith",
//     email: "john.smith@example.com",
//     phone: "123-456-7890",
//     address: "123 Main Street",
//     city: "Anytown",
//     state: "NY",
//     zip: "12345",
//   },
//   {
//     name: "Jane Doe",
//     email: "jane.doe@example.com",
//     phone: "555-123-4567",
//     address: "456 Pine Street",
//     city: "Anothertown",
//     state: "CA",
//     zip: "98765",
//   },
//   {
//     name: "Bob Johnson",
//     email: "bob.johnson@example.com",
//     phone: "987-654-3210",
//     address: "789 Oak Street",
//     city: "Someplace",
//     state: "TX",
//     zip: "54321",
//   },
//   {
//     name: "Rachelle Davis",
//     email: "rachelle.davis@example.com",
//     phone: "555-555-5555",
//     address: "321 Maple Street",
//     city: "Anywhere",
//     state: "FL",
//     zip: "55555",
//   },
//   {
//     name: "David Miller",
//     email: "david.miller@example.com",
//     phone: "111-222-3333",
//     address: "555 Elm Street",
//     city: "Some City",
//     state: "IL",
//     zip: "66666",
//   },
// ]);

//To find any document based on some condition
// let a = db.PremiumOttPasswords.find({ name: "David Miller" });
// console.log(a);

//It written only one document
// let b = db.PremiumOttPasswords.findOne();
// console.log(b);

//UPDATE
//Updates only one document
// db.PremiumOttPasswords.updateOne(
//   { city: "Anytown" },
//   { $set: { city: "Ghaziabad" } }
// );

//Update more than one document if necessary
// db.PremiumOttPasswords.updateMany(
//   { username: "user7" },
//   { $set: { username: "Abhishek" } }
// );

//DELETE
//Delete only one document
// db.PremiumOttPasswords.deleteOne({ city: "Anothertown" });

//Deletes more than one document if necessary
// db.PremiumOttPasswords.deleteMany({ zip: "66666" });

//There are also many operators which can be used in mongoDB
