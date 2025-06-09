/* 
  Destructuring
  - Destructuring Object
    - Naming The Variables
    - Add New Property
    - Nested Object
    - Destructuring The Nested Object Only
*/

const user = {
  theName: "Mohammed",
  theAge: 21,
  theTitle: "Developer",
  theCountry: "Palestine",
};

/* Naming The Variables */
/* -------------------------------------------- */
/* let { theName: a, theAge: b, theCountry } = user;
console.log(a);
console.log(b);
console.log(theCountry); */
/* -------------------------------------------- */

/*  */
/* Add New Property */
/* -------------------------------------------- */
/* let { theName: a, theAge: b, theCountry, theColor: co = "red" } = user;
console.log(a);
console.log(b);
console.log(theCountry);
console.log(co); */
/* if theColor exist in user object, value of object will print, not default value */
/* -------------------------------------------- */
console.log("#".repeat(20));

/*  */
/* Nested Object */
const nesUser = {
  theName: "Mohammed",
  theAge: 21,
  theTitle: "Developer",
  theCountry: "Palestine",
  skills: {
    html: 70,
    css: 80,
  },
};

/* ------------------------------- */
/* let {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "red",
  skills,
} = nesUser;

console.log(`the progress of html is ${skills}`); */
/* the progress of html is [object Object] */
/* ------------------------------- */

/* ------------------------------- */
/* let {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "red",
  skills: {html},
} = nesUser;

console.log(`the progress of html is ${html}`); */
/* ------------------------------- */

/* ------------------------------- */
/* let {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "red",
  skills: {html:h},
} = nesUser;

console.log(`the progress of html is ${h}`); */
/* ------------------------------- */

/* ------------------------------- */
/* let {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "red",
  skills: { html: h, css },
} = nesUser;

console.log(`the progress of html is ${h}`);
console.log(`the progress of css is ${css}`); */
/* ------------------------------- */

/*  */
/* Destructuring The Nested Object Only */
let { html, css } = nesUser.skills;

console.log(html)
console.log(css)
