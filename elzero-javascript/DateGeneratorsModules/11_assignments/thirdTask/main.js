let date = new Date();
date.setDate(0);
console.log(date);

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(
  `Previous Month Is ${
    month[date.getMonth()]
  } And Last Day Is ${date.getDate()}`
);
