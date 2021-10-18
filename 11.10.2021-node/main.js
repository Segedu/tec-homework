//! command_line_1
// let numsArray = [1, 2, 3, 4, 5, 6];
// let newNum = process.argv[2];
// numsArray.findIndex(findInArrayGivesIndex);

// function findInArrayGivesIndex(newNum) {
//   return newNum >= newNum;
// }

//! command_line_2

const numArray = [2, 7, 4, 9, 6];
const someString = process.argv[2];
function findMax() {
  let max = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > max && someString == "max") {
      max = numArray[i];
      console.log(` The max element: ${max}`);
    }
  }
  return max;
}
findMax();
//! command_line_3

//!file_sync_1

//!file_sync_2

//!file_sync_3

//!file_sync_4

//!file_sync_5

//!array_operation_1

//!array_operation_2

//!array_operation_3

//!array_operation_4

//!array_operation_5
