let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

/* First Way */
console.log([...numsOne, ...numsTwo]);

/* Second Way */
console.log(numsOne.concat(numsTwo));

/* Third Way */
console.log(Object.assign([], [...numsOne, ...numsTwo]));

/* Fourth Way */
let mergedArray = [...numsOne];
numsTwo.forEach((el) => mergedArray.push(el));
console.log(mergedArray);
