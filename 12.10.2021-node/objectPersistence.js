//! object_persistence_1
const fs = require("fs");
const fileName = "persistence.json";

const books = [
  { name: "blue sky", description: "romance book", pages: 500 },
  { name: "berlin", description: "history", pages: 250 },
];

const booksJson = JSON.stringify(books);
fs.writeFileSync(fileName, booksJson);
console.log(booksJson);

//! object_persistence_2

fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log("error in reading");
  }
  let obj = JSON.parse(data);
  console.log(obj);
  let min = obj[0].pages;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].pages < min) {
      min = obj[i].pages;
    }
    console.log(min);
  }
});
