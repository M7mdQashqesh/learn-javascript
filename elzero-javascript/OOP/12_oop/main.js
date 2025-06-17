/* 
  Object Meta Data And Descriptor
    - writable
    - enumerable
    - configurable [Cannot Delete Or Reconfigure]
*/

const myObj = {
  a: 1,
  b: 2,
  // Add new property
  c: 3,
};

/* But we went add new property and get full control */

/* 
  نضيف property جديده او نعدل property موجوده
*/
Object.defineProperty(myObj, "d", {
  writable: false,
  /* writable: true, */
  enumerable: false,
  /* enumerable: true, */
  configurable: false,
  /* configurable: true, */
  value: 4,
});
/* if does not write any of descriptor -> by default is "false" */

console.log(myObj);

myObj.d = 100; // writable: true
console.log(myObj);

for (let key in myObj) {
  console.log(key, myObj[key]); // d 4 -> enumerable: true
}
console.log(myObj);

console.log(delete myObj.d); // configurable: true
console.log(myObj);

// configurable: true
Object.defineProperty(myObj, "d", {
  writable: false,
  /* writable: true, */
  enumerable: false,
  /* enumerable: true, */
  configurable: false,
  /* configurable: true, */
  value: 200,
});
