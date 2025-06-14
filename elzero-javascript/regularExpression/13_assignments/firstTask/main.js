/* ------------------------{First Task}---------------------------- */
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRegex = /\d{4}\:\w{3}\:(\d{4}\:){5}\d{4}/gi;
console.log(ipRegex.test(ip));

/* ------------------------{Second Task}---------------------------- */
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialRegex = /os\d*o/gi;
console.log(specialNames.match(specialRegex));

/* ------------------------{Third Task}---------------------------- */
let phone = "+(995)-123 (4567)";
let phoneRegex = /\+\(\d{3}\)\-\d{3}\s\(\d{4}\)/gi;
console.log(phoneRegex.test(phone));

/* ------------------------{Fifth Task}---------------------------- */
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /(\d{2}(\/|\s\-\s|\s)){2}(\d{4}|\d{2})/g; // Write Pattern Here

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
