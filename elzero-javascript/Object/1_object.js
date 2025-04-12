/* 
  Object (الكائن)
    - Intro and what is object
    - Testing window object
    - Accessing object


    ال object يحتوي على properties and methods

    - properties:
      عبارة عن بيانات، ممكن تكون اي نوع من انواع البيانات

    - methods:
      functions هي ال 
*/

/* 
  نطبق مفهوم الكائن في الحياة العملية
  - الانسان
    properties:
      هي المعلومات الخاصه بالانسان مثل: اسم الانسان، عمره، رقم تلفونه، طوله .. الخ
    
    methods
    هي الاكشن يلي الانسان بعملها مثل: بيشرب، بياكل، بنام .. الخ
*/

//? Create object
let user = {
  // Properties
  theName: "Mohammed",
  theAge: 21,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};

//? Accessing object
console.log(user);
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
