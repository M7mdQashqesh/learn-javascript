let div = document.createElement("div");
div.textContent = 10;
document.body.appendChild(div);

function countDown() {
  if (parseInt(div.textContent) === 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400, height=400, left=200, top=100"
    );
  } else if (parseInt(div.textContent) === 0) {
    clearInterval(handler);
    return;
  }
  div.textContent -= 1;
}

let handler = setInterval(countDown, 500);
