/* 
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias -> PageXOffset]
  - scrollY [Alias -> PageYOffset]
    - Alias -> بديل
*/

/* 
  scrollX, scrollY -> return value only
  يعني بقرأ القيمه يلي بترجعها وبعتمد عليها في الفكره تاعتي
*/

console.log(window.scrollX === window.pageXOffset);
console.log(window.scrollY === window.pageYOffset);

/* ------------[up button]--------------- */
let upBtn = document.querySelector("button");

upBtn.style.cssText =
  "position: fixed; bottom:30px; right:30px; border-radius:50%; padding:10px; cursor: pointer; display: none";
/* ------------[up button]--------------- */
window.onscroll = function () {
  console.log(window.scrollY);
  if (window.scrollY >= 200) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
};

upBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
