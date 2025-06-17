/* 
  class
    Encapsulation
      - Class Field Are Public By Default
      - Guards The Data Against Illegal Access
      - Helps To Achieve The Target Without Revealing Its Complex Details
      - Will Reduce Human Errors
      - Make The App More Flexible And Manageable.
      - Simplifies The App
*/

/* 
  ال Encapsulation هو ثاني اهم حاجه من الحاجات المهمه جداً
  وثاني اعمدة ال OOP

*/

/* 
  لما انشئ userOne من class User 
  كل ال properties and methods are public, and can access it

  في حالات بحتاج انو يكون ال properties -> private 

  مثلاً 
  لو انت عندك password وحابب الاول انك تعمللها encrypt قبل ما الشخص يشوفها 

  او مثال ال credit card

  كل هذه البيانات لازم تكون private عشان تطبق عليها المطلوب وتطلع ال output الشخص الي محتاجه 
  ولكن في نفس الوقت ميقدرش يفوت على هذه البيانات ويشوفها 

  نيجي للعملي على مثال ال eSalary
*/

/* 
  ال private property كل الخواص داخل ال class بقدرو يشوفوها عادي
*/

class User {
  // Declare Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    //! this is not private
    this.e = eSalary;
    //! put "#" before it, to make it private, and need declare
    this.#e = eSalary;
  }
  //? this not private Method, can access to private properties
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Elzero", 5000);
console.log(userOne.u);

//! this is not private
console.log(userOne.e * 0.3);

//? Convert "5000 Gneh" to number, we don't need user access to this operation
let userTwo = new User(100, "Elzero", "5000 Gneh");

/* console.log(userTwo.#e * 0.3); */
console.log(userTwo.getSalary() * 0.3);
