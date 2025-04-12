// Destructing Array
const arr = ["jerusalem", "hebron", "gaza", "nablus"];

const first = arr[0];
console.log(first);
const second = arr[1];
console.log(second);

const rest = arr.slice(2, arr.length);
console.log(rest);

console.log("*****************");

// Shorter Version using Destructing
const [firstValue, secondValue, ...otherArray] = arr;
console.log(firstValue);
console.log(secondValue);
console.log(otherArray);

console.log("*****************");

// Destructing Object
const std = {
  name: "ahmed",
  age: 19,
  university: "PPU",
  hoppies: ["swimming", "reading", "traveling"],
};

const { name: stdName, hoppies, ...otherObject } = std;
// name: stdName => is an alias
console.log(stdName);
console.log(hoppies);
console.log(otherObject);

// Destructing while receiving the parameter object
const printStd = ({ name, age }) => {
  console.log(`${name} is ${age} Years old`);
};

printStd(std);
