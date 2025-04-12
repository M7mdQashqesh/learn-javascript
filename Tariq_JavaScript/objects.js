/*
  - What is an objects?
  - Why are Objects useful?
  - typeof object
  = accessing, adding, changing, deleting values
  - in operator
  - for...in loop
  - Object.keys()
  - nested array and objects
*/

//==========={accessing}================
/* let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
// First way of accessing an object
console.log(student.stdName);

// Second way of accessing an object
console.log(student["stdName"]); */
//======================================

//==========={Changing}================
/* 
let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
// First way of Changing
student.age = 64;
console.log(student);

// Second way of Changing
student["age"] = 12;
console.log(student); */
//=====================================

//============{Adding}=================
/* 
let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
// First way of Adding
student.address = "Palestine, Hebron";
// Create new key
console.log(student);

// Second way of Adding
student["sex"] = "Male";
console.log(student); */
//=====================================

//============{Delete}=================
/* 
let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
// First way of delete
delete student.age;
console.log(student);

// Second way of delete
delete student["stdName"];
console.log(student); */
//=====================================

//============={in operator}===============
/* 
let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
console.log("classes" in student);
console.log("address" in student);
// return true/false */
//=========================================

//============={for...in loop}===============
/* 
let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
for (let key in student) {
  console.log(key + " : " + student[key]);
} */
//===========================================

//============={Object.keys()}===============
/* 
let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
};
console.log(Object.keys(student));
// return all names of keys */
//===========================================

//============={nested object}===============
/* let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
  house: {
    address: "Palestine, Hebron",
    phone: 12346789,
  },
};

// First way
console.log(student.house);
console.log(student.house.address);
console.log(student.house.phone);
// Second way
console.log(student["house"]);
console.log(student.house["address"]);
console.log(student.house["phone"]); */
//===========================================
