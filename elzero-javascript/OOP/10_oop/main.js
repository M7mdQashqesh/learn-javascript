/* 
  Prototype (نموذج او مخطط)
    - Introduction
    - Prototype Are The Mechanism By Which JavaScript Objects Inherit Features From One Another.
    هي الالية الي عن طريقها ال objects في ال JavaScript بتورث الخواص من بعضها
*/

/* 
  لما تيجي تنشئ اي function في اللغه يتم انشاء prototype معاها في ال فيها ال features تاعت ال function نفسها

  عشان لما انشئ اي object بهذا ال function اقدر اورث المميزات كلها من المخطط
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
console.log(userOne.u);

// Example
console.log(User.prototype);

// Example
let strOne = "Elzero";
console.log(strOne.constructor);
console.log(String.prototype);
//? strOne can access all features in String constructor, bcs prototype contain all features
