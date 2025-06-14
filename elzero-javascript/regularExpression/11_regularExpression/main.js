/* 
  Regular Expression
    - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRegex = /\(\d{4}\)\s\d{3}-\d{4}/gi; // (1234) 567-8910
  let testValue = phoneRegex.test(phoneInput);
  if (testValue === false) {
    console.log("Oops!, wrong Pattern");
    return false;
  }
  return true;
};
