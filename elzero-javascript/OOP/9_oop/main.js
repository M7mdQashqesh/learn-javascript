/* 
  Task
    Create 1 class contain private properties
    Create another class inheritance from first one
    access to private
*/

class User {
  #s;
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.#s = salary;
  }
  getSalary() {
    return parseInt(this.#s);
  }
}

class Admin extends User {
  constructor(id, username, salary, permissions) {
    super(id, username, salary);
    this.p = permissions;
  }
}

let userOne = new User(100, "Mohammed", "5000 ILS");
console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.getSalary());

console.log("#".repeat(20));

let adminOne = new Admin(110, "Qas", "7000 ILS", 777);
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.getSalary());
console.log(adminOne.p);
