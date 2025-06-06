let firstDiv = document.querySelector(".one");
let secondDiv = document.querySelector(".two");

let tempTitle = document.querySelector(".one").title;
let tempTextContent = document.querySelector(".one").textContent;

firstDiv.textContent = secondDiv.textContent;
firstDiv.title = secondDiv.title;

secondDiv.title = tempTitle;
secondDiv.textContent = tempTextContent;

secondDiv.textContent += " " + secondDiv.attributes.length;

console.log(firstDiv);
console.log(secondDiv);
