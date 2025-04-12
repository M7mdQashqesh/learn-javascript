/* 
  - Reduce 
    -- Method executes a reducer function on each element of the array.
    -- Resulting in a single output value.

    Syntax
    reduce(callBackFunction(accumulator, currentValue, currentIndex, array) { } , initialValue)

    - Accumulator => The accumulated value previously returned in the last invocation
      -- Start from initialValue, if an initialValue is provided.
      -- Otherwise, its start from index 0 (first element in array).
      -- then, accumulator will be result of the last invocation

    - CurrentValue => The current element being processed in the array.
      -- Start from index 0 if an initialValue is provided.
      -- Otherwise, its start from index 1.
    
    - CurrentIndex => The current index of the element being processed in the array
      -- Start from index 0 if an initialValue is provided.
      -- Otherwise, its start from index 1.

    - array => The current array.
*/

let nums = [10, 20, 15, 30];

let explainReduce = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(`accumulator -> ${accumulator}`);
  console.log(`currentValue -> ${currentValue}`);
  console.log(`currentIndex -> ${currentIndex}`);
  console.log(`array -> ${array}`);
});

//& this will print accumulator at first time only, then will pring undefined, because we dont return a value (accumulator will be result of the last invocation)

//============================================================
console.log("#".repeat(20));
console.log("#".repeat(20));
//============================================================

//^ Solve undefined and add nums
let explainReduceSolvedAndAddNums = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(`accumulator -> ${accumulator}`);
  console.log(`currentValue -> ${currentValue}`);
  console.log(`currentIndex -> ${currentIndex}`);
  console.log(`array -> ${array}`);
  console.log(accumulator + currentValue);
  console.log("-".repeat(15));
  return accumulator + currentValue;
});
console.log(`Final answer is ${explainReduceSolvedAndAddNums}`);

//============================================================
console.log("#".repeat(20));
console.log("#".repeat(20));
//============================================================

//^ Reduce With InitialValue

let reduceWithInitialValue = nums.reduce(function (
  accumulator,
  currentValue,
  currentIndex,
  array
) {
  console.log(`accumulator -> ${accumulator}`);
  console.log(`currentValue -> ${currentValue}`);
  console.log(`currentIndex -> ${currentIndex}`);
  console.log(`array -> ${array}`);
  console.log(accumulator + currentValue);
  console.log("-".repeat(15));
  return accumulator + currentValue;
},
5);
console.log(`Final answer is ${reduceWithInitialValue}`);

//=========================================
console.log("#".repeat(15));
console.log("#".repeat(15));
//=========================================

/* 
  - Reduce Practice
*/

//?
//? Longest Word
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let big = theBiggest.reduce(function (accumulator, currentValue) {
  console.log(`Accumulator -> ${accumulator}`);
  console.log(`currentValue -> ${currentValue}`);
  console.log(
    `Result -> ${
      accumulator.length > currentValue.length ? accumulator : currentValue
    }`
  );
  console.log("-".repeat(15));
  return accumulator.length > currentValue.length ? accumulator : currentValue;
});
console.log(`Final Answer -> ${big}`);

//?
//? Remove Charachters + use reduce
let removeChar = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let removed = removeChar
  .filter(function (element) {
    return element !== "@";
    // return !element.startsWith("@");
  })
  .reduce(function (acc, val) {
    return acc + val;
    // return `${acc}${val}`
  });
console.log(removed);
