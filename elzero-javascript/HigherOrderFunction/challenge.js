/* 
  لديك متغير بإسم mix يحتوي على Letters And Numbers
  قم بإنشاء Array جديدة بواسطة ال Map
  يجب عليك إستثناء الأرقام نهائيا من النتيجة
  يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
  يجب إستعمال ال Map + Reduce مع ما تعلمته لتخرج بالناتج المطلوب
  ممنوع إستخدام ال Join أو Filter
*/

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let resultOfMix = mix
  .map(function (element) {
    return isNaN(parseInt(element)) ? element : "";
  })
  .reduce(function (accumulator, element) {
    return accumulator + element;
  });

console.log(resultOfMix); // Elzero

//!
//!
console.log("-".repeat(20));
//!
//!
/* 
  لديك متغير بإسم myString يحتوي على Letters منها المكرر ومنها العادي
  قم بإنشاء Array جديدة بواسطة ال Filter
  يجب عليك إستثناء ال Letters المكررة نهائيا من النتيجة
  يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
*/

let myString = "EElllzzzzzzzeroo";

let resultMyString = myString
  .split("")
  .filter(function (element, index, array) {
    return array.indexOf(element) === index;
    // IndexOf(), return first index he will meet => return first char from each char
  })
  .join("");

console.log(resultMyString); // Elzero

//!
//!
console.log("-".repeat(20));
//!
//!
/* 
  لديك متغير بإسم myArray يحتوي على Array وبداخلها Array أخرى
  قم بإنشاء Array جديدة بواسطة ال Reduce
  يجب عليك عمل Flatten لل Array لترجع ب Array واحدة
  يجب عليك عمل Concatenate لل Letters لتخرج بالنتيجة
  ممنوع إستخدام Array.flat() نهائيا
*/

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let resultMyArray = myArray.reduce(function (accumulator, element) {
  if (element.length > 1) {
    let internalArray = element.reduce(function (acc, el) {
      return acc + el;
    });
    console.log(internalArray);
  } else {
    return accumulator + element;
  }
});

console.log(`"Need To Solve"`); // Elzero

//!
//!
console.log("-".repeat(20));
//!
//!
/* 
  لديك متغير بإسم numsAndStrings يحتوي على Letters And Numbers
  قم بإنشاء Array جديدة بواسطة ال Filter + Map
  يجب عليك إستثناء ال Letters من النتيجة
  يجب عليك عكس الأرقام بمعنى الموجب يكون سالب والسالب يكون موجب
  يجب عليك إستخدام ال Map + Filter + ما تريد
*/

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let resultNAS = numsAndStrings
  .filter(function (element) {
    return !isNaN(parseInt(element));
  })
  .map(function (element) {
    return -element;
  });

console.log(resultNAS); // [-1, -10, 10, 20, -5, -3]

//!
//!
console.log("-".repeat(20));
//!
//!
/* 
  لديك متغير بإسم nums يحتوي على مجموعة أرقام زوجية وفردية
  قم بإيجاد النتيجة النهائية المطلوبة بواسطة إستخدام ال Reduce فقط
  يجب عليك تعيين ال Initial Value لل Reduce لرقم 1
  إذا كانت قيمة ال Current Element في ال Reduce رقم فردي قم بجمع ال Accumulator مع ال Current Element
  إذا كانت قيمة ال Current Element في ال Reduce رقم زوجي قم بضرب ال Accumulator مع ال Current Element
*/

let nums = [2, 12, 11, 5, 10, 1, 99];

let resultNums = nums.reduce(function (acc, el) {
  if (el % 2 !== 0) {
    return acc + el;
  } else if (el % 2 === 0) {
    return acc * el;
  }
}, 1);

console.log(resultNums); // 500
