console.log("this is typescript");
// any type if not specified, can explicity tell it one or many types
let that = false;
that = "something";
that = 5;
that = true;
console.log(that);
/*
data types in typescript
    string, number, symbol, object, null, undefined, function, boolean,
        never, void, tuples, any, enum
*/
// tell it that it will be an array of 3 values in the order 
//  of number, string, boolean
//tuple
const t1 = [2, 'safhg', true];
that = t1[1];
// enum
var Holiday;
(function (Holiday) {
    Holiday[Holiday["NEW_YEAR"] = 0] = "NEW_YEAR";
    Holiday[Holiday["INDEPENDENCE_DAY"] = 1] = "INDEPENDENCE_DAY";
    Holiday[Holiday["THANKSGIVING"] = 2] = "THANKSGIVING";
})(Holiday || (Holiday = {}));
console.log(Holiday.INDEPENDENCE_DAY);
