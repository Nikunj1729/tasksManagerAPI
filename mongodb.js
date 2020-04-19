// CRUD - Create Read Update Delete

const mongoDb = require("mongodb");
const { ObjectId, MongoClient } = mongoDb;

const connectionUrl = "mongodb://127.0.0.1:27017";

const databaseName = "task-manager";

MongoClient.connect(
  connectionUrl,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("unable to connect to DB");
    }

    const db = client.db(databaseName);
    db.collection("tasks")
      .deleteOne({ description: "Clean the house" })
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  }
);
