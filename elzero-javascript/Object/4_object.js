/* 
  Object
    - Create with new keyword new object();

    objects طريقه جديدة لانشاء ال 

    تاعنا object جديده لل property & methods وتعلم كيف نضيف 
    سواء فيه بيانات او فاضي
*/

//&
console.log("#".repeat(25));
console.log("User");
console.log("#".repeat(25));
//&

//=============================================================
// Normal way
let user = {};

console.log(user);

// Add Property for user
// you can use dot notation and bracket notation
// choose the object you want to add property and method
user.theName = "Mohammed";
user["theAge"] = 21;

console.log(user);
console.log(user.theName);
console.log(user.theAge);

// Add new Method
user.sayHello = function () {
  return `Hello`;
};
console.log(user);
console.log(user.sayHello());

//&
console.log("#".repeat(25));
console.log("Person");
console.log("#".repeat(25));
//&
// if we have property, the value will update
let person = {
  theAge: 12,
};

console.log(person);
console.log(person.theAge);

person.theAge = 21;

console.log(person);
console.log(person.theAge);
//=============================================================
//&
console.log("#".repeat(25));
console.log("using New Keyword");
console.log("#".repeat(25));
//&

/* 
  نفس حل فوق، بس راح نستخدم
  new keyword
  (object constructor)
*/

// let user = {};
let newUser = new Object();

console.log(newUser);

// Add value
newUser.theAge = 21;

console.log(newUser);

// let user = {theName: "Mohammed"};
let namedUser = new Object({ theName: "Mohammed" });

console.log(namedUser);
console.log(namedUser.theName);

// Edit Value
namedUser.theName = "Qashqesh";

console.log(namedUser);
console.log(namedUser.theName);