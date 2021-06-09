// arrays
const arr = ['here', 55, null, undefined, {}, console, console.log, Symbol(), Error,];

// use the square brackets to access the index the array and assign new elements to the array
// console.log(arr[0]);

// arr[3]= 17;
// console.log(arr[3]);
// arr[10]=100;
// console.log(arr[10]);

// const arr2 = [];
// arr2[5] = 0;
// console.log(arr2);

// properties and functions

console.log(arr.length);

const res = arr.map(nameOfFunction)
console.log(res);

const newFunc = nameOfFunction;

function nameOfFunction(element, index, array){
    return String(element) + " is a string now!!";
}

// nameOfFunction();
// nameOfFunction('here');
// nameOfFunction(4,4,4,4,44,4,4,4,4,4,44,4,4,4,);


// try {
//     throw new TypeError('this is a new error');
// } catch (err) {
//     console.info(err.message);
// }


//!for iterating across an array
// for(let i = 0; i <arr.length; i++){
//     console.log(arr[i]);
// }

// function print(something){
//     console.log(something);
// }

// arr.forEach(print);

//! for of loop will grab the element
for(const i of arr){
    console.log(i);
}
//! for in loop will grab the index
for(const i in arr){
    console.log(i);
}


// const con = 'console.log(\'';
// const end = '\');';
// function badStuff(param){
//     eval(con + param + end);
// }

// badStuff('this is bad');

// const arr5 = new Array(55);
// console.log(arr5);

arr.map(function (element) {
    return console.log(element);
})

//arrow functions
console.log('Here');
arr.map((element) => {
    return console.log(element);
})

arr.map((element, index, array) => console.log(element));

/**
 * Objects
 *      Objects are key value pairs of states and behaviors
*/
const obj = {
    name: 'harry',
    age: 55,
    sayName: function() {
        console.log("My name is " + this.name);
    }
}
obj.sayName()
// 
const obj2 = JSON.parse({
    "version": "1.0.3",
    "pizza":{
        "toppings":[
            "pepperoni",
            "cheese"
        ],
        "extraCheese":true,
        "stuffedCrust":true,
        "price":10.99
    },
    "null":null,
    "undefined":undefined
});

console.log(obj2.toString());

console.log(JSON.stringify(obj.__proto__));

const obj7 = Object.create(obj);
console.log(JSON.stringify(obj7.__proto__));




class Animal {
    constructor(name){
        this.name = name;
    }
}

class Dog extends Animal{
    constructor(name, color){
        super(name);
        this.color = color;
    }
}

const dog = new Dog('Bella', 'Blue');
console.log(JSON.stringify(dog));

// constructor function, what the class syntax is wrapping
function Dog2(name, color){
    this.name = name;
    this.color = color;
    this.sayName = function (){
        console.log(this.name);
    }
}

const dog2 = new Dog2('name', 'color');
dog2.sayName()

//* encapsulation prior to es6
// closure
//anonymous function
const some = function (){
    //something here
}


//IIFE
//  Immediately Invokable Function Expressions
(function () {
    console.log('anonymous');
})()

//* Closure is the ability to nest and return functions that have access to their parents scope
const driveCar = (function(){
    console.log('car purchased');
    let milesDriven = 0;
    return function (miles){
        if(miles >0){
            milesDriven += miles;
        }
        return milesDriven;
    }
})();

class Sample {
    constructor(name){
        this._name = name;
    }
    name= (function (n){
        let _privName = n;
        return[
            function (){
                return _privName;
            },
            function (val){
                _privName = val;
            }
        ]
    })(this._name);
}

const sample = new Sample('something special');

class GetAndSet {
    constructor(name){
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(val){
        this._name = val;
    }
}

const gas = new GetAndSet('something');
gas.name;