// Arrays
const names = ['john', 'sam', 'sowmi'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length-1]);

/* names is an array of strings
Length is a property of Array
it returns a Number
the lower bound of an array is 0(zero)
the upper bound of an array is length - 1;
the index for John is 0
the index for Sam  is 1
the index for Sowmi is 2
*/
// --------------
names.push('kookie');
console.log('After push:' + names);
// Push will add the item at the end

// ... is called as the spread operator
// it represents the entire items in the array
const names2 = [...names,'Raj'];
console.log('names2: ' + names2);
// -----------
names.unshift('poppy');
console.log('unshift:' + names);
// unshift adds data to the begining
// so the index no of the res of the values will change now

const names3 =['raj',...names];
console.log(names3);
// This will add data at the begining
// next method slice()
// create a new array
const bikes = ['bianchi', 'miele', 'panasonic', 'miata'];
const b1 = [...bikes.slice(0,2)];
console.log(b1);
// slice takes 2 parameters
// from , to
// it has copied the values from index 0 and assigned to b1
const b2 = [...bikes.slice(3)];
console.log(b2);// from 3rd index

const newBikes = [
    ...bikes.slice(0, 2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes:' + newBikes);
// new array called bikes is created
const newBikes2 = [
    ...newBikes.slice(0, 2),
    ...newBikes.slice(4)
];
console.log('newBikes2:' + newBikes2);
/* new array called newBikes2 is created.
 then from index 0 two values are copied
 then the value from index 4 to last index is copied */
const indexOfSam = names.findIndex(name => name === 'sam')
console.log('indexOfSam:'+ indexOfSam);
/* const indexOfsowmi = names.findIndex(name => name === 'sowmi')
console.log('indexOfsowmi:'+ indexOfsowmi);
const indexOfkookie = names.findIndex(name => name === 'kookie')
console.log('indexOfKookie:'+ indexOfkookie); */
//function to delete a name
function deleteName(name, names) {
    const indexOfname = names.findIndex(name => name === 'sowmi')
    console.log('indexOf name to delete:' + indexOfname); 
    const newNames=[
        ...names.slice(0, indexOfname),
        ...names.slice([indexOfname+1])
    ];
    return newNames;
}
const deletedNames=deleteName('sowmi',names);
console.log('After Delete:' + deletedNames);
console.log('Before delete' + names);
//------------
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(numbers);
//numbers.splice(3,2);// from the 3rd index
//console.log(numbers);
// const pizzaSlice = numbers.slice(2, 4);// Start and end index
//console.log('pizzaSlices:' + pizzaSlice);
//console.log('original Numbers:' + numbers);
// (method) Array<number>.slice(start? : number,end? : number)
// Immutable method - does not change the source array
// slice-same function has different behaviour
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
