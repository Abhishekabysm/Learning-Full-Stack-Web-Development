const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");

    const dbName = "mydatabase";
    const db = client.db(dbName);

    const collectionName = "mycollection";
    const collection = db.collection(collectionName);

    const person = {
      name: "John",
      age: 30,
    };

    const result = await collection.insertOne(person);
    console.log("Inserted document:", result.ops[0]);

    const remove = await collection.deleteOne(person);
    console.log("Deleted document:", remove.deletedCount);

    // Perform database operations here
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);
