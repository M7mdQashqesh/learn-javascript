/* 
  DOM [Events]
  - Validate form practice
  - Prevent Default
*/

/* 
  كلمة valid معناها صالح
  الحقل ال valid هو الحقل يلي انت بتنفذ فيه المطلوب منك

  على فرض فيه عنا حقل ومطلوب منا نحط فيه ايميل
  واحنا حطينا فيه ارقام
  يبقى هذا غير valid

  عملية ال validation 
  هي العملية انو انت تممشي على كافة الحقول وتتأكد ان الشخص كتب فيهم المطلوب بشكل صحيح
*/

/*  */
/* Prevent Default */
document.links[0].onclick = function (event) {
  console.log(event);
  event.preventDefault();
};

/*  */
/* Form Validation */
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.querySelector("form").onsubmit = function (event) {
  let userValid = false;
  let ageValid = false;

  console.log(userInput.value);
  console.log(userInput.value.length);

  if (userInput.value !== "" && userInput.value.length <= 10) {
    userValid = true;
  }

  if (ageInput.value !== "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    event.preventDefault();
  }
};
