/* 
  Regular Expression

  Ranges
    - [a-z]
    - [^a-z]
    - [A-Z]
    - [^A-Z]
    - [abc] => a and b and c
    - [^abc]
*/

let myString = "AaBbcdefG123!234%^&*";

/* return small letter */
let smallRegex = /[a-z]/g;
console.log(myString.match(smallRegex));

let notSmallRegex = /[^a-z]/g;
console.log(myString.match(notSmallRegex));

/* return capital letter */
let capitalRegex = /[A-Z]/g;
console.log(myString.match(capitalRegex));

let notCapitalRegex = /[^A-Z]/g;
console.log(myString.match(notCapitalRegex));

let aAndcAnde = /[ace]/g;
console.log(myString.match(aAndcAnde));

let notaAndcAnde = /[^ace]/g;
console.log(myString.match(notaAndcAnde));

/* return all characters capital and small */
let capitalAndSmallRegex = /[a-zA-z]/g;
console.log(myString.match(capitalAndSmallRegex));

/* return everything expect capital and small */
let notCSRegex = /[^a-zA-z]/g;
console.log(myString.match(notCSRegex));

/* return Specials Only */
let special = /[^a-zA-Z0-9]/g;
console.log(myString.match(special));

let specialNotPower = /[^a-z^A-Z0-9]/g;
console.log(myString.match(specialNotPower));
