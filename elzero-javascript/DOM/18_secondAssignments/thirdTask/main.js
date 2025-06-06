document.querySelector("p").remove();

let ourElement = document.querySelector(".our-element");

/* --------------[Start Element]---------------- */
let startElement = document.createElement("div");
startElement.className = "start";
startElement.title = "Start Element";

let startText = document.createTextNode("Start");
startElement.appendChild(startText);

let startAttribute = document.createAttribute("data-value");
startAttribute.value = "Start";
startElement.setAttributeNode(startAttribute);

ourElement.before(startElement);
/* --------------[Start Element]---------------- */

/* --------------[End Element]---------------- */
let endElement = document.createElement("div");
endElement.className = "end";

let endText = document.createTextNode("End");
endElement.appendChild(endText);

let titleAttribute = document.createAttribute("title");
titleAttribute.value = "End Element";
endElement.setAttributeNode(titleAttribute);

let endAttribute = document.createAttribute("data-value");
endAttribute.value = "End";
endElement.setAttributeNode(endAttribute);

ourElement.after(endElement)
/* --------------[End Element]---------------- */
