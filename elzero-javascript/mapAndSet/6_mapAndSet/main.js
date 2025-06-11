/* 
  Array Methods
  - Array.from(Iterable, MapFunc, This)
    - Variable
    - String Numbers
    - Set
    - Using The Map Function
    - Arrow Function
    - Shorten The Method + Use arguments
*/

/* 
  Array.from(Iterable) من اسمها بيعمل Array من ال iterable يلي انت رح تعطيه اياها

  بتقبل منا ال iterable, MapFunction زي ما تعلمنا في ال higherOrderFunction بحيث هذا ال function بتطبق على كل عنصر من عناصر ال iterable قبل ما تنشئ ال Array
  وال this يلي بتعود على ال Array
*/

/* this iterable */
console.log(Array.from("Mohammed"));

/* this is not iterable */
console.log(Array.from(12345));

/* this iterable */
console.log(Array.from("12345"));

/* convert from string to Number, and add each number to self */
console.log(
  Array.from("12345", function (num) {
    return +num + +num;
  })
);

console.log("#".repeat(20));
/*  */
/* Example */
let myArray = [1, 1, 1, 2, 3, 4];

/* return """array""" with unique numbers */
let uniqueArray = new Set(myArray);
console.log(uniqueArray); // this is "Set" not "array"
console.log(Array.from(uniqueArray)); // this is required

/* Shorten The Method + Use arguments */
function af() {
  return Array.from(arguments);
}
console.log(af("Mohammed", "Ahmed", 1, 2, 3));
