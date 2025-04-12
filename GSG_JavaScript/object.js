const std = {
  name: "ahmed",
  age: 19,
  university: "PPU",
  hoppies: ["swimming", "reading", "traveling"],
};

console.log(std);
console.log(std.name); // console.log(std.["name"]);
console.log(std.age); // console.log(std.["age"]);
console.log(std.university); // console.log(std.["university"]);
console.log(std.hoppies); // console.log(std.["hoppies"]);

// Edit value
std.age = 20;
console.log(std.age); // console.log(std.["age"]);

// access to array into object
console.log(std.hoppies[1]);

// Deep copy and Shallow  copy
const arr3 = [
  { x: 1, y: 2 },
  { x: 10, y: 20 },
];

const arr4 = [...arr3]; // Shallow Copy of arr3
console.log(arr3);
arr3[0].x = 1000;

console.log(arr4);

// Spread operator for object
const std2 = { ...std, name: "modi" };
console.log(std2);

// Tariq Elouzeh
function compareObject(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    // Object.keys(object1) => put the keys in array
    return false;
  }

  for (let keys in object1) {
    let value1 = object1[keys]; // get value each of key
    let value2 = object2[keys];

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

console.log(compareObject({ name: "yara" }, { name: "yara" }));

console.log(
  compareObject({ name: "yara", age: 20 }, { name: "yara", age: 18 })
);
