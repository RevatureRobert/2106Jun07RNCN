
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


//* get and set functions with private variables
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