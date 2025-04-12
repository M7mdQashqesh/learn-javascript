/* 
  Higher Order Functions
  ---> Is a function that accepts functions as parameters and\or returns a function.
  parameter دالة بتقبل دالة ك 
  parameter والداله الداخلية فيها 

  First type of higher order functions:
  - Map
  --- method creates a new array (array method -> method special for array)
  لو بدك تطبق الفكره على المصفوفة الي انت فيها، فا الماب مش مناسبة
  لانها بتطبق الفكرة الي انت بدك اياها على عناصر المصفوفة تاعتك في مصفوفة جديدة

  --- populated with the results of calling a provide function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element[mand], Index[opt], ARray[opt]) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The current Array

  Notes
  - Map return a new array

  Examples
  - Anonymous Function
  - Named Function
*/

let myNumbers = [1, 2, 3, 4, 5, 6];

// print each element that plus to the same element
let newArr = [];
for (let i = 0; i < myNumbers.length; i++) {
  newArr.push(myNumbers[i] + myNumbers[i]);
}
console.log(newArr);

console.log("-".repeat(15));

// Explain Map function
let explainMap = myNumbers.map(function (element, index, array) {
  console.log(`current element -> ${element}`);
  console.log(`current index -> ${index}`);
  console.log(`Array -> ${array}`);
  console.log(`This -> ${this}`);
  console.log("-".repeat(15));
}, 10);

//
// Same example with map (anonymous function)
let addSelfMap = myNumbers.map(function (element) {
  return element + element;
});
console.log(addSelfMap);

//
// Use Arrow funcion
let addSelfArrow = myNumbers.map((element) => {
  return element + element;
});
console.log(addSelfArrow);

//
// Use Arrow funcion without return
let addSelfArrow2 = myNumbers.map((element) => element + element);
console.log(addSelfArrow2);

//
// If i have the function (named function)
function addition(element) {
  return element + element;
}

let adds = myNumbers.map(addition);

console.log(adds);

//==========================
console.log("#".repeat(15));
//==========================

/* 
  Map Practice
  - Swap Cases
  - Inverted Numbers
  - Ignore Numbers Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

//
//! Swap Cases solution
//& The split("") method splits a string into an array of substrings.
let sw = swappingCases
  .split("")
  .map(function (element) {
    return element === element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase();
  })
  .join("");

console.log(sw);

//? Arrow function version
let sw1 = swappingCases
  .split("")
  .map((element) =>
    element === element.toUpperCase()
      ? element.toLowerCase()
      : element.toUpperCase()
  )
  .join("");

console.log(sw1);

//
//! inverted Numbers solution
let inv = invertedNumbers.map(function (element) {
  return -element;
});

console.log(inv);

//
//! ignore Numbers solution
let ig = ignoreNumbers
  .split("")
  .map(function (element) {
    if (isNaN(parseInt(element))) {
      return element;
    }
  })
  .join("");

console.log(ig);
