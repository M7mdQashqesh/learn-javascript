/*
  - What is an object method?
  - Creating, running, accessing a method
  - Introduction to (this)
*/

//==============={object method}=================
/* let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
  // object method
  seyHello: function (myName) {
    console.log("Hello my name is " + myName);
  },
  calculateGrade: function (grade, totalGrade) {
    let finalGrade = (grade / totalGrade) * 100;
    return finalGrade;
  },
};

// Call
student.seyHello("Mohammed Qashqesh");

console.log(student.calculateGrade(125, 200)); */
//===============================================

//==============={this}=================
/* let student = {
  stdName: "Mohammed",
  age: 20,
  classes: ["Math", "Physics", "History"],
  seyHello: function (myName) {
    console.log("Hello my name is " + myName);
  },
  getObject: function () {
    return this;
    // return to the object
  },
};

console.log(student.getObject());

console.log(student === student.getObject()); */
//======================================
