let myAdmins = ["Ahmed ", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let count = myAdmins.indexOf("Stop");

document.write(`<div>We Have ${count} Admins</div>`);

document.write(`<hr>`);

for (let i = 0; i < count; i++) {
  document.write(`<div>`);
  document.write(`The Admin For Team ${i + 1} is ${myAdmins[i]}`);
  document.write(`<h2>Team Members: </h2>`);
  let cnt = 1;
  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
      document.write(`- ${cnt} ${myEmployees[j]} <br><br>`);
      cnt++;
    }
  }
  document.write(`</div>`);
  document.write(`<hr>`);
}
