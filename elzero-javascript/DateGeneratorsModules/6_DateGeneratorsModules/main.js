/* 
  Generators
    - Generator Function Run Its Code When Required
    - Generator Function Return Special Object [Generator Object]
    - Generator Are Iterable
*/

/* 
  المولدات او Generator

  ال Generator Function تختلف عن ال function العاديه يلي بنتعامل معاها

  ال code تاعها ما بعمل run الا لما احتاجو وهي عبارة عن object 
  وعبارة عن iterable بتقدر تعمل loop على البيانات يلي جواها

  مثال: كبسة ال show more في المواقع

  هاي العملية اسمها yield او الانتاجية
  انا ما بعرضلك جميع البيانات ، البيانات موجوده بس بمجرد ما تكبس على الزر  بعمل generate بيانات ثانية وبورجيك اياها
*/

// Normal Function
// function generateNumbers() {}

// Generator Function
function* generateNumbers() {
  yield 1;
  console.log("Hello From Generator Function");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

/* console.log(generator.next()); */
/* 
  ليه ال console.log() ما طبعتش ؟

  عشان ال Yield الي انت عملته بعد ما بخلص وتبدأ تاخذ البيانات بيوقف تماماً 
  
  كل يلي بعده مش رح يشتغل حالياً ، الا لما افوت بعملية ال Yield الثانية
*/
/* console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */

for (let value of generateNumbers()) {
  console.log(value);
}
console.log("#".repeat(20));

// will not print anything bcs its value was extract by "console.log(generator.next())"

// if you make "console.log(generator.next())" comment, for loop will print values

for (let value of generator) {
  console.log(value);
}
