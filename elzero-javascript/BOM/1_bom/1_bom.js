/* 
  BOM [Browser Object Model]
  - Introduction
    - Window Object Is The Browser Window
    - Window Contain The Document Object
    - All Global Variables And Object And Function Are Member Of Window Object
      - Test Document And Console
  - What Can We Do With Window Object ?
    - Open Window
    - Close Window
    - Move Window
    - Resize Window
    - Print Document
    - Run Code After Period Of Time Once Or More
    - Fully Control The URL
    - Save Data Inside Browser To Use Later
*/

/* 
  ال browser object هو ال window object
*/

/* Window Object Is The Browser Window */
/* 
  ال window object هي ال browser window الي بنتصفح منو الموقع
  اي موقع بتفتحو والصفحه يلي انت فيها 
  هاي هي ال window
  وال window عبارة عن object يحتوي على ال document object وحاجات ثانية كثير
*/

/* All Global Variables And Object And Function Are Member Of Window Object */
/* 
  اي global variable او object او function عندي عبارة عن member من ال window object
*/
console.log("Good");
/* 
  ال console عبارة عن عضو من ال window object
*/
window.console.log("Good");
/* 
  نفس الاشي بطلع
*/

/* is the same with document */
console.log(document.body);
console.log(window.document.body);
