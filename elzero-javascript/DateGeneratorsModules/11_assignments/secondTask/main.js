let tenYear = 10 * 365.25 * 24 * 60 * 60 * 1000;
let date = new Date(tenYear + 1000);
date.setHours(0);
console.log(date.toString());
