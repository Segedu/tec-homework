const mongoDB = require("mongodb"),
  MongoClient = mongoDB.MongoClient,
  ObjectId = mongoDB.ObjectId,
  url = "mongodb://localhost:27017/";

//! 1
// MongoClient.connect(url, (err, db) => {
//   if (err) console.log("Error in connecting the database");
//   const currentDB = db.db("blog");
//   firstID = new ObjectId("617a646d659f3169ea7f9195");
//   mainID = new ObjectId("617a62f4659f3169ea7f9193");
//   thirdID = new ObjectId("617a6394659f3169ea7f9194");
//   fourthID = new ObjectId("617a6bd3659f3169ea7f9197");
//   pushToArray(currentDB, firstID, mainID, thirdID, fourthID);
// });

// function pushToArray(db, firstId, mainID, thirdID, fourthID) {
//   db.collection("Authors").updateOne(
//     { _id: ObjectId(firstId) },
//     {
//       $push: { posts: { $each: [mainID, thirdID, fourthID] } },
//     },
//     (err, res) => {
//       if (err) console.log("error at push function");
//       console.log(res);
//     }
//   );
// }

//!2
MongoClient.connect(url, (err, db) => {
  if (err) console.log("Error in connecting the database");
  const currentDB = db.db("blog");
  db.collection("Authors").findMany({ posts: ($gt = 1) }, (err, res) => {
    if (err) console.log("error at findMANY FUNCTION");
  });
});
