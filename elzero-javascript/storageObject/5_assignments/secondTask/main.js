let form = document.createElement("form");

let firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("placeholder", "First Name");
firstNameInput.style.cssText =
  "padding:5px; border-radius:5px; border:1px solid gray";

let lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("placeholder", "Last Name");
lastNameInput.style.cssText =
  "padding:5px; border-radius:5px; border:1px solid gray";

let phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "number");
phoneInput.setAttribute("placeholder", "Phone Number");
phoneInput.style.cssText =
  "padding:5px; border-radius:5px; border:1px solid gray";

let ageSelect = document.createElement("select");

for (let i = 18; i <= 30; i++) {
  let option = document.createElement("option");
  option.textContent = i;
  ageSelect.appendChild(option);
}
ageSelect.style.cssText =
  "padding:5px; border-radius:5px; border:1px solid gray";

form.appendChild(firstNameInput);
form.appendChild(lastNameInput);
form.appendChild(phoneInput);
form.appendChild(ageSelect);

form.style.cssText =
  "display:flex;flex-direction:column; gap:15px; width:250px";

document.body.appendChild(form);

if (window.sessionStorage.getItem("firstName")) {
  firstNameInput.value = window.sessionStorage.getItem("firstName");
}
if (window.sessionStorage.getItem("lastName")) {
  lastNameInput.value = window.sessionStorage.getItem("lastName");
}
if (window.sessionStorage.getItem("phoneNumber")) {
  phoneInput.value = window.sessionStorage.getItem("phoneNumber");
}
if (window.sessionStorage.getItem("age")) {
  ageSelect.value = window.sessionStorage.getItem("age");
}

document.querySelectorAll("input").forEach((inputField) => {
  inputField.addEventListener("input", function () {
    if (inputField.getAttribute("placeholder") === "First Name") {
      window.sessionStorage.setItem("firstName", inputField.value);
    }
    if (inputField.getAttribute("placeholder") === "Last Name") {
      window.sessionStorage.setItem("lastName", inputField.value);
    }
    if (inputField.getAttribute("placeholder") === "Phone Number") {
      window.sessionStorage.setItem("phoneNumber", inputField.value);
    }

    if (!window.sessionStorage.getItem("firstName")) {
      window.sessionStorage.removeItem("firstName");
    }
    if (!window.sessionStorage.getItem("lastName")) {
      window.sessionStorage.removeItem("lastName");
    }
    if (!window.sessionStorage.getItem("phoneNumber")) {
      window.sessionStorage.removeItem("phoneNumber");
    }
  });
});

document.querySelector("select").addEventListener("change", function () {
  window.sessionStorage.setItem("age", ageSelect.value);
});
