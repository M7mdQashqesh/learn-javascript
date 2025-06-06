/* 
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

/* 
  الانتقال بين العناصر في ال DOM

  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling

  هنقدر عن طريقها نجيب العناصر الي جوا الاب ونروح للعنصر التالي 
  والعنصر السابق للعنصر الي احنا اخترناه

  هذول بيسمو الاشقاء
  عناصر جنب بعض داخل الاب على نفس المستوى
*/

let element = document.getElementsByClassName("two")[0];

/* log next something after span (two) */
console.log(element.nextSibling);

/* 
  nextSibling
  previousSibling
  include: elements (tags), texts, comments ...etc

  nextElementSibling
  previousElementSibling
  include only: elements (tags)
*/

/* 
  انا بصل للعنصر عشان ممكن اشيلو
  او اعمل منو نسخه او اي حاجه انا بدي اياها
*/
/* example, remove previous element of "two" */
element.previousElementSibling.remove();

/*  */
/* parentElement */
/* 
  بتوصلنا للعنصر الاب عشان نعمل فيه ال action يلي بدنا اياه

  زي مثال لما يكون في popup 
  وبدي اكبس على زر الاغلاق
  فا بروح بدور على الاب عشان يغلقو كامل
*/

console.log(element.parentElement);

/* 
  example, when click in to the element, hide parent
*/
element.onclick = function () {
  element.parentElement.style.opacity = 0;
  element.parentElement.style.transition = "0.3s";
};
