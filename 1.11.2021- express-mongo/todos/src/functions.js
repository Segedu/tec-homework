const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  url = "mongodb://localhost:27017/";

function getAllDocuments(req, res) {
  MongoClient.connect(url, (err, db) => {
    if (err) {
      console.log("database connection error");
      throw err;
    }
    const currentDB = db.db("jsonPlaceholder");
    currentDB
      .collection("todos")
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

// function insertDocument(res, todoObj, collectionName) {
//   MongoClient.connect(url, function (err, db) {
//     if (err) console.log("database connection error");
//     const currentDB = db.db("jsonPlaceholder");
//     // let todoObj = { userId: 1, title: "Highway 37", completed: false };
//     currentDB.collection(collectionName).insertOne(todoObj, (err, todo) => {
//       if (err) throw err;
//       console.log(todo);
//       res.send(todo);
//       db.close();
//     });
//   });
// }
// module.exports = { insertDocument };
module.exports = { getAllDocuments };
