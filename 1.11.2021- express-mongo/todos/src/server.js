const express = require("express"),
  app = express(),
  PORT = 3000,
  baseRoute = "/todos",
  collecName = "todos",
  {
    getAllDocuments,
    insertDocument,
    getDocById,
    deleteDocById,
    updateDocById,
  } = require("./functions");

app.use(express.json());

app.get(baseRoute, (req, res) => {
  getAllDocuments(req, res);
});

app.get(`${baseRoute}/:id`, (req, res) => {
  getDocById(req, res);
});

app.delete(`${baseRoute}/:id`, (req, res) => {
  deleteDocById(req, res);
});

app.patch(`${baseRoute}/:id`, (req, res) => {
  updateDocById(req, res);
});

app.post(baseRoute, (req, res) => {
  let todoObj = { userId: 2, title: "Highway 37", completed: false };
  insertDocument(res, todoObj, collecName);
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
