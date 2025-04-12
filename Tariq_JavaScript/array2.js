/*
  **** Array methods ****
  -- shift
  -- unshift
  -- indexOf
  -- slice
  -- splice
  -- includes
  -- sort
  -- reverse
*/

//===============================
/* let arr = [1, 3, 5, 7];
let shift1 = arr.shift();
let shift2 = arr.shift();
console.log(arr);
console.log(shift1);
console.log(shift2); */
//===============================

//===============================
/* let arr = [1, 3, 5, 7];
let result = arr.unshift(0); // return new length
console.log(arr);
console.log(result); */
//===============================

//===============================
/* let arr = [1, 3, 5, 7];
let result = arr.indexOf(5);
console.log(result); */
//===============================

//===============================
/* let arr = [1, 3, 5, 7];
let result2 = arr.slice(1); // from index 1 to the end of array
let result = arr.slice(0, 2); // start index include, end index but not include --> return new array.(copy array)
console.log(arr);
console.log(result);
console.log(result2); */
//===============================

//===============================
/* let arr = [1, 3, 5, 7, 9, 11, 13];
let result = arr.splice(1, 2);
// remove data from the array, start index, deleteCount (number of element want to delete it)
// edit the original array, and return new array from deleted data
console.log(arr);
console.log(result);

console.log("*************");

let arr2 = [1, 3, 5, 7, 9, 11, 13];
let result2 = arr2.splice(3);
// remove from index 3 to the end of array.
console.log(arr2);
console.log(result2); */
//===============================

//===============================
/* let arr = [1, 3, 5, 7, 9, 11, 13];
let result = arr.includes(3);
let result2 = arr.includes(24);
// return boolean true or false
console.log(result);
console.log(result2); */
//===============================

//===============================
/* let arr = [1, 4, 2, 0, 9, 5];
arr.sort();
console.log(arr); */
//===============================

//===============================
/* let arr = [1, 3, 5, 7, 9, 11, 13];
arr.reverse();
console.log(arr); */
//===============================
