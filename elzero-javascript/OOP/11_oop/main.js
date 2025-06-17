/* 
  Prototype
    - Add To Prototype Chain
    - Extend Built In Constructor Features
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");

console.log(User.prototype);
console.log(userOne);

//
// Add To Prototype Chain
User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

console.log(userOne.sayWelcome());

//
// Extend Built In Constructor Features
Object.prototype.love = "Elzero Web School";
console.log(userOne.love);

//
// Another Example
String.prototype.addDotBeforeAndAfter = function () {
  return `.${this}.`;
};

let myString = "Mohammed".addDotBeforeAndAfter();
console.log(myString);
