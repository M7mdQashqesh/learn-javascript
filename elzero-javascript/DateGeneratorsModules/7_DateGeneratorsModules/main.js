/* 
  Generators
    - Delegate Generator
*/

/* 
  كلمة delegate معناها مندوب او نائب
  عملية ال delegating هو انو generator function تنوب عن generator function ثانية في انها هي تعمل yield للبيانات 
*/

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  // to get all value, put * after yield
  yield* generateNumbers();
  yield* generateLetters();
  yield* [10, 20, 30];
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// if yield [10,20,30] -> {value: Array(3), done: false}, print all array one time

// if yield* [10,20,30] -> generator.next()
// {value: 10, done: false}
// {value: 20, done: false}
// {value: 30, done: false}
// {value: undefined, done: true}
console.log(generator.next());

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

/*  */
// generator.return();
/* 
  بتقفل عمل الانتاجيه تماماً، بتقفل ال generator function
  بالتالي وهي وكل يلي بعدها رح يكونو
  {value: undefined, done: true}

  اذا كتبت اشي جوا ال return 
  رح تكون هي ال value وال done: true
*/
console.log("#".repeat(20));

let generator1 = generateAll();

console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
// console.log(generator1.return());
console.log(generator1.return("end"));
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
console.log(generator1.next());
