/* 
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
  theName: "Mohammed",
  theAge: 21,
  skills: ["HTML", "CSS", "JavaScript"],
  address: {
    palestine: "Hebron",
    usa: "Ohio",
  },
};

/* print name, age, skills, one of address */
let {
  theName:n,
  theAge,
  skills: [one, two, three],
  address: { palestine:p },
} = user;

console.log(n);
console.log(theAge);
console.log(one);
console.log(two);
console.log(three);
console.log(p);
