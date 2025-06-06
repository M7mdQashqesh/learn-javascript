/* ------------------------------------------------------------ */
/* let userIn = window.prompt("Print Number From - To", "Example: 5-20");
let arr = userIn.split("-");

let newArr = arr.map((element) => parseInt(element));

if (newArr[0] < newArr[1]) {
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    document.writeln(i + <br />)

  }
} else {
  for (let i = newArr[1]; i <= newArr[0]; i++) {
    document.writeln(i + <br />)
  }
} */
/* ------------------------------------------------------------ */

/*  */
/* another solution */
/* ------------------------------------------------------------ */
let userIn = window.prompt("Print Number From - To", "Example: 5-20");
let arr = userIn.split("-");

arr[0] = parseInt(arr[0]);
arr[1] = parseInt(arr[1]);

let min = Math.min(arr[0], arr[1]);
let max = Math.max(arr[0], arr[1]);

for (let i = min; i <= max; i++) {
  document.writeln(i + `<br />`);
}
/* ------------------------------------------------------------ */
