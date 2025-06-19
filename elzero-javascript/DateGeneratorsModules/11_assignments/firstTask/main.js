let dateNow = new Date();
let birthdate = new Date("Dec 18, 2003");

let diff = dateNow - birthdate;

console.log(`${parseInt(diff / 1000)} Seconds`);
console.log(`${parseInt(diff / 1000 / 60)} Minutes`);
console.log(`${parseInt(diff / 1000 / 60 / 60)} Hours`);
console.log(`${parseInt(diff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${parseInt(diff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${parseInt(diff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);
