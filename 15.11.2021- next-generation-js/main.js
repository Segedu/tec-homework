let numbersArray = [];
for (let i = 0; i < 1000; i++) {
    numbersArray.push(i)
}
console.log(numbersArray);

function sum(randomArr) {
    var sum = 0;
    for (let i = 0; i < randomArr.length; i++) {
        sum += (i);
    }
    console.log(sum);
}
sum(numbersArray)


const newArr = numbersArray.map(Math.sqrt);
console.log(newArr);
sum(newArr)

const arr = [10, 21, 36, 41, 50, 60, 72, 88, 91];
const getEvenNumbersArray = (array) => {
    return array.filter(element => element % 2 == 0);
}
console.log(getEvenNumbersArray(arr));