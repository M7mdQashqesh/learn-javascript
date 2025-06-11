/* 
  Array Methods
  Array.every(CallbackFunc(Element, Index, Array), this Argument)
  - CallbackFunc => Function To Run On Every Element On The Given Array
      - Element => The Current Element To Process
      - Index => Index Of Current Element
      - Array => The Current Array Working With
    this Argument => Value To Use As This When Executing CallbackFunc
    --
*/

/* 
  بال Array.some() حكينا انو اذا بنطبق الشرط على عنصر واحد على الاقل، بترجع true وبتوقف 

  ال Array.every() عكسها، لازم الشرط ينطبق على كل العناصر عشان ترجع true
  ولو في عنصر واحد بس ما انطبقش عليه الشرط، بترجع false
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};

/* 
  const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};
*/

let mainLocation = 15;

/* check if """all""" location in object is greater than mainLocation */
let myArr = Object.keys(locations).map((el) => parseInt(el));
console.log(myArr);

/* ------------------------------------------------------ */
/* let check = myArr.every(function (element) {
  return element > mainLocation;
});
console.log(check); */
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
let check = myArr.every(function (element) {
  return element > this;
}, mainLocation);
console.log(check);
/* ------------------------------------------------------ */
