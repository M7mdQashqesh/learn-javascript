/* 
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  - Map vs Object
  --
    - Map => Does Not Contain Key By Default
    - Object => Has Default Keys
  --
    - Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
    - Object => String Or Symbol
  --
    - Map => Ordered By Insertion
    - Object => Not 100% Till Now
  --
    - Map => Get Items By Size
    - Object => Need To Do Manually
  --
    - Map => Can Be Directly Iterated
    - Object => Not Directly And Need To Use Object.keys() And So On
  --
    - Map => Better Performance When Add Or Remove Data
    - Object => Low Performance When Comparing To Map
  --
*/

/* Object with Default keys & Values */
let myObj = {};

/* Create Object with no default keys/values */
let emObj = Object.create(null);
console.log(emObj);

/* 
  ال map data type بطلب مني iterable لكن فيه key/value
*/
let myMap = new Map();

console.log(myObj);
console.log(myMap);

/* 
  ال Object فيه default keys

  ال Map لا تحتوي على default keys
  ال keys وال values يلي فيه، بتكون انا يلي ضايفها
*/

console.log("#".repeat(10));
/*  */
/* 
  ال Object بيقبل منك ال key على هيئة string او symbol

  لكن ال map ال key ممكن يكون اي حاجه 
*/
/* --------------------------------- */
let myNewObj = {
  10: "Number",
  "10": "String",
  /* second 10, was => "10", prettier back it to 10 */
};
console.log(myNewObj[10]);
/* --------------------------------- */
/* 
  بطبع ال key الثاني، وهو كانه عمل overwrite على الاول وبالتالي بجيب القيمة المعدلة

  نشوف نفس الفكرة بال map
*/
let myNewMap = new Map();
/* 
  set بتطلب مني ال key & value للي بدي اضيفهم
*/
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({a:1, b:2}, "Object");
myNewMap.set(function sayHello() {console.log("hello")}, "Function")

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log(myNewObj);
console.log(myNewMap);

/*  */
/* 
  ال Map بترتبلك البيانات على حسب الادخال الي انت بتعمله

  في ال Object الموضوع مش متزبط مية بالمية
*/

/*  */
/* 
  عندنا في ال Map زي ما استخدمنا في ال Set Data Type
  يوجد size Property
  بتجيب عدد ال items يلي جوا ال Map

  بال Object ما فش حاجه بتجيب عدد العناصر بشكل مباشر، لازم اعملها يدوياً
*/

/*  */
/* 
  ال Map بتقدر تعمل عليها loop directly

  بس ال Object ما بتقدر تعمل عليه loop directly لازم تعملو manually
*/

/*  */
/* 
  ال Map افضل في ال performance لما يجي يتعامل مع البيانات لما اضيف واحذف

  اسرع من ال Object
*/
