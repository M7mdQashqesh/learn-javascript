/* 
  Class
    Static Properties and Methods
*/

class User {
  // not static property
  count = 0;
  // static property
  static cnt = 0;
  constructor(id, username, salary) {
    // properties
    this.i = id;
    this.u = username;
    this.s = salary;

    User.cnt++;
  }
  // Static Methods
  sayHello() {
    return `Hello From Object`;
  }
  static greeting() {
    return `Hello From Class`;
  }
  static countMember() {
    return `${this.cnt} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);

console.log(userOne.u);
console.log(userTwo.u);

/* 
  ال static properties and method 
  هي عبارة عن خواص بتخص ال class نفسو 
  ملهاش دخل بال object يلي تم انشاءة

  يعني اي حاجه محتاج انك تزبطها في ال class نفسو بعيداً عن ال objects يلي بتتنشئ 
  بستعمل فيها ال static properties and methods
*/

/*  */
/* Static Property */
console.log(userOne.count);
console.log(User.count);

/* 
  count => not static property
  bcs useOne has access to "count"
  but User class does not have access to "count"
*/

console.log(userOne.cnt);
console.log(User.cnt);

/* 
  count => static property
  bcs useOne has not access to "count"
  but User class does have access to "count"
*/

/*  */
/* Static Method */
console.log(userOne.sayHello());
// console.log(User.sayHello());

/* 
  sayHello() => not static Method
  bcs useOne has access to "sayHello()"
  but User class does not have access to "sayHello()"
*/

// console.log(userOne.greeting())
console.log(User.greeting());

/* 
  greeting() => static Method
  bcs useOne has not access to "greeting()"
  but User class does have access to "greeting()"
*/

/*  */
// We want create method, count number of Created Objects
console.log(User.countMember());
