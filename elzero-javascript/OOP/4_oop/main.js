/* 
  OOP
    Constructor Function 
      Deal With Properties And Methods
*/

/* 
  ال methods تكتب خارج ال constructor 

  كل اشي داخل ال constructor عبارة عن property
*/
class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown"; // if username is empty
    this.s = salary < 6000 ? salary + 400 : salary;
    // property = function make operation and return value
    this.msg = function () {
      return `Hello ${this.u}, this is Your Salary: ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u}, this is your salary: ${this.s}`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(1001, "", 6000);

console.log(userOne.u);
console.log(userOne.s);
console.log(userOne.msg());
console.log(userOne.writeMsg());

console.log("#".repeat(20));

console.log(userTwo.u);
console.log(userTwo.s);
console.log(userTwo.msg());
console.log(userTwo.writeMsg());
