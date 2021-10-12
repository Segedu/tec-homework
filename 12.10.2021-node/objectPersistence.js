//! object_persistence_1
// const fs = require("fs");
// const fileName = "persistence.json";
// const books = [
//   { name: "blue sky", discription: "romance book", pages: 340 },
//   { name: "berlin", discription: "history", pages: 440 },
// ];
// const booksJson = JSON.stringify(books);
// fs.writeFileSync(fileName, booksJson);
// console.log(booksJson);

//! object_persistence_2
const fs = require("fs");
const fileName = "persistence.json";
fs.readFile(fileName, "utf8", (error, data) => {
  if (error) {
    console.log("error in reading");
  }
  let obj = JSON.parse(data);
  console.log(obj);
  for (let i = 0; i < obj.length; i++) {
    let min = obj[0].pages;
    if (obj[i].pages > min) {
      obj[i].pages = min;
      console.log(min);
    }
  }
});
