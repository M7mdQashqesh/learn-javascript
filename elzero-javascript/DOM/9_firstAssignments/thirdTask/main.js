let usdInput = document.querySelector("[type='number']");

let usdResult = document.getElementsByClassName("usd")[0];
let egyResult = document.getElementsByClassName("egy")[0];

usdInput.oninput = function () {
  usdResult.textContent = usdInput.value;

  egyResult.textContent = (usdInput.value * 15.6).toFixed(2);

  if (usdInput.value === "") {
    usdResult.textContent = 0;
    egyResult.textContent = 0;
  }
};
