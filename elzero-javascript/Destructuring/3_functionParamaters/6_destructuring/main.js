/* 
  Destructuring
  - Destructuring Function Parameters
*/

let user = {
  theName: "Mohammed",
  theAge: 21,
  skills: {
    html: 70,
    css: 80,
  },
};

/* Create a function, take object, and print data of object */

/* old way */
/* ----------------------------------------- */
function printObj(obj) {
  console.log(`the name is ${obj.theName}`);
  console.log(`the age is ${obj.theAge}`);
  console.log(`the css progress is ${obj.skills.css}`);
}
/* ----------------------------------------- */

/* destructuring way */
/* ----------------------------------------- */
function showDetails({
  theName: n,
  theAge,
  skills: { css },
  theColor: co = "red",
} = user) {
  console.log(`user name is ${n}`);
  console.log(`user age is ${theAge}`);
  console.log(`user css progress is ${css}`);
  console.log(`color is ${co}`);
}
/* ----------------------------------------- */

printObj(user);
console.log("#".repeat(20));
showDetails(user);
