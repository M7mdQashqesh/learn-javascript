/* 
  - Filter
    -- method creates a new array
    -- with all elements that pass the test implemented by the provided function
    
    الفائدة الرئيسية لل فلتر
    test الفلتر بيرجع مصفوفة جديدة فيها العناصر الي عدت من
    TRUE OR FALSE يعني انت بتعمل شرط بيرجع 
    TRUE العناصر يلي عدت من التيست ورجعت 
    هي التي رح ترجع للمصفوفة الجديدة

  Syntax
    filter(callBackFunction(element, index, array) { } , thisArg)

    - Element => The current element being processed in the array
    - Index => The index of the current element being processed in the array
    - Array => The current array
*/

//? Get Friends with name starts with "A"
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

//^
//^ Normal Solution
let friendsStartWithA = [];
for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith("A")) {
    friendsStartWithA.push(friends[i]);
  }
}
console.log(friendsStartWithA);

//^
//^ Solution using Filter (anonymous function)
let resultAno = friends.filter(function (element) {
  return element.startsWith("A");
});
console.log(resultAno);

/* 
  element.startsWith("A") 
  its be like a condition
  -> return element.startsWith("A") ? element : "";
*/

//^
//^ Solution using Filter (Arrow function)
let resultArr = friends.filter((element) => {
  return element.startsWith("A");
});
console.log(resultArr);

//^
//^ Solution using Filter (Arrow function without return)
let resultArrWithoutReturn = friends.filter((element) =>
  element.startsWith("A")
);
console.log(resultArrWithoutReturn);

//================================================
console.log("$".repeat(15));
//================================================

//?
//? Get Even numbers only
let myNumbers = [11, 20, 2, 5, 17, 10];

//^
//^ Normal Solution
let newArrEven = [];
for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] % 2 === 0) {
    newArrEven.push(myNumbers[i]);
  }
}
console.log(newArrEven);

//^
//^ Solution using Filter (anonymous function)
let resultAn = myNumbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(resultAn);

//^
//^ Solution using Filter (Arrow function)
let resultEvenArr = myNumbers.filter((element) => {
  return element % 2 === 0;
});
console.log(resultEvenArr);

//^
//^ Solution using Filter (Arrow function without return)
let resultEvenArrWithoutReturn = myNumbers.filter(
  (element) => element % 2 === 0
);
console.log(resultEvenArrWithoutReturn);

//================================================
console.log("$".repeat(15));
//================================================

//!
//! Filter Practice

//?
//? Filter Words more than 4 characters
let sentence = "I Love Foood Code Too Playing Much";

let resultWordsMoreThan4 = sentence
  .split(" ")
  .filter(function (element) {
    return element.length <= 4;
  })
  .join(" ");

console.log(resultWordsMoreThan4);

//?
//? Ignore Numbers
let ignoreNumber = "Elz123er4o";

//^ Using Map
let ignoredUsingMap = ignoreNumber
  .split("")
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .join("");
console.log(ignoredUsingMap);

//^
//^ Using Filter
let ignoredUsingFilter = ignoreNumber
  .split("")
  .filter(function (element) {
    return isNaN(parseInt(element));
  })
  .join("");
console.log(ignoredUsingFilter);

//^
//^ Same soulution, Replace filter to map (for explain different between map and filter)
let ignoredReplaceFilterToMap = ignoreNumber
  .split("")
  .map(function (element) {
    return isNaN(parseInt(element));
  })
  .join("");
console.log(ignoredReplaceFilterToMap);

//?
//? Filter Strings + Multiply element with self
let mix = "A13BS2ZX";

let resultOfMix = mix
  .split("")
  .filter(function (element) {
    return !isNaN(parseInt(element));
  })
  .map(function (element) {
    return element * element;
  });

console.log(resultOfMix);
