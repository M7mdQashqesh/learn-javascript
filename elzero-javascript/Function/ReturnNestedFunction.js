// Example 1
/* 
  function sayMessage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMessage() {
    message = `${message} ${fName} ${lName}`;
  }

  concatMessage();
  return message;
}

console.log(sayMessage("Mohammed", "Qashqesh"));
*/

// Example 2
/* 
  function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatMessage() {
    return `${message} ${fName} ${lName}`;
  }

  return concatMessage();
}

console.log(sayMessage("Mohammed", "Qashqesh"));
*/

// Example 3
function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatMessage() {
    function getFullName() {
      return `${fName} ${lName}`;
    }

    return `${message} ${getFullName()}`;
  }

  return concatMessage();
}

console.log(sayMessage("Mohammed", "Qashqesh"));
