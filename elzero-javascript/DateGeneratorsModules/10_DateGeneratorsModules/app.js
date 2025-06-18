/* ---------------------------------------------- */
/*  */
/* import saySomething from "./main.js";
import { a, myArr, sayHello as s } from "./main.js"; */

/*  */
/* import saySomething, { a, myArr, sayHello as s } from "./main.js"; */

/*  */
/* import mohammed, { a, myArr, sayHello as s } from "./main.js"; */
/* ---------------------------------------------- */

/* ---------------------------------------------- */
/* console.log(a);
console.log(myArr);
console.log(s()); */
/* ---------------------------------------------- */

/* 
  saySomething() cannot import with 
  import { saySomething, a, myArr, sayHello as s } from "./main.js";
  """Error"""

  correct way
  import saySomething, { a, myArr, sayHello as s } from "./main.js";
*/

// console.log(saySomething());

// name is not impotent
/* ---------------------------------------------- */
/* console.log(mohammed()); */
/* ---------------------------------------------- */

import * as all from "./main.js";

console.log(all);

console.log(all.a);
console.log(all.myArr);
console.log(all.sayHello());
console.log(all.default());
