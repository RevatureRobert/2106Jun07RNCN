// The require function is used for cjs projects. This is a built
//      in node function used for importing
const obj = require('../export/math.cjs')

console.log(obj.add(1,2));
console.log(obj.other.subtract(3,2));
console.log(obj.other.divide(4,2));