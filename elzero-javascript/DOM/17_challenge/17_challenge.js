/* ------------------------[Header]---------------------------- */
let header = document.createElement("header");

/* Logo */
let logo = document.createElement("h1");
logo.className = "logo";
logo.textContent = "Mohammed";
logo.style.color = "green";
header.appendChild(logo);
/* Logo */

/* un-order List */
let navbar = document.createElement("ul");

let listItems = ["Home", "About", "Service", "Contact"];
/* for (let item of listItems) */
for (let i = 0; i < listItems.length; i++) {
  let item = document.createElement("li");
  item.textContent = listItems[i];
  item.style.cursor = "pointer";
  navbar.appendChild(item);
}

navbar.style.cssText = "display: flex; gap:20px; list-style:none";

header.appendChild(navbar);
/* un-order List */

document.body.appendChild(header);

header.style.cssText =
  "display:flex; align-items: center; justify-content: space-between; padding-inline: 30px";

/* ------------------------[Header]---------------------------- */

/* ------------------------[content]---------------------------- */
let content = document.createElement("div");
content.className = "content";
content.style.cssText =
  "background: gray; display:flex; flex-wrap:wrap; padding:20px; justify-content: space-between; gap: 20px 0";

for (let i = 1; i <= 15; i++) {
  let product = document.createElement("div");
  product.textContent = "Product";
  product.style.cssText =
    "background:white; width: calc((100% - 40px) / 3); padding-block:40px; display:flex; flex-direction: column; align-items: center; gap:10px;";
  let span = document.createElement("span");
  span.textContent = i;
  span.style.cssText = "font-size:30px; font-weight:bold";
  product.prepend(span);

  content.appendChild(product);
}

document.body.appendChild(content);
/* ------------------------[content]---------------------------- */

/* ------------------------[footer]---------------------------- */
let footer = document.createElement("footer");
footer.textContent = "Copyright 2025";
footer.style.cssText = "background:green; color: white; font-size: 20px; font-weight: bold; text-align: center; padding: 20px"

document.body.appendChild(footer);
/* ------------------------[footer]---------------------------- */
