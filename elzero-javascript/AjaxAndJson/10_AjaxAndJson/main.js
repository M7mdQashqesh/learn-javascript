/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

let myReq = new XMLHttpRequest();
myReq.open("GET", "https://jsonplaceholder.typicode.com/posts/1/comments");
myReq.send();

myReq.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let JsData = JSON.parse(this.responseText);
    // console.log(JsData);
    for (let i = 0; i < JsData.length; i++) {
      let div = document.createElement("div");
      let text = document.createTextNode(JsData[i]["body"]);
      div.appendChild(text);
      div.style.cssText = "margin-bottom: 40px";
      document.body.appendChild(div);
    }
  }
};
