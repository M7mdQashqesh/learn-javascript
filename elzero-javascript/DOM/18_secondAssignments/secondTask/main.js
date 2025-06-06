let inputField = document.getElementsByClassName("classes-to-add")[0];
let removeField = document.getElementsByClassName("classes-to-remove")[0];
let currentElement = document.querySelector("[title='Current']");
let classesArea = document.querySelector(".classes-list div");

inputField.addEventListener("blur", function () {
  if (inputField.value !== "") {
    let className = inputField.value.toLowerCase().trim().split(" ");
    className.forEach((cls) => currentElement.classList.add(cls));
    inputField.value = "";
    displayClassesList();
  }
});

removeField.addEventListener("blur", function () {
  if (removeField.value !== "") {
    let className = removeField.value.toLowerCase().trim().split(" ");
    className.forEach((cls) => currentElement.classList.remove(cls));
    removeField.value = "";
    displayClassesList();
  }
});

function displayClassesList() {
  if (currentElement.classList.length === 0) {
    classesArea.textContent = "No Classes To Show";
    return;
  }

  classesArea.textContent = "";

  let classes = [];

  for (let i = 0; i < currentElement.classList.length; i++) {
    classes.push(currentElement.classList[i]);
  }
  classes.sort();

  classes.forEach((cls) => {
    let span = document.createElement("span");
    span.textContent = cls;
    classesArea.appendChild(span);
  });
}

displayClassesList();
