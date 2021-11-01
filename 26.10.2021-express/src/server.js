//!json_placeholder_1
const express = require("express"),
  path = require("path"),
  publicPath = path.join(__dirname, "..", "public"),
  app = express(),
  PORT = 8080,
  comments = [];

app.use(express.json());

app.use(express.static(publicPath));

// app.get("/", (req, res) => {
//   res.send("index.html");
// });

app.get("/comments", (req, res) => {
  res.send(comments);
});

let idNum = 0;
app.post("/comments", (req, res) => {
  const name = req.body.name;
  if (name === "" || name === undefined || name === null) {
    console.log("you most provide valid name");
    return res.sendStatus(400);
  }
  const newComment = {
    name: name,
    date: new Date(),
    id: idNum,
    isCompleted: false,
  };
  comments.push(newComment);
  console.log(newComment);
  res.sendStatus(201);
  idNum++;
});

app.get("/comments/:id", (req, res) => {
  const id = req.params.id;
  const found = comments.find((comment) => comment.id == id);
  if (found) {
    return res.send(found);
  }
  res.sendStatus(404);
  console.log(`The id ${id} doesn't exist`);
});

app.delete("/comments/:id", (req, res) => {
  const id = req.params.id;
  const index = comments.findIndex((comment) => {
    return comment.id == id;
  });
  if (index == -1) {
    return res.sendStatus(404);
  }
  comments.splice(index, 1);
  res.sendStatus(200);
  console.log("array length: ", comments.length);
});

// app.patch("/comments/:id", (req, res) => {
//   const id = req.params.id;
//   const name = req.body.name;
//   const index = comments.findIndex((comment) => {
//     return comment.id == id;
//   });

// });

//!json_placeholder_2

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
