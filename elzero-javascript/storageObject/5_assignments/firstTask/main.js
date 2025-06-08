let fontsName = document.createElement("select");
fontsName.className = "font-name";
let colors = document.createElement("select");
colors.className = "color";
let fontSize = document.createElement("select");
fontSize.className = "font-size";
let form = document.querySelector("form");

let text = document.createElement("p");
text.textContent = "Welcome To Learn JavaScript Programming Language";

form.after(text);

form.style.cssText =
  "display:flex; justify-content: space-between; padding:0 20px";

/* --------------[FONTS NAME]-------------- */
let fonts = ["Open Sans", "Cairo", "Roboto"];
createOptions(fontsName, fonts);
/* --------------[FONTS NAME]-------------- */

/* --------------[COLORS]-------------- */
let sixColors = ["red", "green", "blue", "black", "tomato", "gold"];

createOptions(colors, sixColors);
/* --------------[COLORS]-------------- */

/* --------------[FONT SIZE]-------------- */
let sizes = [];
for (let i = 16; i <= 30; i++) {
  sizes.push(i);
}
createOptions(fontSize, sizes);
/* --------------[FONT SIZE]-------------- */

function createOptions(parent, dataArr) {
  for (let i = 0; i < dataArr.length; i++) {
    let option = document.createElement("option");
    option.textContent = dataArr[i];
    parent.appendChild(option);
  }
}

form.appendChild(fontsName);
form.appendChild(colors);
form.appendChild(fontSize);

if (window.localStorage.getItem("fontName")) {
  let font = window.localStorage.getItem("fontName");
  fontsName.value = font;
  text.style.fontFamily = font;
}
if (window.localStorage.getItem("color")) {
  let color = window.localStorage.getItem("color");
  colors.value = color;
  text.style.color = color;
}
if (window.localStorage.getItem("fontSize")) {
  let storageFontSize = window.localStorage.getItem("fontSize");
  fontSize.value = storageFontSize;
  text.style.fontSize = `${storageFontSize}px`;
}

document.querySelectorAll("select").forEach((select) => {
  select.addEventListener("change", function () {
    if (select.className === "font-name") {
      text.style.fontFamily = select.value;
      window.localStorage.setItem("fontName", select.value);
    }
    if (select.className === "color") {
      text.style.color = select.value;
      window.localStorage.setItem("color", select.value);
    }
    if (select.className === "font-size") {
      text.style.fontSize = `${select.value}px`;
      window.localStorage.setItem("fontSize", select.value);
    }
  });
});
