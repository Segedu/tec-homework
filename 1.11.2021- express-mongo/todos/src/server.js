const express = require("express"),
  app = express(),
  PORT = 8080,
  functions = require("./functions");

app.use(express.json());

app.get("/todos", (req, res) => {
  functions.getAllDocuments(req, res);
});

// app.post("/todos", (req, res) => {
//   let todoObj = { userId: 1, title: "Highway 37", completed: false };
//   functions.insertDocument(res, todoObj, "todos");
// });
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
