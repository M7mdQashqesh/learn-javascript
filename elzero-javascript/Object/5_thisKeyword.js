/* 
  Function this Keyword
    - this Introduction
    - this Inside Object Method
    --- when a function is called as a method of an object,
    --- its this is set to the object the method is called on.

    - Global Object
    - Test Variables with Window and This 
    - Global Context
    - Function Context
*/

/* 
  الي برجع منها، مبني على مكان الاستخدام، وليه، وكيف
  ومبني على طريقه استدعائك للفنكشن
*/

console.log(this);
// window object تعود على ال
/* 
  معناها هذا this كلمة 
  يعني بحكيلو اطبع الي انا موجود فيه
  global context
*/

console.log(this === window);

//
//
myVar = 100; // var myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

//
//
function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};
/* 
  تاع الفنكشن owner هنا بتعود على ال this

  مهمه؟ this ليه هنا ال 

  معين index لو انت عندك 20 زر، كل زر في الو رقم 
  تاع الزر المعين index وانت بدك تكبس على زر معين، وتجيب
  مش الازرار بصفة عامه

  لو انا حكيتلو بدي الازرار بصفة عامة 
  رح يجيبلي اول زر بقائمة الازرار حتى لو ما كبست عليه(كبست على زر ثاني)

  بقدر احكيلو انا بدي الزر هذا، الي انا كبست عليه تحديداً this وبالتالي باستخدام 
*/

let user = {
  age: 38,
  ageInDays: function () {
    // return user.age * 365;
    return this.age * 365;
    // --- when a function is called as a method of an object,
    // --- its this is set to the object the method is called on.
  },
};

console.log(user.age);
console.log(user.ageInDays());

// Another example from me
let person = {
  theName: "Mohammed",
  theAge: 21,
  ageInMounth: function () {
    return person.theAge * 12;
  },
  printThis: function () {
    return this;
  },
};

console.log(person);
console.log(person.printThis());

console.log(person.ageInMounth());
