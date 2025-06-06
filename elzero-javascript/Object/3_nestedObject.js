/* 
  Object
    - Nested object and trainings
*/

let available = true;

let user = {
  // Property
  theName: "Mohammed",
  theAge: 21,
  skills: ["html", "css", "js"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    palestine: {
      one: "Hebron",
      two: "Halhul",
    },
  },
  // Method
  checkAv: function () {
    // available => search in global scope, to make it true, should use (user.available)
    // if not exist in global scope => error "is not defined"
    if (user.available === true) {
      return `Free for work`;
    } else {
      return `not free`;
    }
  },
};

console.log(user.theName);
console.log(user.theAge);

console.log(user.skills);
// This is array, if write ( user.skills. ), will display methods of array, Example
console.log(user.skills.join(" | "));
// Can access to element like what we learn in array, by index
console.log(user.skills[2]); // access with index
//
console.log("#".repeat(20));
//
//?
//? Addresses
console.log(user.addresses);

console.log(user.addresses.ksa);

console.log(user.addresses.palestine);
// Use dot notation
console.log(user.addresses.palestine.one);
// Use bracket notation
console.log(user["addresses"]["palestine"]["one"]);
// you can use combination of dot and bracket notation
console.log(user.addresses["palestine"].two);

console.log(user.addresses.palestine.two);

console.log(user.checkAv());
