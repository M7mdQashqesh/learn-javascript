/* 
  OOP
    Constructor Function
*/

/* 
  عن طريق ال Constructor Function بنقدر نحن ننشئ Object فيها الي احنا بدنا اياه كلو

  شو الحكمة من انشاء Object 
  وليه نستخدم Constructor Function
  السبب الرئيسي هو عشان الوراثه Inheritance 
*/

/*  */
// normal way, without OOP (Inheritance)
const userOne = {
  id: 100,
  username: "Elzero",
  salary: 5000,
  //increase salary
  salary: 5000 + 1000,
};
const userTwo = {
  id: 101,
  username: "Hassan",
  salary: 6000,
  //increase salary
  salary: 6000 + 1000,
};
const userThree = {
  id: 102,
  username: "Sayed",
  salary: 7000,
  //increase salary
  salary: 7000 + 1000,
};

/* 
  need to increase salary for Each 
  حتى نعمل هاي الشغله، بدي امشي على كل object من الموجودين وازيد عليه ال salary 
  
  وهذا بنطبق على اي operation في الدنيا واي شغله بدي اعملها في الخواص
  (بدي امشي على كل Object واحد واحد)
*/
/* -------------------------------------------------------------- */

/* 
  هلحين بدنا نشوف لو عندنا Constructor Function انشئنا منها ال users كلهم 
  التعديل هيكون كيف

  اسم ال function لازم يبلش بحرف كبير

  وانا بنشئ ال objects من ال function الي هي Constructor Function
  العمليه هاي بسموها instantiate
  بعمل instance من ال Constructor Function 

  this بتعود على ال object يلي رح انشئو من ال Constructor Function


*/
function User(id, username, salary) {
  this.id = id;
  this.u = username;
  this.s = salary;
  //increase salary (edit just here, not like previous example without using OOP)
  this.s = salary + 1000;
}

let userOneCF = new User(100, "Elzero", 5000);
let userTwoCF = new User(101, "Hassan", 6000);
let userThreeCF = new User(102, "Sayed", 7000);

console.log(userOneCF.id);
console.log(userOneCF.u);
console.log(userOneCF.s);

console.log("#".repeat(20));
console.log(userTwoCF.id);
console.log(userTwoCF.u);
console.log(userTwoCF.s);

console.log("#".repeat(20));
console.log(userThreeCF.id);
console.log(userThreeCF.u);
console.log(userThreeCF.s);


/* 
  هذا ال syntax العادي
  لسا في syntax غيرو رح نتعلمو لقدام
*/
