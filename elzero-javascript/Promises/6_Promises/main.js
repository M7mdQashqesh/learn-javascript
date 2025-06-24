/* 
  Promise
    - All
    - All Settled
    - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Im The First Promise");
    // rej("Im The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Im The Second Promise");
    // rej("Im The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Im The Third Promise");
    // rej("Im The Third Promise");
  }, 2000);
});

/* all */
/* 
  بتطلب مني array of promises

  بترجعلي promise

  لو كل ال promises تحقق، حصللها resolve بجيبلك ال resolved value الهم كلهم
  كل هذا برجع في array
  
  لو في واحد منهم حصللو reject 
  بيحصل reject لل promise الكلي يلي برجع
  بعمل reject بوقتها، ما بكمل على كل ال promises
*/
Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejValue) => console.log(`Rejected: ${rejValue}`)
);

/* 
  هو في مرحلة ال resolve رح يمشي عليهم كلهم
  لقاهم كلهم resolved رح يجيبلك البيانات كلهم في array

  لو لقى واحد منهم reject بعمل reject لل promise يلي برجع

  لو في ثنتين reject برجع اول وحده بلاقيها
*/

/*  */
/* All Settled */
Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resValues) => console.log(resValues),
  (rejValue) => console.log(rejValue)
);

/* 
  بتطلب مني array of promises

  بترجعلي promise

  An array of Promises.

  Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

  الفرق ان ال .all() ما بكمل لما يكون في reject

  اما ال .allSettled() بكمل وبرجع كل القيم الي عمللهم resolve and reject
*/

/*  */
/* Race */
Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resValues) => console.log(resValues),
  (rejValue) => console.log(rejValue)
);

/* 
  بتطلب مني array of promises

  بترجعلي promise

  برجع اول حاجه بلاقيها
  سواء كانت resolve or reject

  An array of Promises.

  Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.
*/
