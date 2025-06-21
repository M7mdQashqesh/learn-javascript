// Second Task
let req = new XMLHttpRequest();
req.open("GET", "../firstTask/articles.json");
req.send();

req.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

req.onload = function () {
  console.log("Data Loaded");

  console.log("#".repeat(15));
  let mainData = JSON.parse(req.responseText);

  for (let i = 0; i < mainData.length; i++) {
    mainData[i]["category"] = "All";
  }
  console.log(mainData);

  let updatedData = JSON.stringify(mainData);
  console.log(updatedData);

  let container = document.createElement("div");
  container.id = "data";
  for (let i = 0; i < JSON.parse(updatedData).length; i++) {
    let div = document.createElement("div");

    let h2 = document.createElement("h2");
    h2.textContent = JSON.parse(updatedData)[i]["title"];
    div.appendChild(h2);

    let content = document.createElement("p");
    content.textContent = JSON.parse(updatedData)[i]["content"];
    div.appendChild(content);

    let author = document.createElement("p");
    author.textContent = JSON.parse(updatedData)[i]["author"];
    div.appendChild(author);

    let category = document.createElement("p");
    category.textContent = JSON.parse(updatedData)[i]["category"];
    div.appendChild(category);

    container.appendChild(div);
  }
  document.body.appendChild(container);
};
