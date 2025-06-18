/* 
  Date And Time
    - Date Constructor

  Static Methods
    - Date.now()

  - To Track Time You Need To Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number Of Seconds Since January 1, 1970
  - Why 1970 [829 Days To 136 Years]

  Search For:
    - Years 2038 Problem In Computer Science
*/

/* 
  عشان تعمل track لل time الخاص لأي عمليه بتنفذها، محتاج ال starting point، الوقت يلي انت رح تبدأ من عنده، بعدين بتنفذ العمليه، وعن طريق ال starting point بتقدر تعرف كم الوقت يلي عدى
*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // in ms from 1/1/1970

console.log(Date.now() / 1000); // Second

console.log(Date.now() / (1000 * 60)); // Minutes
console.log(Date.now() / (1000 * 60 * 60)); // Hours
console.log(Date.now() / (1000 * 60 * 60 * 24)); // Days
console.log(Date.now() / (1000 * 60 * 60 * 24 * 365)); // Years
