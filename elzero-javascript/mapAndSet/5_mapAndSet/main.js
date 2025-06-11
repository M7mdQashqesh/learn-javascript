/* 
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To do Its Task But Not Map
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

/* 
  لما تسمع weak or reference
  بكون بتكلم عن حاجه بتسمح لل garbage collector انو يؤدي ال task تاعو ويشيل الحاجه يلي ملهاش reference من ال memory

  الفرق الكبير الجهوري بين ال Map & WeakMap 
  انو احنا في ال key تاع ال Map كنا بنضيف اي نوع من انواع البيانات

  في ال WeakMap ال key بسمحلك تضيف بس Object
*/

let mapUser = { theName: "Mohammed" };
let myMap = new Map();
myMap.set(mapUser, "Object Value");

console.log(myMap);

mapUser = null; // override the reference

/* 
  ال Object متخزن داخل ال Map
  وانا لغيت ال reference تاعو، بس مش راح ينحذف لانو مستخدمين ال Map العادية 
  مفش فيها garbage collector
*/
console.log(myMap);

console.log("#".repeat(20));
/* 
  نشوف الحل عن طريق ال WeakMap
*/

let weakMapUser = { theName: "Mohammed" };

let myWeakMap = new Map();

myWeakMap.set(weakMapUser, "Object Value");

console.log(myWeakMap);

weakMapUser = null;

console.log(myWeakMap);

/* 
  القيمة ما انشالت على طول لانو ال garbage collection بشتغل automatic
*/
