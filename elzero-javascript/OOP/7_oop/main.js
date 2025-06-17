/* 
  Class
    Inheritance
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");

console.log(userOne.u);
console.log(userOne.sayHello());

/* 
  ال Inheritance حاجه من الحاجات المهمه جداً وعمود من اعمدة ال OOP

  ليه ممكن استخدمو؟

  عندي فوق class لل User
  وانا بدي انشئ class لل admin وفيه نفس الخواص يلي موجوده بال user بس الاختلاف انو ال admin في حاجه زياده
*/

/* Without Inheritance */
class Admin {
  constructor(id, username, permissions) {
    this.i = id;
    this.u = username;
    this.p = permissions;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

/* 
  فرضاً عندنا user, admin, moderator.... etc
  وبدي اعدل باحد البيانات، بدي امشي عليهم كلهم واحد واحد واعدللهم لانو كل واحد منفصل 

  الحل نستخدم ال Inheritance 
*/
console.log("#".repeat(20));
/* With Inheritance */
class ParentUser {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}
/* use "extends" and "super(args)" to inheritance */
class DerivedAdmin extends ParentUser {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

let admin = new DerivedAdmin(101, "Moh", 777);

console.log(admin);
console.log(admin.i);
console.log(admin.u);
console.log(admin.p);
console.log(admin.sayHello());

console.log("#".repeat(20));
class SuperAdmin extends DerivedAdmin {
  constructor(id, username, permissions, role) {
    super(id, username, permissions);
    this.r = role;
  }
}

let superOne = new SuperAdmin(110, "GG", 666, "Super Admin");

console.log(superOne);
console.log(superOne.i);
console.log(superOne.u);
console.log(superOne.p);
console.log(superOne.sayHello());
