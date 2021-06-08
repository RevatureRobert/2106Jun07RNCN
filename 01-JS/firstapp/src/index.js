// // // arrays
const arr = [
  "here is a string",
  55,
  undefined,
  null,
  {},
  console,
  console.log,
  Symbol(),
  Error,
];

// // // use the square brackets to access the index of the array and assign new
// // //      elements to the array
// // console.log(arr[8]);
// // arr[3]=17;
// // console.log(arr[3]);
// // arr[10] = 100
// // console.log(arr[100]);
// // arr[100]=10
// // console.log(arr);

// // const arr2 = []
// // arr2[5] = 0
// // console.log(arr2);

// // const l1 = 1;
// // // l1++
// // const arr3 = [];
// // arr3[4]=7;
// // arr3[2]=10
// // arr3 = [22,34,5];

// // properties and functions

// console.log(arr.length);

// const res = arr.map(nameOfFunction);
// console.log(res);

// function nameOfFunction(element, index, array){
//     if(typeof element === 'number' || typeof element === 'object'){
//         return String(element) + " is a string now!!!"
//     }
//     return element;
// }
// // nameOfFunction();
// // nameOfFunction('here');
// // nameOfFunction(4,4,4,4,4,4,4,4,4,4,4,4,4,4);

// res[15] = [3,6,['hey','no',['oh no',[undefined]]], [].fill('crap',0,3)];
// console.log(res);

// try {
//     throw new TypeError('this is a new error')
// } catch (err) {
//     console.info(err.message);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
function print(something) {
  console.log(something);
}

// arr.forEach(print)

//* for of loop will grab the element
// for(const i of arr){
//     console.log(i);
// }

//* for in loop will grab the index
// for (const i in arr) {
//   console.log(i);
// }

// const arr5 = new Array(55);
// console.log(arr5);

// arr.map(function (el) {
//     return console.log(el);
// })
//* arrow functions
// arr.map( el => {
//     return console.log(el);
// })

// arr.map((el, ind, ar) => console.log(el));


//* objects
//      Objects are key value pairs of states and behaviors
const obj = {
    name: 'harry',
    age: 55,
    sayName: function () {
        console.log("my name is " + this.name);
    }
}
//* The JSON global object property has methods to convert from json to 
//*     obj and vice versa.
// console.log(JSON.stringify(obj));
const obj2 = JSON.parse(`{
    "version":"1.03",
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
    "undefined":null
}`);
// console.log(-obj2.pizza.price);
// obj.sayName()


// const obj3 = new Object();
// console.log(obj3.toString());

// console.log(obj2.toString());

// console.log(JSON.stringify(obj.__proto__))


//! This is how prototype inheritance is working, remember the objects
//!     pointing to each other as references for their skeletons
// const obj7 = Object.create(obj2);
// console.log(JSON.stringify(obj7.__proto__));
// obj7.pizza = {};
// obj7.pizza.toppings = 'something';
// console.log(obj2.pizza.toppings);

// obj7.version = 2;
// console.log(obj7.__proto__.version);

// obj7.__proto__.version=17;
// console.log(obj2.version);



class Animal {
    constructor(name){
        this.name=name;
    }
    _name = 'something else';
}

class Dog extends Animal {
    constructor(name, color){
        super(name);
        this.color=color;
    }
    sayName() {
        console.log(this._name);
    }
}

const dog = new Dog('fluffs mguffs','red');
console.log(dog.name);
dog.sayName()

//* constructor function, what the class syntax is wrapping
function Dog2(name, color) {
    this.name=name;
    this.color=color;
    this.sayName = function (){
        console.log(this.name);
    }
}

const dog2 = new Dog2('name', 'color');
// dog2.sayName()



//* encapsulation prior to es6
// closure
// anonymous function
// const some = function (){
//     //something here
// }

// some()

// IIFE
//  Immediately Invokable Function Expressions
// (function () {
//     console.log('anonymous');
// })()


//* Closure is the ability to nest and return functions that have access to their parents scope
const driveCar = (function (){
    console.log("car purchased");
    let milesDriven = 0;
    return function (miles){
        if(miles >0){
            milesDriven += miles;
        } 
        return milesDriven;
    }
})()


class Sample {
    constructor(name){
        this._name=name;
    }
    name = (function (n){
        let _privName = n;
        return [
            function (){
                return _privName;
            },
            function (val){
                _privName = val;
            }
        ]
    })(this._name);
}

const sample = new Sample('something special')

class GetAndSet {
    constructor(name){
        this.#name = name;
    }
    #name;
    get name() {
        return this._name;
    }

    set name(val){
        this._name=val;
    }
}

const gas = new GetAndSet('something');
gas.name = 'hey'
console.log(gas.name);
console.log(gas.#name);