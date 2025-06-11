let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

/* let myMap = new Map(Object.entries(myInfo)) */

/* let myMap = new Map([
  ["username", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]); */

let myMap = new Map();
for (key of Object.keys(myInfo)) {
  myMap.set(key, myInfo[key]);
}

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));
