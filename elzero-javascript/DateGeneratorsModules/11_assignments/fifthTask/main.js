let startTime = performance.now();

for (let i = 0; i <= 99999; i++) {
  console.log(i);
}

let endTime = performance.now();

console.log(`Loop Took ${endTime - startTime} Milliseconds.`);
