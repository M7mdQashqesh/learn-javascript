let list = document.querySelectorAll("ul li");
let div = document.getElementById("container");

if (window.localStorage.getItem("color")) {
  div.style.backgroundColor = window.localStorage.getItem("color");
  list.forEach((item) => item.classList.remove("active"));
  document
    .querySelector(`[data-color=${window.localStorage.getItem("color")}]`)
    .classList.add("active");
} else {
  div.style.backgroundColor = "red";
}

list.forEach((item) => {
  item.style.backgroundColor = item.getAttribute("data-color");

  item.addEventListener("click", function () {
    window.localStorage.setItem("color", item.getAttribute("data-color"));
    div.style.backgroundColor = window.localStorage.getItem("color");
    list.forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});
