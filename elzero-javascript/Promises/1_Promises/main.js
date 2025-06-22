/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell
    هاي وحده من المشاكل الي رح تقابلها بحياتك والتي لها حلول كثير والي رح نفهم فكرتها عشان لما ندخل في عالم ال promise، بتعالج المشكلة هاي
  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

//------------------------------------------------------
function makeRed(e) {
  e.target.style.color = "red";
}

document.querySelector(".text").addEventListener("click", makeRed);
//------------------------------------------------------

//------------------------------------------------------
function iAmCallback() {
  console.log("I Am CallBack Function");
}
setTimeout(iAmCallback, 2000);
//------------------------------------------------------

//------------------------------------------------------
setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
//------------------------------------------------------
