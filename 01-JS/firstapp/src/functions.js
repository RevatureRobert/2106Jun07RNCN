// function nameOfFunction(first, second, third, ...params) 
// the ... means make an array out of the rest; must come last

/* Example of JavaScript ignoring extra parameters.
function nameOfFunction(params){
    console.log(typeof params);
}

nameOfFunction();
nameOfFunction('here');
nameOfFunction(4,4,4,4,4,4,4,4,4,4,4);
*/

 /* Below are 3 ways of printing each element
arr.forEach(print);
function print(something){console.log(something);}
// Can't just use console.log b/c it will print everything repeatedly.

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
*/

//* for-of loop - grabs element
for (const i of arr){
    console.log(i);
}

//* for-in loop - grabs index
for(const i in arr){
    console.log(i);
}

// Functions can be passed as Parameters
// The next 3 are equivalent; bottom 2 will be most common
arr.map(function (el) {
    return console.log(el);
});

arr.map((el) => {
    return console.log(el);
});

arr.map((el) => console.log(el));