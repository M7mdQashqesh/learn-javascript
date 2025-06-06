/* 
  DOM [Create Elements]
  - Practice Product With Heading and paragraph
*/

for (let i = 1; i <= 100; i++) {
  myProduct = document.createElement("div");
  myH2 = document.createElement("h2");
  myP = document.createElement("p");

  textForH2 = document.createTextNode(`Product Title ${i}`);
  textForP = document.createTextNode("Product Description");

  myProduct.className = "product";

  myH2.appendChild(textForH2);
  myProduct.appendChild(myH2);

  myP.appendChild(textForP);
  myProduct.appendChild(myP);

  document.body.appendChild(myProduct);
}
