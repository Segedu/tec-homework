const fs = require("fs");
console.log("app is loading..");

const library = [
  { name: "a", author: "Adam", pages: 111 },
  { name: "b", author: "Adam", pages: 222 },
  { name: "c", author: "Adam", pages: 333 },
  { name: "d", author: "Adam", pages: 444 },
  { name: "e", author: "Adam", pages: 555 },
  { name: "f", author: "Adam", pages: 666 },
];

let handleFunc = process.argv[2];
let name = process.argv[3];
let author = process.argv[4];
let pages = Number(process.argv[5]);
const book = { name, author, pages };

function oneOfCrudFunctions(funcName) {
  switch (funcName) {
    case "add":
      addBook(library, book);
      break;
    case "update":
      let name = process.argv[6];
      let author = process.argv[7];
      let pages = Number(process.argv[8]);
      let updatedBook = { name, author, pages };
      updateBook(updatedBook);
      break;
    case "delete":
      deleteBook(book);
      break;
    case "getAll":
      getAll();
      break;
    case "search":
      searchBook(book);
      break;
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

function updateBook(newBook) {
  for (let i = 0; i < library.length; i++) {
    let element = library[i];
    let index = library.indexOf(element);
    if (newBook.name !== element.name) {
      console.log(`searching book ${newBook.name} to update`);
    } else if (index > -1) {
      library[index] = newBook;
      console.log(library);
      return;
    }
  }
  console.log(`The book ${newBook.name} doesn't exist in the library`);
}

function deleteBook(existBook) {
  for (let i = 0; i < library.length; i++) {
    let element = library[i];
    const index = library.indexOf(element);
    if (existBook.name !== element.name) {
      console.log(`searching book ${existBook.name} to delete`);
    } else if (index > -1) {
      library.splice(index, 1);
      console.log(library);
      return;
    }
  }
  console.log(`The book ${existBook.name} doesn't exist in the library`);
}

function searchBook(someBook) {
  for (let i = 0; i < library.length; i++) {
    const element = library[i];
    const index = library.indexOf(element);
    if (someBook.name !== element.name) {
      console.log(`Searching the book ${someBook.name}`);
    } else if (index > -1) {
      console.log(someBook, `Book index in the library: ${index}`);
      return;
    }
  }
  console.log(`The book ${someBook.name} doesn't exist in the library`);
}

function getAll() {
  console.log(library);
}
