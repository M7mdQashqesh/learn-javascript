/* 
  Object
    - Dig Deeper
    - Dot Notation vs Bracket Notation
    - Dynamic Property Name
*/

let user = {
  // Property name => identifier
  // i can use any valid string and any data can be string for Property name
  theName: "Mohammed",
  "country of": "Palestine",
  100: "Number",
};

console.log(user.theName);

// Cant access to "county of" using dot notation
//! console.log(user.country of);
//! console.log(user."country of");

//! console.log(user.100);
//! console.log(user."100");

// Should use Bracket notation
console.log(user["country of"]);
console.log(user["100"]);

console.log("#".repeat(15));

//^
//^ Dynamic Property Name

let myVar = "country";

let newUser = {
  theName: "Ali",
  country: "Palestine",
};

console.log(newUser.theName);

// Access dynamic propertyName

//! cant use dot notation way
console.log(newUser.myVar); // undefined

// you can use bracket notation way
console.log(newUser["myVar"]); // undefined
console.log(newUser[myVar]); // newUser.country or newUser[country] => Palestine
