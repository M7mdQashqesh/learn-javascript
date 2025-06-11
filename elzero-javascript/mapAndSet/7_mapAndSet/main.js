/* 
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location In The Same Array"
    - Any Negative Value Will Count From The End
    - Target
      - Index To Copy Part To
      - If At Or Greater Than Array Length Nothing Will Be Copied
    - Start
      - Index To Start Coping From
      - If Omitted = Start From Index 0
    - End
      - Index To End Copying From
      - Not Including End
      - If Omitted = Reach The End
*/

let myArray = [10, 20, 30, 40, 50, "A", "B"];

/* 
  this is original array, we want to make it like this
  let myArray = [10, 20, "A", "B", 50, "A", "B"];
  we make copy, not cut
*/

console.log(myArray);

/* --------------------------------------------------------------------- */
/* myArray.copyWithin(3); // target = 3, start = 0, end = myArr.length
// [10, 20, 30, 10, 20, 30, 40] */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* myArray.copyWithin(2, 5, 7); // target = 3, start = 5, end = 7 or myArr.length
// [10, 20, 'A', 'B', 50, 'A', 'B'] */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* myArray.copyWithin(4, 6); // target = 4, start = 6, end = 7 or myArr.length
// [10, 20, 30, 40, 'B', 'A', 'B'] */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* myArray.copyWithin(4, -1); // target = 4, start = -1 or 6, end = 7 or myArr.length
// [10, 20, 30, 40, 'B', 'A', 'B'] */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
/* myArray.copyWithin(1, -2); // target = 1, start = -2 or 5, end = 7 or myArr.length
// [10, "A", "B", 40, 50, "A", "B"]; */
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */
myArray.copyWithin(1, -2, -1); // target = 1, start = -2 or 5, end = -1 or 6
// [10, "A", 30, 40, 50, "A", "B"]
/* --------------------------------------------------------------------- */
console.log(myArray);
