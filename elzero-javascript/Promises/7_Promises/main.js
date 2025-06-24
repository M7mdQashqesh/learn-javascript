/* 
  Async
    - Async Before Function Mean This Function Return A Promise
    - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

/* Old Way */
/* --------------------------------------------------- */
/* function getData() {
  return new Promise((res, rej) => {
    // let users = ["Mohammed"];
    let users = [];

    if (users.length > 0) {
      res("Users Found");
    } else {
      rej(Error("No Users Found"));
    }
  });
}

getData().then(
  (resVal) => console.log(resVal),
  (rejVal) => console.log("Rejected: " + rejVal)
); */
/* --------------------------------------------------- */

/* --------------------------------------------------- */
/* function getData() {
  // let users = ["Mohammed"];
  let users = [];

  if (users.length > 0) {
    return Promise.resolve("Users Found");
  } else {
    return Promise.reject("No User Found");
  }
}

getData().then(
  (resVal) => console.log(resVal),
  (rejVal) => console.log("Rejected: " + rejVal)
); */
/* --------------------------------------------------- */

/* new way, async */
/* --------------------------------------------------- */
/* function getData() {
  // let users = ["Mohammed"];
  let users = [];

  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No User Found");
  }
}
console.log(getData()); */

/* 
  بدون كلمة async قبل ال function 
  هي عبارة عن function عادية، بترجع string

  مع موجود async بترجع promise
*/

async function getData() {
  let users = ["Mohammed"];
  // let users = [];

  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No User Found");
  }
}
console.log(getData());
getData()
  .then(
    (resValue) => console.log(resValue),
    (rejValue) => console.log(rejValue)
  )
/* --------------------------------------------------- */
