// Change the style of the paragraph
let myP = document.getElementById("paragraph");
myP.style.color = "white";

document.getElementById("container").style.textAlign = "center";

// Change HTML Element
document.getElementById("btn").innerText = "Show message";

// Add HTML Event to button
let cnt = 0;
let btn = document.getElementById("btn");
btn.onclick = function () {
  console.log("Counter= " + cnt);
  // Create HTML Element
  if (cnt === 0) {
    let p2 = document.createElement("p");
    p2.innerText = "Can We Fuck, Mommy? 🤍";
    // p2.innerText = "Love You Mommy 🤍";
    p2.style.fontSize = "30px";
    p2.style.marginTop = "30px";
    p2.style.textAlign = "center";
    document.body.appendChild(p2);
  }

  cnt++;
};
