/**
 * Objects
 * key-value pairs of states and behaviors
 */

 const obj = {
    name: 'harry', 
    age: 55,
    sayName: function(){
        console.log("my name is " + this.name);
    }
}
// obj.sayName();

/**
 * The JSON global object property has methods to convert from json to
 * obj and vice versa.
 */

// console.log(JSON.stringify(obj));

//* Use ` ` (not '') to do a multi-line string
const obj2 = JSON.parse(`{
    "version":"1.0.3",
    "pizza":{
        "toppings": [
            "pepperoni",
            "cheese"
        ],
        "extraCheese":true,
        "stuffedCrust":true,
        "price":10.99
    },
    "null": null,
    "undefined": null
}`);
// console.log(obj2);
// console.log(obj2.pizza.toppings);
// console.log(obj2.version);

//! Will only print [object Object] in both cases due to inheritance of an empty object
// console.log(obj2.toString());
// const obj3 = new Object();
// console.log(obj3.toString());

/**
 * Every object has a prototype, which can be defined. 
 * By default, there is a "blank" object template.
 * DO NOT INTERACT WITH PROTOTYPES DIRECTLY IN PRACTICE!
 * THIS EXAMPLE IS MERELY TO ILLUSTRATE WHAT'S HAPPENING IN THE BACKGROUND.
 */

const obj7 = Object.create(obj2);
// console.log(JSON.stringify(obj7.__proto__));

//! edits prototype (obj2) because toppings is nested
// obj7.pizza.toppings = 'something';
// console.log(obj7.pizza.toppings);
// console.log(obj7.__proto__.pizza.toppings);
//* To avoid this: do the following instead
// obj7.pizza = {};
// obj7.pizza.toppings = 'something';
// console.log(obj7.pizza.toppings);
// console.log(obj2.pizza.toppings);

//* only edits current object because it's being directly assigned
// obj7.version = 2;
// console.log(obj7.version);
// console.log(obj7.__proto__.version);
// console.log(obj2.version);

/**
 * Encapsulation
 */

//* Anonymous function
// const some = function(){
//     //something here
// }
// some();

//* IIFE: Immediately Invokeable Function Expressions
// (function(){
//     console.log('anonymous');
// })();

//* Closure is the ability to nest and return functions that have access to their parents scope
// const driveCar = (function (){
//     console.log("car purchased");
//     let milesDriven = 0;
//     return function(miles){
//         if(miles > 0){
//             milesDriven += miles;
//         }
//         return milesDriven;
//     }
// })();