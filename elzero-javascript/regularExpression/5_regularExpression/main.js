/* 
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators (\n).
  \w => matches word characters, [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters.
  \d => matches digits from 0 to 9.
  \D => matches Non-digits characters.
  \s => matches whitespace character.
  \S matches non-whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";

/*  */
/* . */
let dot = /./g;
console.log(email.match(dot));

/*  */
/* \w */
let word = /\w/g; // [a-z] [A-Z] [0-9] _
console.log(email.match(word));

/*  */
/* \W */
let notWord = /\W/g; // anything not ([a-z] [A-Z] [0-9] _ ), include whitespace, newline, specials
console.log(email.match(notWord));

/*  */
/* \d */
let digits = /\d/g;
console.log(email.match(digits));

/*  */
/* \D */
let notDigit = /\D/g;
console.log(email.match(notDigit));

/*  */
/* \s */
let whitespaces = /\s/g;
console.log(email.match(whitespaces));

/*  */
/* \S */
let notWhiteSpaces = /\S/g;
console.log(email.match(notWhiteSpaces));

/*  */
/* valid email */
let validEmailRegex = /\w@\w.(com|net)/g;
console.log(email.match(validEmailRegex));
