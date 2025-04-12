// Spread Operator
const arr1 = [1, 2, 3];

// first way
const arr2 = [];
arr1.forEach((value, index) => {
  arr2[index] = value;
});

console.log(arr1);
console.log(arr2);

// Second way
const arr3 = [...arr1];

console.log(arr1);
console.log(arr3);
