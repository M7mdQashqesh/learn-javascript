let form = document.forms[0];
let noElement = document.getElementsByClassName("input")[0];
let textElement = document.getElementsByClassName("input")[1];
let option = document.querySelector("select");
let result = document.querySelector(".results");

form.onsubmit = function (event) {
  event.preventDefault();

  for (let i = 1; i <= noElement.value; i++) {
    let element;
    if (option.value === "Div") {
      element = document.createElement("div");
    } else {
      element = document.createElement("section");
    }
    element.className = "box";
    element.title = "ELement";
    element.id = `id-${i}`;

    let text = textElement.value;
    element.textContent = text;

    result.appendChild(element);
  }
};


