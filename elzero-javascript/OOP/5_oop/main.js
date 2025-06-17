/* 
  OOP
    Constructor Function
      Update Properties
      Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  // Methods
  updateUsername(newUsername) {
    this.u = newUsername;
  }
}
let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u);
userOne.updateUsername("Mohammed");
console.log(userOne.u);

console.log("-".repeat(15));
/*  */
/* Built In Constructor */
let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo); // bcs using String Constructor

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

console.log("-".repeat(15));
/*  */
/* ------------------------------------------- */
let numOne = 100;
let numTwo = new Number(100);

console.log(typeof numOne);
console.log(typeof numTwo);

console.log(numOne instanceof Number);
console.log(numTwo instanceof Number);

console.log(numOne.constructor === Number);
console.log(numTwo.constructor === Number);
