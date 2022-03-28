/* eslint-disable no-var */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
var myobject = {
// An ordinary data property
  $x: 0,
  // An accessor property defined as a pair of functions
  get data () {
    console.log('getCalled');
    return this.x;
  },
  set data (value) {
    if (value <= 0) {
      /* console.log('value should be greater than zero');
      return; */
      throw new Error('value should be greater than Zero');
    }
    this.x = value;
    console.log('setCalled');
  }
};
myobject.data = 100;
console.log(myobject.data);
myobject.x = 5000;
console.log(myobject.data);
// -----
var o = {}; // Start with no properties at all
// Add a non enumerable data property x with value 1.
console.log(o.x);
// In addition to a name and value,
// properties have attributes that specify whether they can be
// written, enumerated, and configured.

// For authors of API libraries
// • It allows them to add methods to prototype objects and
//    make them nonenumerable, like built -in methods.
// •  It allows them to “lock down” their objects, defining properties that cannot be
//    changed or deleted.

// To set the attributes of a property,
// or to create a new property with the specified attributes,

Object.defineProperty(o, 'x', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: false
});
console.log(o.x);
o.x = 33333;
console.log(o.x);
o.y = 300;
console.log(o.y);
delete o.y;
console.log(o.y);
delete o.x;
console.log(o.x);
// -----
var p = Object.defineProperties({}, {
  x: { value: 1, writable: true, enumerable: true, configurable: true },
  y: { value: 1, writable: true, enumerable: true, configurable: true },
  r: {
    get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
    enumerable: true,
    configurable: true
  }
});
// -----------
// createCopy() function in "enumeration.js" copied properties from one object to
// another.
// That function simply copied the name and value of the properties and ignored
// their attributes.
// Furthermore, it did not copy the getter and setter methods of accessor properties,
// but simply converted them into static data propertie
