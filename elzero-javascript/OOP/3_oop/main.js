/* 
  OOP
    Constructor Function
      new syntax
*/

/* 
  new syntax -> class
  بس خلي ببالك انت بتتعامل مع JavaScript Function
*/

// old syntax (function)
/* function User(id, username, salary) {
  this.id = id;
  this.u = username;
  this.s = salary + 1000;
} */

// new syntax (class)
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

/* 
  عندي ال userOne 
  وانا حابب اعرف هو معمول من ايش ؟
  ال object هذا عبارة عن instance من class
  او instance من Constructor Function
*/
console.log(userOne instanceof User); // return boolean

console.log(userOne.constructor === User);
