/*
  JSON
    - JSON.parse() => Convert Text Data (JSON Object) To JavaScript Object
    - JSON.stringify() => Convert JavaScript Object To JSON Object (Text Data)
*/

/*
  ال JSON عبارة عن Text Format
  مسؤول عن مشاركة البيانات بين ال server and client

  text format
  يعني لما نيجي نتعامل مغاه المفروض يكون هو string
*/

let myJsonObjFromServer = '{"name":"Mohammed", "age": 21}';
console.log(typeof myJsonObjFromServer);
console.log(myJsonObjFromServer);

/* 
  now need to convert this json object, to JavaScript Object
  عشان نعرف نتعامل معاه في الصفحة
  نعرض البيانات
  نعدل البيانات واي حاجه ثانية
*/

const myJsObject = JSON.parse(myJsonObjFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["name"] = "Elzero";
myJsObject["age"] = 39;
console.log(myJsObject);

/*
  now we need to send this data to server
  يعني محتاجين نحول ال JavaScript Object ل JSON Object
*/

let myJsonObjToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjToServer);
console.log(myJsonObjToServer);
