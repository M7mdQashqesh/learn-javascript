/* 
  - Map Data Type
  Methods:
    - set()
    - get()
    - delete()
    - clear()
    - has()

  Properties:
    - size
*/

/*
  [] >- قوسين تاعين ال iterable
  
  كونو ال Map تحتوي على مجموعه بيانات ممكن نعتبرها لفظياً بس كأنها array

  بضيف البيانات ك key & value
  وكل key & value لازم يكونو موجودين داخل الاقواس تاعت ال array
*/
let myMap = new Map([
  ["10", "String"],
  ["Age", "Number"],
  [false, "Boolean"],
]);

/* Add data to map */
/* request .set(key, value) */
myMap.set(10, "Number");
myMap.set("Name", "String");

console.log(myMap);

/* access to data in map */
/* request .get(key) */
console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

/*  */
/* size of map */
console.log(myMap.size);

console.log("#".repeat(10));
/*  */
/* Delete item from map */
/* request .delete(key) */
/* return boolean value, true -> exist, false -> does not exist */
let bol = myMap.delete(10);
console.log(bol);
console.log(myMap);
console.log(myMap.size);

console.log("#".repeat(10));
/*  */
/* has -> check value exist in Map or no */
/* request .has(key) */
/* return boolean */
console.log(myMap.has(false))


console.log("#".repeat(10));
/*  */
/* clear -> remove all items from Map */
myMap.clear();

console.log(myMap);
console.log(myMap.size);
