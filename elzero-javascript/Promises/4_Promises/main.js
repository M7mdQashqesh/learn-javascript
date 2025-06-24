/* 
  Promise And XHR
*/

/* ----------------------------------------------- */
/* let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if ((this.readyState === 4) & (this.status === 200)) {
    let jsData = JSON.parse(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let userName = document.createTextNode(jsData[i]["name"]);

      div.appendChild(userName);
      document.body.appendChild(div);
    }
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send(); */
/* ----------------------------------------------- */

/* XMLHttpRequest With Promise */
/* ----------------------------------------------- */
const getData = (apiLink) => {
  return new Promise((resolveFunction, rejectFunction) => {
    let myReq = new XMLHttpRequest();
    myReq.open("GET", apiLink);
    myReq.send();

    myReq.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolveFunction(JSON.parse(myReq.responseText));
      } else {
        rejectFunction(Error("No Data Found"));
      }
    };
  });
};

getData("https://jsonplaceholder.typicode.com/users")
  .then((resolveValue) => {
    resolveValue.length = 4;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`His Name: ${resolveValue[1].name}`);
  })
  .catch((rejectReason) => console.log(rejectReason))
  .finally(console.log("The Operation Is Done"));
/* ----------------------------------------------- */
