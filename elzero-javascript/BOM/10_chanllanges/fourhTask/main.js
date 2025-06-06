let div = document.createElement("div");
div.textContent = 10;
document.body.appendChild(div);

function countDown() {
  if (parseInt(div.textContent) === 0) {
    clearInterval(handler);
    window.location.href = "https:\\elzero.org";
    return;
  }
  div.textContent -= 1;
}

let handler = setInterval(countDown, 500);
