/* 
  Await
    - Await Works Only Inside Async Functions
    - Await Make JavaScript Wait For The Promise Result
    - Await Is More Elegant Syntax Of Getting Promise Result
*/

/* -------------------------------------------------- */
/* const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Good Promise");
  }, 3000);
});

function readData() {
  console.log("Before Promise");
  myPromise.then((resValue) => console.log(resValue));
  console.log("After Promise");
}
readData(); */
/* -------------------------------------------------- */

/* 
  Before Promise
  After Promise
  Iam The Good Promise

  هان بتيجي دور await
  بتخلي ال javaScript تستنى نتيجه ال promise
*/

/* -------------------------------------------------- */
const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Iam The Good Promise");
    rej(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  // console.log(await myPromise); // for res()
  console.log(await myPromise.catch((err) => err)); // for rej()
  console.log("After Promise");
}
readData();
/* -------------------------------------------------- */
