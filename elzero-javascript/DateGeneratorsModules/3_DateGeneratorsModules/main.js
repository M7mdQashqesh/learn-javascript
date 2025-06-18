/* 
  Date And Time
    - setTime(Milliseconds)
    - setDate() => Day Of The Month [Negative And Positive]
    - setFullYear(year, month => Optional [0-11], day => optional [1-31])
    - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
    - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => optional [0-999])
    - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

let dateNow = new Date();
console.log(dateNow);

console.log("#".repeat(66));

/* ---------------------------------------------------------- */
/* dateNow.setTime(0); // "0 ms" after Epoch Time عدى
console.log(dateNow);

console.log("#".repeat(66));

dateNow.setTime(10000); // "10 ms" after Epoch Time عدى
console.log(dateNow);

console.log("#".repeat(66)); */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* dateNow.setDate(1);
console.log(dateNow); */
/* ---------------------------------------------------------- */
/* dateNow.setDate(0);
console.log(dateNow); */
/* ---------------------------------------------------------- */
/* dateNow.setDate(-2);
console.log(dateNow); */
/* ---------------------------------------------------------- */
/* dateNow.setDate(35);
console.log(dateNow); */
/* ---------------------------------------------------------- */
/* 
  لو اخر 2 خليتهم مع بعض
  -2 بعمل التاريخ قبل يومين من اخر الشهر الماضي

  ولو حطيت بعدها setDate(1) 
  بعمل التاريخ 1 من الشهر الماضي، وليس الحالي
  لانو بعتبر الشهر الماضي هو الحالي
*/

/* ---------------------------------------------------------- */
/* dateNow.setFullYear(2016);
console.log(dateNow);

dateNow.setFullYear(2010, 0, 29);
console.log(dateNow);

dateNow.setFullYear(2010, 13, 1);
console.log(dateNow);

dateNow.setFullYear(2010, 13, 31);
console.log(dateNow); */
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
/* dateNow.setMonth(0);
console.log(dateNow);

dateNow.setMonth(11, 1);
console.log(dateNow); */

// is the same for positive and negative values
/* ---------------------------------------------------------- */

/* ---------------------------------------------------------- */
dateNow.setHours(1); // format 24
console.log(dateNow);

dateNow.setHours(1, 1, 1); // format 24
console.log(dateNow);

// setMinutes() & setSeconds(), is the same of setHours();
/* ---------------------------------------------------------- */
