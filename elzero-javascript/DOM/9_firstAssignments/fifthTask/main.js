let images = document.images;

for (let i = 0; i < images.length; i++) {
  if (images[i].alt) {
    images[i].alt = "Old";
  } else {
    images[i].alt = "Elzero New";
  }
}
