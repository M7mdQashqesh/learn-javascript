let myImages = document.images;
let myImagesLength = document.images.length;
console.log(myImages);

for (let i = 0; i < myImagesLength; i++) {
  myImages[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";

  myImages[i].alt = "Elzero Logo";
}
