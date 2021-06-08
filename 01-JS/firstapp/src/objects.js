
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


