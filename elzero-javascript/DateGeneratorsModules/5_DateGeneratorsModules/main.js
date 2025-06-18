/* 
  Date And Time
    - Track Operation Time

  Search
    - performance.now()
    - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 10000; i++) {
  // document.writeln(`<div>${i}</div>`);
  let div = document.createElement("div");
  let text = document.createTextNode(i);
  div.appendChild(text);
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let operationDuration = end - start;

console.log(operationDuration);
