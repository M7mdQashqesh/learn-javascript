async function readData() {
  let myFetch = await fetch("./data.json");
  let myData = await myFetch.json();
  myData.length = 5;
  for (let i = 0; i < myData.length; i++) {
    let div = document.createElement("div");

    let h3 = document.createElement("h3");
    h3.textContent = myData[i].title;
    div.appendChild(h3);

    let p = document.createElement("p");
    p.textContent = myData[i].description;
    div.appendChild(p);

    document.body.appendChild(div);
  }
}
readData();
