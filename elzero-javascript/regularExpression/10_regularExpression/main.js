/* 
  Regular Expression

  - replace()
  - replaceAll()
*/

let txt = "We Love Programming And @ Because @ Is Amazing";

console.log(txt.replace("@", "JavaScript"));

console.log(txt.replaceAll("@", "JavaScript"));

console.log(txt.replaceAll(/@/gi, "JavaScript"));

let regex = /@/gi;
console.log(txt.replaceAll(regex, "JavaScript"));

