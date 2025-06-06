/* 
  Object
    - Create Object With Create Method
*/

let user = {
  age: 21,
  doubleAge: function () {
    // return user.age * 2;
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

console.log("#".repeat(15));
/*  */
/* Create Object use create method in Object constructor */
let obj = Object.create({});
/* 
  بدنا نشوف ال method شو  بتقبل منا
  بتقبل object يستخدم كنموذج لانشاء ال object الجديد
  وممكن يكون فاضي {}
*/
console.log(obj);

obj.a = 100;
console.log(obj);

console.log("#".repeat(15));
/*  */
/* Create copy Object use create method in Object constructor */
let copyObj = Object.create(user);
/* 
  استخدمنا user كنموذج 
*/
console.log(copyObj);
/* 
  هان ال copyObj بكون فاضي ما فيه property or methods
*/
console.log(copyObj.age);
console.log(copyObj.doubleAge());
/* 
  احنا هان استخدمنا ال property الموجوده ب user
  لانه استخدمناها ك نموذج لل copyObj
  بالتالي ال copyObj مرتبطة ب user
*/

console.log("-".repeat(5));
/*  */
/* Update copy Object */
copyObj.age = 40;
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/* 
  to solve this problem, should print 40 and 80 
  we should use "this" rather than "user" in line 9

  "this" implies to who call the method in the object
  in this case 
  this implies to copyObj not user

  now problem is solved
*/
