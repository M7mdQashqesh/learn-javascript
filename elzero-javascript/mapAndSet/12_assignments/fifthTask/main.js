let theName = "Elzero";

/* First way */
console.log([...theName]);

/* Second Way */
console.log(Array.from(theName));

/* Third Way */
let myArr1 = [];
for (let i = 0; i < theName.length; i++) {
  myArr1.push(theName[i]);
}
console.log(myArr1);

/* Fourth Way */
let myArr2 = [];
for (let i = theName.length - 1; i >= 0; i--) {
  myArr2.unshift(theName[i]);
}
console.log(myArr2);

/* Fifth way */
console.log(theName.split(""));

/* Sixth Way */
console.log(Object.assign([], theName));
