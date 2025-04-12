/*
1- *** Compare Objects ***
  Define a function, compareObjects, that accepts two objects as arguments.
  compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false.
  Assume the objects are not nested.
  compareObjects({ name: "Yara" }, { name: "Yara" }) // -> true
  compareObjects({ name: "Omar" }, { name: "Omar", age: 12 }) // -> false
*/

//======================{Answer}======================
/* function compareObjects(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(compareObjects({ name: "Yara" }, { name: "Yara" }));
console.log(compareObjects({ name: "Omar" }, { name: "Omar", age: 12 })); */
//====================================================

/* 2- *** Attendance Check ***
Define a function, attendanceCheck, that accepts a day of the week as a string.
Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.
classCheck('Monday'); // => ['Rania', 'Sara']
classCheck('Wednesday'); // => ['Rania', 'Lina']
*/

/* let classRoom = [
  {
    Rania: [
      { Sunday: true },
      { Monday: true },
      { Tuesday: true },
      { Wednesday: true },
      { Thursday: true },
    ],
  },
  {
    Lina: [
      { Sunday: true },
      { Monday: false },
      { Tuesday: false },
      { Wednesday: true },
      { Thursday: false },
    ],
  },
  {
    Sara: [
      { Sunday: false },
      { Monday: true },
      { Tuesday: true },
      { Wednesday: false },
      { Thursday: true },
    ],
  },
  {
    Amira: [
      { Sunday: true },
      { Monday: false },
      { Tuesday: false },
      { Wednesday: false },
      { Thursday: false },
    ],
  },
]; */

//======================{Answer}======================
/* function attendanceCheck(dayOfWeek = "") {
  let output = [];
  for (let i = 0; i < classRoom.length; i++) {
    let attendanceObject = classRoom[i];
    let name = Object.keys(attendanceObject)[0];

    let attendanceArray = attendanceObject[name];
    for (let j = 0; j < attendanceArray.length; j++) {
      let dayAttendance = attendanceArray[j];
      if (dayAttendance[dayOfWeek]) {
        output.push(name);
      }
    }
  }
  return output;
}

console.log(attendanceCheck("Monday"));
console.log(attendanceCheck("Wednesday")); */
//====================================================

/*
3- *** Call Them All ***
Write a function callThemAll, that, given an object and a value, calls every method in the object, passing in the value as the argument with each call.
callThemAll should return an array with all of the returned values from each method invocation. The order of the elements in the returned array does not matter.
callThemAll(sumNum, 100); // => [110, 120]
*/

/* let sumNum = {
  addTen: function (num) {
    return num + 10;
  },

  addTwenty: function (num) {
    return num + 20;
  },

  someProperty: "This is a string",
}; */

//======================{Answer}======================
/* function callThemAll(object, value) {
  let output = [];
  for (key in object) {
    let keyValue = object[key];
    if (typeof keyValue === "function") {
      let methodOutput = keyValue(value);
      output.push(methodOutput);
    }
  }
  return output;
}

console.log(callThemAll(sumNum, 100)); */
//====================================================