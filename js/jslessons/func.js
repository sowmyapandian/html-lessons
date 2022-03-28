/* eslint-disable prefer-const */
/* eslint-disable semi */
// ---------------
/* const maxvalue = Math.max(10, 12)
console.log(maxvalue);
const minvalue = Math.min(10, 12)
console.log(minvalue); */
const maxvalue = Math.max(10, 12, 35, 5, 1)
console.log(maxvalue);
const floatvalue = parseFloat('2.0325568')
console.log(floatvalue);
const intvalue = parseInt('2325568abcd')
console.log(intvalue);
const intsvalue = parseInt('abcd2325568')
console.log(intsvalue);
let today = Date.now()
console.log(today);
// The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
/* function calculateBill () {
  const total = 100 * 1.13;
  return total;
}
const v1 = calculateBill()
console.log(v1);
function calculateBills (billamount, taxrate) {
  console.log(billamount + '-' + taxrate);
  const tot = billamount + billamount * taxrate;
  return tot;
}
let billtotal = calculateBills(20 + 10 + 50, 0.75);
console.log(billtotal); */
// ---------default value for the parameter
function yell (name = 'Silly Goose') {
  return `HEY ${name.toUpperCase()}`
}
let greetings = yell('sowmi')
console.log(greetings);
greetings = yell()
console.log(greetings);
// ----------
function calculateBill (billAmount, taxrate = 0.13, tiprate = 0.15) {
  console.log('Running Calculate Bill!!');
  console.log('billAmount: ' + billAmount + 'taxrate:' + taxrate + 'tiprate' + tiprate);
  const total = billAmount + billAmount * taxrate + billAmount * tiprate;
  return total;
}
calculateBill(100)
calculateBill(100, 0.66)
