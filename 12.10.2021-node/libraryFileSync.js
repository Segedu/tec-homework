const fs = require("fs");

console.log("app is loading..");

let library = [
  { name: "a", author: "Adam", pages: 111 },
  { name: "b", author: "Adam", pages: 222 },
  { name: "c", author: "Adam", pages: 333 },
  { name: "d", author: "Adam", pages: 444 },
  { name: "e", author: "Adam", pages: 555 },
];

let name = process.argv[2];
let author = process.argv[3];
let pages = Number(process.argv[4]);
const book = { name, author, pages };

function manipulate(library, newBook) {
  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    if (newBook.name === element.name) {
      console.log("Error at adding a book to array. already exist");
      return;
    }
  }
  library.push(newBook);
  console.log(library);
}
manipulate(library, book);
