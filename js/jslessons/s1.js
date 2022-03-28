/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable semi */
/* const doc = doctorize('sowmi')
console.log(doc);
function doctorize (firstname) {
  return `Dr. ${firstname}`
}
 */
// Anon function
/* function (firstName) {
   return `Dr. ${firstName};
} */

// function expression
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
}
const doc = doctorize('sowmi')
console.log(doc);
// ----
// ** arrow Functions **
const inchToCM = inches => {
  console.log(inches);
  return inches * 2.54;
};
const resultcm = inchToCM(10)
console.log(resultcm);

const funcA = () => {
  console.log(`hi`);
};
funcA();
const add = (a, b = 3) => a + b;
const inTocm = (inches) => inches * 2.54;

console.log(add(100));
console.log(inTocm(25));
// arrow function allows us to write shorter syntax
const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 })
const person = makeAPerson('sowmi', 'kookie');
console.log(person);
// self calling fn
(function (age) {
  console.log(`you are cool and your age is ${age}`);
})(10);
// paranthesis run first in javascript,so we have wrapped the function in()
// the function immediately runs
// the argumrnt passed here is 10 for parameter age.
