const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  PORT = 8080,
  tasks = [];

app.use(express.static(publicPath));

app.use(express.json());

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const found = tasks.find((task) => task.id == id);
  if (found) {
    return res.send(found);
  }
  res.sendStatus(404);
  console.log("cant find this page/request");
});

let idNum = 0;
app.post("/tasks", (req, res) => {
  const name = req.body.name;
  if (name === "" || name === undefined || name === null) {
    console.log("error. you must provide task name");
    return res.sendStatus(400);
  }
  const newTask = { name: name, completed: false, date: new Date(), id: idNum };
  idNum++;
  tasks.push(newTask);
  console.log(tasks);
  res.sendStatus(201);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const index = tasks.findIndex((task) => {
    return task.id == id;
  });
  if (index == -1) {
    return res.sendStatus(404);
  }
  tasks.splice(index, 1);
  res.sendStatus(200);
});

app.listen(PORT);
