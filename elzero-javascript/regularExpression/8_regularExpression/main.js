/* 
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serial = "S100S S3000S S50000S S950000S";

console.log(serial.match(/S\d{3}S/gi)); // S[THREE NUMBER]S
console.log(serial.match(/S\d{4,5}S/gi)); // S[FOUR OR FIVE NUMBER]S
console.log(serial.match(/S\d{4,}S/gi)); // S[AT LEAST FOUR]S
