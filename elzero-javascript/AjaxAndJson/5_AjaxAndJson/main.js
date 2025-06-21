/*
  To Understand Ajax, Fetch, Promises

  Asynchronous (غير متزامن) vs Synchronous (متزامن) Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
    كل عملية بتم لازم العملية يلي قبلها تخلص تماماً عشان العملية الجديده تبدأ تتم
    يعني العمليات بتمشي ورا بعض بتسلسل
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
    العمليات بتم مع بعض مش محتاج ابداً ان تستنى العملية يلي قبل تخلص عشان تشتغل
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous
// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 3000);
console.log("3");

/* 
  console.log("1");  هاي العملية رح تتم
  console.log("2");  هاي العملية رح تتم
  setTimeout(() => console.log("Operation"), 3000); مش راح نستى هاي تتم عشان ننفذ السطر التالي
  console.log("3");
  هاي رح تتم فوراً

  setTimeout(() => console.log("Operation"), 3000); وهاي شغالة in parallel

*/
