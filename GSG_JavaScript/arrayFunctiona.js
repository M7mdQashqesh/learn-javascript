const salaries = [2500, 3500, 2800, 4700, 4300, 2900];
const names = ["Ahmed", "Saeed", "Hiba", "Sara", "Jameel", "Waleed"];

//
//
// *************** {forEach} ***************
const printSal = (salary, index) => {
  console.log(index + ": " + salary);
};

salaries.forEach(printSal); // first way

console.log("-------------------");

for (let i = 0; i < salaries.length; i++) {
  // explain for first way
  const item = salaries[i];
  printSal(item, i);
}

console.log("-------------------");

// Shorter Version  put the printSal Fun into forEach
salaries.forEach((salary, index) => {
  console.log(index + ": " + salary);
});

console.log("-------------------");

//
//
// *************** {map} ***************
// Add 200 bonus for each salary
const newSalaries = [];
for (let i = 0; i < salaries.length; i++) {
  const newSalary = salaries[i] + 200;
  newSalaries.push(newSalary);
}

console.log(newSalaries);

console.log("-------------------");

const addBonus = (salary) => {
  return salary + 200;
};

const bonusSalary = salaries.map(addBonus);

console.log(bonusSalary);

//
//
// *************** {reduce} ***************
// summation all Salaries
const totalSalaries = salaries.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // initial value -> accumulator = 0;

console.log(totalSalaries);

//
//
// *************** {filter} ***************
// Remove Employees that have salaries more then 4000
const filterHightSalaries = (salary) => {
  if (salary >= 4000) return false;
};

const deductedSalaries = salaries.filter(filterHightSalaries);

console.log(deductedSalaries);

// Shorter Version
const deductedSalaries2 = salaries.filter((salary) => {
  if (salary >= 4000) {
    return false;
  } else {
    return true;
  }
});

console.log(deductedSalaries2);

// More Shorter Version
const deductedSalaries3 = salaries.filter((salary) =>
  salary < 4000 ? true : false
);

console.log(deductedSalaries3);

//
// **** Self study ****
// sort()
// include()
// reverse()
// some()
// every()
