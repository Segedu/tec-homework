const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  ObjectId = mongoDB.ObjectId,
  url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
  if (err) console.log("Error in connecting the database");
  const currentDB = db.db("blog");
  
});
