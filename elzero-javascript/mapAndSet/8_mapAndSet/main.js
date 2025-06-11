/* 
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), this Argument)
    - CallbackFunc => Function To Run On Every Element On The Given Array
      - Element => The Current Element To Process
      - Index => Index Of Current Element
      - Array => The Current Array Working With
    this Argument => Value To Use As This When Executing CallbackFunc
    --
    Using
      - Check If Element Exists In Array
      - Check If Number In Rage
*/

/* 
  ال some method بتطبق function على كل عنصر من عناصر ال Array وبتعطيها شرط معين
  لو الشرط تحقق بترجع true بغض النظر عن كم عنصر بينطبق عليه الشرط

  ال filter كانت كل عنصر ينطبق عليه الشرط ترجعو
  اما هان هو برجع بس true or false
*/
let numbers = [1, 2, 3, 4, 5, 6, 7];

// check if there a number > 5
/* --------------------------------------------------------------- */
/* let check = numbers.some(function (element) {
  console.log(element);
  return element > 5;
});

console.log(check);
// console.log(numbers.some((element) => element > 5)); */
/* --------------------------------------------------------------- */

/* 
  اول ما يتحقق الشرط بيوقف
*/

/* -------------------------------------------------- */
/* let check = numbers.some(function (element) {
  console.log(this); // window
  return element > 5;
});
console.log(check); */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
/* let myNumber = 5;
let check = numbers.some(function (element) {
  console.log(this); // myNumber
  return element > 5;
}, myNumber);
console.log(check); */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
/* let myNumber = 5;
let check = numbers.some(function (element) {
  console.log(this); // myNumber
  return element > this;
}, myNumber);
console.log(check); */
/* -------------------------------------------------- */

/* create a function request two parameter, arr and value, check if the values exist in the array */
/* -------------------------------------------------- */
/* function check(arr, val) {
  return arr.some((el) => el === val);
}

console.log(check([1, 2, 3, 4, 5], 5)); */
/* -------------------------------------------------- */

/* -------------------------------------------------- */
let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = numbers.some(function (element) {
  console.log(this.min);
  console.log(this.max);
  console.log("--------");
  return element >= this.min && element <= this.max;
}, range);

console.log(checkNumberInRange); // because numbers array range [1 - 7]
/* -------------------------------------------------- */
