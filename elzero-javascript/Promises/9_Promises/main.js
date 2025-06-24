/* 
  async & await with try, catch, finally
*/

/* ---------------------------------------------- */
/* const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam A Good Promise");
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  console.log(await myPromise);
  console.log("After Promise");
}
readData(); */
/* ---------------------------------------------- */

/*  */
/* Promise with try, catch, finally */
/* ---------------------------------------------- */
/* const myPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("Iam A Good Promise");
    rej("Iam A Bad Promise");
  }, 3000);
});

async function readData() {
  console.log("Before Promise");

  try {
    console.log(await myPromise);
  } catch (error) {
    console.log(`Reason: ${error}`);
  } finally {
    console.log("After Promise");
  }
}
readData(); */
/* ---------------------------------------------- */

/*  */
/* Fetch with try, catch, finally */
/* ---------------------------------------------- */
async function fetchData() {
  console.log("Before Fetch");

  try {
    let myData = await fetch("https://jsonplaceholder.typicode.com/users");

    // console.log(myData); // response
    // console.log(myData.json()); // promise
    console.log(await myData.json()); // array of objects (data)
  } catch (error) {
    console.log(`Reason: ${error}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
/* ---------------------------------------------- */
