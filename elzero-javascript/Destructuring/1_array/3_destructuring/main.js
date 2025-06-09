/* 
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

/* we want swap using older way and using destructuring */

/* old way */
/* --------------------------- */
/* let temp = book;
book = video;
video = temp;

console.log(book);
console.log(video); */
/* --------------------------- */

/* Destructuring way */
[book, video] = [video, book];

console.log(book);
console.log(video);
