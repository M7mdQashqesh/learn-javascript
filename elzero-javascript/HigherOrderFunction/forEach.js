/* 
  - forEach
    -- method executes a provided function once for each array element.

  Syntax
  - forEach(callBackFunction(element, index, array) { } , thisArg)

  - Element -> The current element being processed in the array
  - Index -> The index of the current element being processed in the array
  - Array -> The current array

  Note
    - Doesnt return anything [Undefined] 
    - Break will not break the loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

// Explain forEach
allLis.forEach(function (element) {
  console.log(element);
});

//
allLis.forEach(function (element) {
  element.onclick = function () {
    // Remove Active class from All Element
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add active class to this element
    this.classList.add("active");
    // Hide all divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});
