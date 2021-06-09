// arrays - can contain ANYTHING, even mixed types
const arr = [
    'here is a string',
    55,
    undefined,
    null,
    {}, 
    console,
    console.log,
    Symbol,
    Error
];

// use the square brackets to access the index of the array
// and assign new elements to the array
console.log(arr[8]);
arr[3] = 17;
console.log(arr[3]);
arr[10] = 100; // arrays can grow in javascript
console.log(arr[100]); // will just throw an "undefined," does not grow the array
console.log(arr.length);

const arr2 = [];
arr2[5] = 0;
console.log(arr2);

// .map creates new array for manipulation w/o altering the original
const res = arr.map(nameOfFunction);
console.log(arr)
console.log(res);

function nameOfFunction(element){
    return String(element) + " is a string now!!!";
}