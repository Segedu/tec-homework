//!1
const express = require("express"),
  MongoClient = require("mongodb").MongoClient,
  path = require("path"),
  app = express(),
  PORT = 8080,
  url = "mongodb://localhost:27017/blog";

//!1.a
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   db.db("blog")
//     .collection("Authors")
//     .find({})
//     .toArray(function (err, result ) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

//!1.b
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   db.db("blog")
//     .collection("posts")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

//!2
function showByCollection(collectionName) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.db("blog")
      .collection(collectionName)
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  });
}

showByCollection("posts");
showByCollection("Authors");

app.listen(PORT);
