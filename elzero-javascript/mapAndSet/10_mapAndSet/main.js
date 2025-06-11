/* 
  Spread Operator => ...Iterable
  "ALlow Iterable To Expand In Place"
*/

/* 
  كلمة spread معناها انتشار

  ال Syntax تاع ال spread operator هو 
  "..."
  وتعاملنا معاه في ال rest parameter لل function 
  زي المثال التالي

  الفكرة منو انو انت تقدر تعمل extract (استخراج) للعناصر تاعت ال iterable في المكان يلي انت فيه
*/

function printArgs(...a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
  }
  console.log(a);
}
printArgs("M", "O", "A");

console.log("-".repeat(15));
/*  */
// Spread With String => Expand String
console.log("Mohammed");
console.log(..."Mohammed");
/* 
  حط العناصر تاعت ال string في array
*/
console.log([..."Mohammed"]);

console.log("-".repeat(15));
/*  */
// Concatenate Arrays
let myArr1 = [1, 2, 3];
let myArr2 = [4, 5, 6];
let concatenate = [...myArr1, ...myArr2];
console.log(concatenate);

console.log("-".repeat(15));
/*  */
// Copy Array
let copiedArray = [...myArr1];
console.log(copiedArray);

console.log("-".repeat(15));
/*  */
// Push Inside Array
let myFriends = ["Mohammed", "Ahmed", "Ali"];
let thisYearFriends = ["Osama", "Belal"];

console.log(myFriends);

//----------------------------------
// myFriends.push(thisYearFriends)
//----------------------------------
// the same
/* myFriends.push([...thisYearFriends]) */
//----------------------------------

//----------------------------------
/* myFriends.push("Osama", "Belal");
console.log(myFriends); */
//----------------------------------
// the same
myFriends.push(...thisYearFriends);
console.log(myFriends);

console.log("-".repeat(15));
/*  */
// Use With Math Object
let numbers = [10, 20, -100, 3000, 1400];
console.log(Math.max(...numbers));

console.log("-".repeat(15));
/*  */
// Spread With Object => Merge Objects
let objOne = {
  a: 1,
  b: 2,
};

let objTwo = {
  c: 3,
  d: 4,
};

let allObjects = { ...objOne, ...objTwo, e: 5 };
console.log(allObjects);
