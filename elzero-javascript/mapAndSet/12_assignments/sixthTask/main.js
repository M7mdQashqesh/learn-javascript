/* let chars = ["A", "B", "C", "D", "E", 10, 15, 6]; */
/* let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6]; */
let chars = ["Z", "Y", "A", "D", "E", 10, 1];
console.log(chars);

let myArr = [];
for (let i = 0; i < chars.length; i++) {
  if (typeof chars[i] === "string") {
    myArr.push(chars[i]);
  } else if (typeof chars[i] === "number") {
    myArr.unshift(chars[i]);
  }
}
myArr.sort((a, b) => a - b);

let count = 0;
for (let i = 0; i < myArr.length; i++) {
  if (typeof myArr[i] === "number") {
    count++;
  }
}

myArr.copyWithin(0, count, count + count);

console.log(myArr);
