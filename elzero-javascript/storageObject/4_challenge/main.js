let inputField = document.querySelector(".input");
let submitBtn = document.querySelector(".add");
let tasksArea = document.querySelector(".tasks");

if (window.JSON.parse(localStorage.getItem("tasks"))) {
  let ul = document.createElement("ul");
  ul.className = "tasks-list";
  ul.style.cssText =
    "list-style:none; padding:0; display:flex; flex-direction:column; gap: 15px";
  tasksArea.appendChild(ul);

  window.JSON.parse(localStorage.getItem("tasks")).forEach((task) => {
    let li = document.createElement("li");
    let liTitle = document.createElement("h3");
    let liDeleteBtn = document.createElement("button");

    liTitle.textContent = task;
    li.style.cssText =
      "display:flex; justify-content:space-between; align-items:center; background-color:white;padding: 0 20px; border-radius: 5px";
    li.appendChild(liTitle);
    liDeleteBtn.textContent = "Delete";
    li.appendChild(liDeleteBtn);

    liDeleteBtn.onclick = function () {
      li.remove();
      manageStorage();
    };

    ul.appendChild(li);
  });
} else {
  tasksArea.textContent = "No Tasks";
}

submitBtn.addEventListener("click", function () {
  if (inputField.value !== "") {
    let unOrderList = getOrCreateUl();
    let task = createTask();
    unOrderList.appendChild(task);
    tasksArea.appendChild(unOrderList);
    inputField.value = "";
    manageStorage();
  }
});

function getOrCreateUl() {
  let ul;
  if (tasksArea.children.length === 0) {
    ul = document.createElement("ul");
    ul.className = "tasks-list";
    ul.style.cssText =
      "list-style:none; padding:0; display:flex; flex-direction:column; gap: 15px";
    tasksArea.appendChild(ul);
  } else {
    ul = document.querySelector(".tasks-list");
  }
  if (tasksArea.textContent === "No Tasks") {
    tasksArea.textContent = "";
  }
  return ul;
}

function createTask() {
  let li = document.createElement("li");
  let liTitle = document.createElement("h3");
  let liDeleteBtn = document.createElement("button");

  liTitle.textContent = inputField.value;
  li.style.cssText =
    "display:flex; justify-content:space-between; align-items:center; background-color:white;padding: 0 20px; border-radius: 5px";
  li.appendChild(liTitle);
  liDeleteBtn.textContent = "Delete";
  li.appendChild(liDeleteBtn);

  liDeleteBtn.onclick = function () {
    li.remove();
    manageStorage();
  };

  return li;
}

function manageStorage() {
  let dataArr = [];
  document
    .querySelectorAll(".tasks-list li")
    .forEach((item) => dataArr.push(item.childNodes[0].textContent));

  window.localStorage.setItem("tasks", JSON.stringify(dataArr));

  if (dataArr.length === 0) {
    window.localStorage.removeItem("tasks");
    tasksArea.textContent = "No Tasks";
  }
}
