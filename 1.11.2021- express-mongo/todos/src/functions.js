const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  url = "mongodb://localhost:27017/",
  dbName = "jsonPlaceholder",
  collecName = "todos";

function getAllDocuments(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log("database connection error");
      throw err;
    }
    const currentDB = db.db(dbName);
    currentDB
      .collection(collecName)
      .find({})
      .toArray((err, todos) => {
        if (err) {
          console.log("error at getting all todos");
          throw err;
        }
        res.send(todos);
      });
  });
}

function insertDocument(res, todoObj, collecName) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log("database connection error");
      throw err;
    }
    const currentDB = db.db(dbName);
    currentDB.collection(collecName).insertOne(todoObj, (err, todo) => {
      if (err) {
        throw err;
      }
      console.log(todoObj);
      res.send(todo);
      db.close();
    });
  });
}

module.exports = { getAllDocuments, insertDocument };
