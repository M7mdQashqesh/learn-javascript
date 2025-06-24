/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successful Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successful Or Failed Finally Do Something
*/

/* First Example */
/* ---------------------------------------------------- */
/* let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let correct = true;

  if (correct) {
    resolveFunction("Successful");
  } else {
    rejectFunction(Error("Failed"));
  }
}).then(
  (resolveValue) => console.log(`The Connection has ${resolveValue}`),
  (rejectValue) => console.log(`The Connection has ${rejectValue}`)
); */
/* ---------------------------------------------------- */

/* Second Example */
/* ---------------------------------------------------- */
let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Mohammed", "Ahmed", "Waled", "Jamel"];

  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Chosen Employee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));

/* 
  هان احنا ما كتبنا ال rejectValue 
  فا بالتالي اذا صار في error بوخذ ال default value 
  وبالتالي بطبع ال rejectFunction(Error("Number Of Employees Is Not 4"))

  لما احط ال .catch()
  داخلها يتم تنفيذ ال rejectedFunction 

  ثم يأتي بعدها ال .finally()
  داخلها يتم تنفيذه في جميع الحالات
  resolve or reject
*/
/* ---------------------------------------------------- */
