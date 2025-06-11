let theNumber = 100020003000;

let mySet = new Set(theNumber.toString());
console.log(parseInt([...Array.from(mySet).sort()].join("")));
