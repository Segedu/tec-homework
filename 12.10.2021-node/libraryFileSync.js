const fs = require("fs");
console.log("app is loading..");

const library = [
  { name: "a", author: "Adam", pages: 111 },
  { name: "b", author: "Adam", pages: 222 },
  { name: "c", author: "Adam", pages: 333 },
  { name: "d", author: "Adam", pages: 444 },
  { name: "e", author: "Adam", pages: 555 },
];

let handleFunc = process.argv[2];
let name = process.argv[3];
let author = process.argv[4];
let pages = Number(process.argv[5]);
const book = { name, author, pages };
name = process.argv[6];
author = process.argv[7];
pages = Number(process.argv[8]);
const updatedBook = { name, author, pages };

function oneOfCrudFunctions(funcName) {
  switch (funcName) {
    case "add":
      addBook(library, book);
      break;
    case "update":
      updateBook(book, updatedBook);
      break;
    case "delete":
      deleteBook(book);
      break;
    case "getAll":
      getAll();
      break;
    case "search":
      searchBook();
    default:
      console.log("you didn't choose any action");
      break;
  }
}
oneOfCrudFunctions(handleFunc);

function addBook(library, newBook) {
  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    if (newBook.name === element.name) {
      console.log("Error at ADDING a book to array. already exist");
      return;
    }
  }
  library.push(newBook);
  console.log(library);
}

function updateBook(existBook, newBook) {
  for (let i = 0; i < library.length; i++) {
    let element = library[i];
    if (existBook.name != element.name) {
      console.log("Error at UPDATING. book doesn't exist");
      return;
    } else if (existBook.name === element.name) {
      // console.log(element);
      library.splice(element, 1);
      element = newBook;
      // console.log(element);
      library.push(element);
      console.log(library);
      return;
    }
  }
}

function deleteBook(existBook) {
  for (let i = 0; i < library.length; i++) {
    let element = library[i];
    if (existBook.name !== element.name) {
      console.log("can't find book to delete");
      return;
    }

    library.splice(existBook, 1);
    console.log(library);
  }
}
