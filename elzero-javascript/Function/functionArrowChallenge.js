/* 
  Function Arrow Challenges
*/

// [1] One Statement in Function
// [2] Convert to Arrow Function
// [3] Print the output [Arguments May Change]

let names = function (...peopleNames) {
  // Parameter ?
  return `String [${peopleNames.join("], [")}] => Done !`;
};

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

let names2 = (...peopleNames) =>
  `String [${peopleNames.join("], [")}] => Done !`;

console.log(names2("Osama", "Mohamed", "Ali", "Ibrahim"));

// [1] Replace ??? In Return Statement To get the output
// [2] Create The Same Function with regular syntax
// [3] Use Array Inside The Arguments to get the Output

let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums.shift();

console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80
