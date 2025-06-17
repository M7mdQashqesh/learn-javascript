/*
  Object Meta Data And Descriptor
    - Define Multiple Properties
    - Check Descriptor
*/

let myObj = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObj, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObj);

console.log(Object.getOwnPropertyDescriptor(myObj, "c"));

console.log(Object.getOwnPropertyDescriptors(myObj));
