//!encoding_1
// const fs = require("fs");
// const fileName = "encoging.txt";
// fs.writeFileSync(fileName, "Node is great");

// let readedFile = fs.readFileSync(fileName);
// console.log(readedFile);

// לאחר ההדפסה לקונסול התקבל באפר שהוא ייצוג הקסדצימלי למשפט שהוכנס בשלב הכתיבה.
// ניתן לפענח את הקוד המספרי שהתקבל ע"י עיון בתיעוד  של ה UTF8
// כדי לקבל מחרוזת תקינה צריך בשלב הקריאה להוסיף פרמטר של ה UTF8 שיעזור להמיר את המספרים לייצוג של תווים באנגלית.

//!encoding_2
// const fs = require("fs");
// const fileName = "encoging.txt";
// fs.writeFileSync(fileName, "שלום עלום");

// let readedFile = fs.readFileSync(fileName);
// console.log(readedFile);

//!encoding_3
const fs = require("fs");
const fileName = "writeReadAsync.txt";

console.log("app is loading");

fs.writeFile(fileName, "hello world", (error, data) => {
  if (error) {
    console.log("Error during writing!");
  }
  return data;
});

fs.readFile(fileName, "utf-8", (error, data) => {
  if (error) {
    console.log("Error during reading");
  }
  console.log("Data inside file:", data);
});
