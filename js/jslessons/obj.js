/* eslint-disable semi */
/*
** methods:**
A functionwhich lives inside an object.
for eg `console.log('hey')`: here `log` is the method and `console` is the object.
**2 ways to define a method:**
*/
const employee = {
  name: 'sowmi kookie',
  // method
  sayHi: function () {
    console.log(`hi!!! ${this.name}`);
    return `hi ${this.name}`;
  },
  // arrow function
  print: () => {
    console.log('Hello employee');
  },
  // short hand method
  yellHi () {
    console.log(`hi!!! ${this.name.toUpperCase()}`);
  }
};
employee.sayHi();
employee.print();
employee.yellHi();
