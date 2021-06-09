/**
 * CommonJS exporting pattern
 */

function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function divide(a,b){
    return a/b;
}

module.exports = {
    add, 
    subtract,
    divide

    //* If the names of the property and the values are not the same,
    //* use the following syntax:
    //  name: value,
}

/**
 * Another way other than putting everything in an object to be exported,
 * you can place it as a property on the exports object directly.
 */
// module.exports.add = function add(a,b){
//     return a + b
// };