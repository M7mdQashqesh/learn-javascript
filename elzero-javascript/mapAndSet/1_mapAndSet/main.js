/* 
  - Set Data Type
  Syntax: new Set(Iterable)
    - Object To Store Unique Values
    - Cannot Access elements By Index

  Properties
    - size
  
  Methods:
    - add
    - delete
    - clear
    - has
*/

/*  */
/* COMPARE BETWEEN SET AND ARRAY */
let myData = [1, 1, 1, 2, 3];

/* The Constructor used to create set data type */

/* 
  بطلب مني Iterable

  في JavaScript، الكلمة "iterable" تعني "قابل للتكرار"، أي يمكنك المرور عليه باستخدام حلقة مثل for...of أو تحويله إلى مصفوفة باستخدام Array.from().

الأشياء التي تعتبر iterable في JavaScript:
Array

String

Map

Set

arguments object

نتائج بعض الدوال مثل document.querySelectorAll

  ممكن اضيف البيانات بشكل مباشر
  او ممكن اخزنها ب variable واحط ال variable في ال set

  ال set عبارة عن object بخزن البيانات بدون تكرار
*/

/* let myUniqueData = new Set(myData); */
let myUniqueData = new Set([1, 1, 1, 2, 3]);

/* print array and set data types */
console.log(myData);
console.log(myUniqueData);

/* we have "size" property is equivalent to "length" in array */
console.log(myUniqueData.size);

/* To Access data in array and set */
console.log(myData[0]);

/* cant access data in set by index -> undefined */
console.log(myUniqueData[0]);

/* add new item in set data type */
/* 
  بطلب مني قيمة العنصر يلي بدي اضيفها
*/
let myUniqueData1 = new Set().add(1).add(1).add(1).add(2).add(3);

console.log(myUniqueData1);

/*  */
let myUniqueData2 = new Set();

myUniqueData2.add(1).add(1).add(1);
myUniqueData2.add(2).add(3);

console.log(myUniqueData2);

/*  */
/* Delete item from set data type */

/* 
  بطلب مني قيمة العنصر يلي بدي اقيمو
  برجع true اذا وجد العنصر وحذفو
  false اذا ما لقاه
*/
let del = myUniqueData2.delete(1);
console.log(del);
console.log(myUniqueData2);

/*  */
/* clear set data type */
/* 
  بتحذف كلشي من ال set
*/
myUniqueData2.clear();
console.log(myUniqueData2);

/* has, search if items exist in set data type */
/* 
  بطلب مني القيمة يلي بدي ابحث عنها

  برجع boolean
  true -> if exist
  false -> if not exist
*/
let myUniqueData3 = new Set([1, 1, 1, 2, 3, "A"]);
console.log(myUniqueData3.has("A"));

/* 
  لو عملنا هاي الخطوة بعد ال clear
  رح يرجع false
*/
