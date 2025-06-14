/* 
  Regular Expression
  
  Quantifiers
  n+ => One Or More
  n* => Zero Or More
  n? => Zero Or One
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All emails

/*  */
/* print o@nn.sa */
let mailRegex1 = /\w@\w\w.sa/gi;
console.log(mails.match(mailRegex1));

/* + => one or more */
let mailRegex21 = /\w+@/gi;
console.log(mails.match(mailRegex21));

let mailRegex22 = /\w+@\w+/gi;
console.log(mails.match(mailRegex22));

let mailRegex23 = /\w+@\w+.\w+/gi;
console.log(mails.match(mailRegex23));

let mailRegex24 = /\w+@\w+.(com|net)/gi;
console.log(mails.match(mailRegex24));

/* -------------------------------------------- */
let numbers = "0110 10 150 05120 0560 350 00"; // 0 (Numbers Or No) 0

/* * => zero or more */
/* return number start with 0, end with 0, maybe has number in the middle */
let numbersRegex = /0\d*0/gi;
console.log(numbers.match(numbersRegex));

/* -------------------------------------------- */
let urls = "https://google.com http://www.website.net web.com"; //http + https
let urlsRegex1 = /https/gi;
console.log(urls.match(urlsRegex1));

let urlsRegex2 = /https?/gi; // ? for last character not all word
console.log(urls.match(urlsRegex2));

let urlsRegex3 = /https?:\/\/(www.)?.\w+.\w+/gi; // ? for all inside ( )
console.log(urls.match(urlsRegex3));

let urlsRegex4 = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRegex4));
