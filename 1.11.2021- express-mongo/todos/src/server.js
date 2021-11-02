const express = require("express"),
  app = express(),
  PORT = 3000,
  baseRoute = "/todos",
  { getAllDocuments, insertDocument } = require("./functions");

app.use(express.json());

app.get(baseRoute, (req, res) => {
  getAllDocuments(req, res);
});

app.post(baseRoute, (req, res) => {
  let todoObj = { userId: 2, title: "Highway 37", completed: false };
  insertDocument(res, todoObj, "todos");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
