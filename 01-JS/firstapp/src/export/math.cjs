// commonjs exporting pattern

// Another way other than putting everything in an object to be exported,
//      you can place it as a property on the exports object directly
module.exports.add = function add(a, b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function divide(a,b){
    return a/b;
}

module.exports.other = {
    subtract: subtract,
    // shorthand syntax since the name of the property and the value it is 
    //      referencing have the same name
    divide
}