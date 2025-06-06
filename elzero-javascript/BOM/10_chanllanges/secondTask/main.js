function createPopUp() {
  let div = document.createElement("div");
  div.style.cssText =
    "position: absolute; left:50%;top: 30px;transform: translate(-50%,0); border: 1px solid gray; width:70%; text-align: center; padding:10px 0 20px 0; background: #8080801f";

  let heading = document.createElement("h3");
  heading.textContent = "Welcome";
  div.appendChild(heading);

  let paragraph = document.createElement("p");
  paragraph.textContent = "Welcome To Elzero Web School";
  div.appendChild(paragraph);

  let closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  closeBtn.style.cssText =
    "position:absolute; right:-10px; top:-10px; border-radius:50%; padding:5px 10px; background: red; color:white; border: 1px solid gray; cursor:pointer";
  div.appendChild(closeBtn);

  closeBtn.onclick = function () {
    div.remove();
  };

  document.body.appendChild(div);
}

setTimeout(createPopUp, 5000);
