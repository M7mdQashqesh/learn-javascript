/* 
  Generators
    - Generate Infinite Numbers
    - User Return Inside Generators
*/

/* User Return Inside Generators */
/* --------------------------------------- */
/* function* generateNumber() {
  yield 1;
  yield 2;
  return "A";
  yield 3;
  yield 4;
}

let generator = generateNumber();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */
/* --------------------------------------- */

/* --------------------------------------- */
function* infiniteNumbers() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

/* 
  لو حطيناه ب normal function كان اشتغل لحالو وعلق الجهاز

  لكن هان يتم تشغيل الكود فقط عند الحاجه وينتج خطوه خطوه 
*/

let generator = infiniteNumbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
//  .
//  .
//  .
// etc
/* --------------------------------------- */
