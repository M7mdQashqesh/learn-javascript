let myPromise = new Promise((res, rej) => {
  let myReq = new XMLHttpRequest();
  myReq.open("GET", "./data.json");
  myReq.send();

  myReq.onload = function () {
    if (this.readyState === 4 && this.status === 200) {
      try {
        res(JSON.parse(this.responseText));
      } catch (error) {
        rej("Error Parsing JSON");
      }
    } else {
      rej(Error("No Data Found"));
    }
  };
});

myPromise
  .then((resolvedValues) => {
    resolvedValues.length = 5;
    return resolvedValues;
  })
  .then((resolvedValues) => {
    for (let i = 0; i < resolvedValues.length; i++) {
      let div = document.createElement("div");

      let h3 = document.createElement("h3");
      h3.textContent = resolvedValues[i].title;
      div.appendChild(h3);

      let p = document.createElement("p");
      p.textContent = resolvedValues[i].description;
      div.appendChild(p);

      document.body.appendChild(div);
    }
  });
