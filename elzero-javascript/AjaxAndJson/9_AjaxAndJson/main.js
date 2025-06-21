/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized => myRequest.open(method, link, async, username, password)
  [1] Server Connection Established (في اتصال حصل مع السيرفر)
  [2] Request Received (السيرفر استلم ال request)
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready (خلص لكن ممكن يكون حصلت مشكله بس في النهاية خلص وهذا بختلف عن ال status)

  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
// Sets the request method, request URL, and synchronous flag.
myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
// async: by default is "true"

myRequest.send();

console.log(myRequest);

/*
  بدي اعمل check على شغلتين 
  ready State -> 4
  status -> 200

  ليه بنعمل check على هذول الشغلتين ؟
  عشان ما تمشيش في سيناريو ويكون ال request مخلصش 
  او يكون اصلاً فيه مشكلة

  مى بنعمل عليه check ?
  في event معينه حتحصل

  في عنا onreadystatechange
  لما ال ready state تتغير
  تبدأ تعمل check
*/

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);

  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
