/* 
  Date And Time
  
  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Value)

  Format:
    - "Oct 25 1982"
    - "10/25/1982"
    - "1982-10-25" => ISO International Standard
    - "1982 10"
    - "1982"
    - "82"
    - 1982, 9, 25, 2, 10, 0  => month by index
    - 1982, 9, 25
    - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String -> convert date to ms
*/

let date1 = new Date(0); // 0 ms
console.log(date1);
console.log("#".repeat(66));

console.log(Date.parse("Dec 18,2003"));
let date2 = new Date(1071698400000); // 1071698400000 => from (Date.parse("Dec 18,2003"))
console.log(date2);
console.log("#".repeat(66));

let date3 = new Date("Dec 18, 2003"); // mm dd, yyyy   Or   mm dd, yy
console.log(date3);
console.log("#".repeat(66));

let date4 = new Date("12/18/2003"); // mm/dd/yyyy   Or   mm/dd/yy
console.log(date4);
console.log("#".repeat(66));

let date5 = new Date("12-18-2003"); // mm-dd-yyyy   Or   mm-dd-yy
console.log(date5);
console.log("#".repeat(66));

let date6 = new Date("12 18 2003"); // mm dd yyyy   Or   mm dd yy
console.log(date6);
console.log("#".repeat(66));

let date7 = new Date("2003-12-18"); // yyyy-mm-dd   Or   yy-mm-dd
console.log(date7);
console.log("#".repeat(66));

let date8 = new Date("2003-12"); // yyyy-mm   Or   yy-mm
console.log(date8);
console.log("#".repeat(66));

let date9 = new Date("2003"); // yyyy   Or   yy
console.log(date9);
console.log("#".repeat(66));

let date10 = new Date(2003, 11, 18, 10, 5, 13); // 11 -> December  yyyy, mm, dd, hh, mm, ss, ms
console.log(date10);
console.log("#".repeat(66));

let date11 = new Date(2003, 11, 18); // 11 -> December  yyyy, mm, dd
console.log(date11);
console.log("#".repeat(66));

let date12 = new Date("2003-12-18T06:35:24Z"); // z -> timezone, 06+2timezone = 08
console.log(date12);
console.log("#".repeat(66));

let date13 = new Date("2003-12-18T06:35:24"); // without Z
console.log(date13);
