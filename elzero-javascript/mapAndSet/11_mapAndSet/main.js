/* 
  Map And Set + What You Learn -> Challenge
  Requirements
    - You Cant Use Number Or True Or False
    - Don't User Array Indexes
    - You Cant Use Loop
    - You Cant Use Any Higher Order Function
    - Only One Line Solution Inside Console
    - If You Use Length ->  Only One Time
  HINTS:
    - You Can Use * Operator Only In Calculation
    - Set
    - Spread Operator
    - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n1)); // output: 210

