/* 
  DOM [GET \ SET Element Content and Attributes]
  - innerHTML
  - textContent

  - Change Attributes Directly
  - Change Attributes With Methods
    -- getAttribute
    -- setAttribute
*/

/* 
  بدنا نتعلم كيف نجيب محتوى العناصر 
  وكيف نغير محتوى العناصر وال attributes 
  بطريقه مباشرة
  وعن طريق ال methods الجاهزة
*/

let myElement = document.querySelector(".js");

/* 
  هذا بطبع العنصر زي ما هو مكتوب بال HTML
  يتضمن ال tag, attributes, class ...etc
*/
console.log(myElement);
/* 
  يكتب المحتوى داخل ال tag
  لكن اذا كان في tag داخلها
  بكتبها كما هي، يعني بكتب ال tag الداخليه بكافه محتوياتها
*/
console.log(myElement.innerHTML);

/* 
  بكتب ال text فقط
*/
console.log(myElement.textContent);

/* 
  يلي فوق كان عبارة عن SET
*/

/*  */
/* GET */
myElement.innerHTML = "Hello from <span>Main.js</span> file";
/* 
  التغيير صار في الصفحه وفي developer tool في ال elements
  تم اضافة ال tag الداخليه كما هي لانو استخدمنا innerHTML in the element developer tool
  لكن عالجها بالصفحة
*/

myElement.textContent = "Hello from <span>Main.js</span> file";
/* 
  هان بحط النص كما هو ك text 
  ما بحطو كصيغه ال HTML زي فوق
  <span></span> بظهرو بالصفحه ك text 
  وبال developer tool بكونو مكتوبين كنص وليس html tag
*/

/*  */
/* Change Attributes Directly */

/* images */
document.images[0].src = "https:\\google.com";
document.images[0].alt = "alternative";
/* create new attribute */
document.images[0].title = "this image";
document.images[0].id = "pic";
document.images[0].className = "picture";

/* 
  is the same for links
  href, className, id ...etc
*/

/*  */
/* 
  - Change Attributes With Methods
    -- getAttribute
    -- setAttribute
*/
console.log(document.links[0].getAttribute("href"));
document.links[0].setAttribute("href", "https:\\google.com");
console.log(document.links[0].getAttribute("href"));

/* add new attribute */
document.links[0].setAttribute("id", "my-link");
console.log(document.links[0]);
