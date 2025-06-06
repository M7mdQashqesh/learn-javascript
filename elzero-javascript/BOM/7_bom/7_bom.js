/* 
  BOM [Browser Object Model]
  - History API
    - Properties
      - length
    - Methods
      - back()
      - forward()
      - go(Delta) => Position In History

  Search [For Advanced Knowledge]
    - pushState() + replaceState()
*/

/* 
  ال history object بتعطيك شوية خواص بتتعامل مع العناصر الموجوده في ال history
*/
console.log(window.history);

/* length */
/* 
بتعطيك عدد الصفحات يلي زرتها بما فيه الصفحه الي انت فيها حالياً
*/
console.log(window.history.length);

/*  */
/* back() */
/* 
  بترجعك في الصفحات خطوة للخلف
*/
/* --------------------------------- */
/* window.history.back(); */
/* --------------------------------- */

/*  */
/* forward() */
/* 
  بتقدمك خطوة في الصفحات لقدام
*/
/* --------------------------------- */
/* window.history.forward() */
/* --------------------------------- */

/*  */
/* go() */
/* 
  بطلب منك ال position تاع العنصر يلي بدي اروح عليه في ال history 

  0 -> current Page
  1 -> خطوة لقدام
  -1 -> خطوة للخلف
  -2 -> خطوتين للخلف 
  وهكذا
*/
