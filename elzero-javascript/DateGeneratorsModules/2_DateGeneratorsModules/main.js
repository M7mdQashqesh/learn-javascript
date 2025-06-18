/* 
  Date And Time
    - getTime() => Number Of MilliSecond
    - getDate() => Day Of The Month
    - getFullYear()
    - getMonth() => Zero Based
    - getDay() => Day Of The Week
    - getHours()
    - getMinutes()
    - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date("Dec 18, 2003");

console.log(birthday);

/* 
  بدي اجيب الوقت والتاريخ من اول تاريخ ميلادي لحد الوقت الحالي
  مش من اول الوقت او ال Epoch Time
*/

let dateDiff = dateNow - birthday;

console.log(dateDiff); // in ms
console.log(dateDiff / (1000 * 60 * 60 * 24 * 365));

console.log(dateNow);
console.log(dateNow.getTime()); // in MS from Epoch Time
console.log(Date.now()); // the same

console.log(dateNow.getDate()); // Day Of The Month

console.log(dateNow.getFullYear()); // Years

console.log(dateNow.getMonth()); // Zero Based January => [0] index

console.log(dateNow.getDay()); // Day Of The Week -> Sunday [0] index

console.log(dateNow.getHours()); // Format 24

console.log(dateNow.getMinutes());

console.log(dateNow.getSeconds());
