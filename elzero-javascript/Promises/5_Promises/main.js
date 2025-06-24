/* 
  Fetch API
    - Return A Representation Of The Entire HTTP Response
*/

/* ---------------------------------------------------- */
/* const getData = (apiLink) => {
  return new Promise((resolveFunction, rejectFunction) => {
    let myReq = new XMLHttpRequest();
    myReq.open("GET", apiLink);
    myReq.send();

    myReq.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolveFunction(JSON.parse(this.responseText));
      } else {
        rejectFunction(Error("No Data Found {status != 200}"));
      }
    };
  });
};

getData("https://jsonplaceholder.typicode.com/users")
  .then((resolveValue) => {
    resolveValue.length = 4;
    return resolveValue;
  })
  .then((resolveValue) => console.log(`She Name: ${resolveValue[3].name}`))
  .catch((rejectReason) => console.log(rejectReason))
  .finally(console.log("The Operation Is Done")); */
/* ---------------------------------------------------- */

/* 
  ال fetch اداة من الادوات الي بتتعامل مع ال API وتقدر تجيبلك البيانات تاعتك
*/

/* fetch */
/* ---------------------------------------------------- */
fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log(result);
    /*
    انا ما بدي ال response كلو، انا بدي ال object يلي فيه البيانات تاعتي

    نستخدم .json()

    عند استخدام fetch لجلب بيانات من API، النتيجة تكون في شكل Response object. علشان تقرأ البيانات بداخل هذا الـ Response، تستخدم .json().
  */
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 3;
    return full;
  })
  .then((three) => console.log(three[2].name));
/* ---------------------------------------------------- */

/* ---------------------------------------------------- */
/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((fullData) => {
    console.log(fullData);
    fullData.length = 5;
    return fullData;
  })
  .then((five) => {
    console.log(five);
    console.log(five[0].name);
  }); */
/* ---------------------------------------------------- */
