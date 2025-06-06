/* 
  Object
    - Create Object With Assign Method
*/

let obj1 = {
  prob1: 1,
  meth1: function () {
    return this.prob1;
  },
};

let obj2 = {
  prob2: 2,
  meth2: function () {
    return this.prob2;
  },
};

let targetObject = {
  prob1: 100,
  prob3: 3,
};

/*  */
/* Create object using assign method */
/* 
  بتطلب مني ال target 
  بدنا object رح ننسخ الو حاجات
  رح ننسخ الحاجات من ال source 
  ال source ممكن يكون object واحد او اكثر
*/

let finalObject = Object.assign(targetObject, obj1);
console.log(finalObject);

/* 
  لما يلاقي اكثر من prob or method بنفس الاسم سواء بنفس القيمة او مختلفين
  رح يوخذ اول وحدة بلاقيها
*/

/* more then one source */
let finalObject2 = Object.assign(targetObject, obj1, obj2);
console.log(finalObject2);

/* can add new prob and methods and can update values */
console.log(finalObject2.prob2);

finalObject2.prob2 = 200;
console.log(finalObject2.prob2);

finalObject2.prob4 = 4;
console.log(finalObject2);

/*  */
/* if we does not have a target object */
let newObject = Object.assign({}, obj1);
console.log(newObject);

/* add direct prob or method */
let newObject2 = Object.assign({}, obj1, { prob5: 5, prob6: 6 });
console.log(newObject2);
