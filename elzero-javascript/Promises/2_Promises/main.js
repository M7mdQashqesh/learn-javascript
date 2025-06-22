/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

/*
  اول ما تبدأ تنشئ ال promise ببدأ في حالة ال pending ولا تحقق ولا متحققش
  بعد ما تخلص ال promise بنتهي في حالة يا اما ال resolved (fulfilled) or rejected وترجع error او الحاجه يلي بدك تطبعها

  بعديها بننادي ال callback function الي بنمررها لل then() method وبعدين نبدأ نطبع يا اما ال resolved value يلي جايه من ال promise يا اما بطبع ال error يلي جاي من ال rejected يلي جايه من ال promise

  .then(fulfilledFunction, rejectFunction);

  بتقبل مني callback function الي بتعمل initialize لل Promise
  وال callback function بتقبل مني
  2 callback function

  وحده ال callback الخاصه بال resolve لو الوعد تحقق رح ابدأ اجيب البيانات يلي انا بدي اياها
  
  وحده هي ال callback الخاص بال reject، لو حصل reject لل promise تاعنا برجع ال error msg الي بدي اياها
*/

//====================================================================================
// let myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = true;
//   if (connect) {
//     resolveFunction("Connection Successfully");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => {
//     console.log(`Bad ${rejectValue}`);
//   }
// );

// console.log(myPromise);
//====================================================================================

/*
  في الكود السابق ما شفنا حالة ال promise في console.log(myPromise);
  جابلنا pending

  لانه هو طبع مباشرةً
  فا جاب حالة ال pending فوراً قبل ما ال promise يتحقق

  طيب كيف اشوف الحالة؟

  الحل:
  نخليه يطبع الكلام هذا
  console.log(myPromise); 
  بعد ما ال promise يتم
*/

let myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = false;
  if (connect) {
    resolveFunction("Connection Successfully");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => {
    console.log(`Bad ${rejectValue}`);
  }
);
