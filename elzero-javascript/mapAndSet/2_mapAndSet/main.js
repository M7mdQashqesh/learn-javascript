/* 
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    
    If no other references to an object stored in the WeakSet Exist, those object can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

/* 
  ال Set بقدر اخزن اي نوع بيانات
  
  في ال WeakSet انا بقدر احط بس objects
*/

/*  */
/* Garbage */
/* 
  انت في البرنامج تاعك ضفت كل ال data types كلها يلي انت شغال عليها في البرنامج

  ال data هاي بدها تروح على ال memory
  بتتخزن في ال memory وفي الها مساحه

  الي بعمل manage لل memory بلغه ال JavaScript هي automatic manage memory

  ال memory management شو بعمل ؟؟
  
  بشوف لو في بيانات  مفش references الها، مفش access عليها بروح شايلها
  
  العمليه هاي تسمى garbage collection

  ال WeakSet -> ال object يلي فيها ملوش reference بيحصل عليه عملية ال garbage collection
  بينعمللو clean
*/

/*  */
/* Type Of Data */
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);
console.log(mySet);

/*  */
/* size property */
console.log(`Size Of Elements In Set Is ${mySet.size}`);

console.log("#".repeat(20));
/*  */
/* Keys, Values, Entries */

/* 
  ال Set فيها بتقدر توصل لل Keys, Values, Entries

  ال Keys هو Alias لل Values

  شو هي ال Values ?
  ال values بترجعلك iterator 
  ال iterator هذا بيطبق ال mechanism تاع ال iteration
  ال هو ال loop، الحركة يلي بتحصل في ال loop
  بيقدر يوصلك للعنصر يلي بعدو وتوصل للي انت بدك اياه وتقدر تعمل customization لل loop

  يعني ال loop العادي يلي انت بتعملو على اي iterable
  انت ممكن عن طريق ال iterator هذا تتحكم في مراحل ال loop
*/

let iterator = mySet.keys();
/* or let iterator = mySet.values();*/
console.log(iterator);
/* console.log(iterator.next()); */
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

/* 
  هو بطبع العمليه الجايه وليس العمليه الحالية من ال iteration
  done: false
  معناها مرحله ال iteration ما خلصتش

  عشان تصير true ، لازم تصل لنهاية ال iteration 
*/

console.log("#".repeat(20));
/*  */
/* forEach */
mySet.forEach((el) => console.log(el));

/* 
  الان خلصنا كل التجارب على ال Set

  هلحين بدنا نبلش بنفس التجارب على ال WeakSet
*/

console.log("#".repeat(20));
/*  */
/* Type Of Data */

/* Invalid value used in weak set */
/* -------------------------------------------- */
/* let myWeakSet = new WeakSet([1, 1, 1, 2, 3, "A", "A"]); */
/* -------------------------------------------- */

let myWeakSet = new WeakSet([{ A: 1, B: 2 }]);
console.log(myWeakSet);

/* 
  فكرة عمل ال WeakSet انه ال objects الي انت بتعمللهم store بتشيلهم لما يكون مش accessible
*/
