/**
 * The require() function is used for cjs projects. This is a built-in
 * node function used for importing. Typically used for legacy code.
 */

const obj = require('../export/math.cjs');

console.log(obj.add(1,2));
console.log(obj.subtract(1,2));
console.log(obj.divide(1,2));