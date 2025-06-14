/* 
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

/* end by */
console.log(/ing$/gi.test(myString)); // end with ing
console.log(/lz$/g.test(names)); // i => insensitive

/* start by */
console.log(/^we/gi.test(myString));
console.log(/^2/gi.test(names));
console.log(/^\d/gi.test(names));

/* ?= followed by something */
console.log(names.match(/\d\w{5}z$/gi)); // end with z
console.log(names.match(/\d\w{5}(?=z)/gi)); // followed by z

console.log(names.match(/\d\w{8}(?=z)/gi));
console.log(names.match(/\d\w{8}(?!z)/gi));
