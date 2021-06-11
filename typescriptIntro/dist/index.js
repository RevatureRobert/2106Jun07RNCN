console.log("What's good America");
/*
data types in typescript:
    string, number, symbol, object, null, undefined, function
    never, void, tuples, any, enum
*/
//any denotes that it can be anything
//can explicitly or implicitly define a variable
let that = "Something";
//can assign multiple acceptable datatypes using |
let value = "cool stuff";
//enums
var Holiday;
(function (Holiday) {
    Holiday[Holiday["NEW_YEAR"] = 0] = "NEW_YEAR";
    Holiday[Holiday["INDEPENDENCE_DAY"] = 1] = "INDEPENDENCE_DAY";
    Holiday[Holiday["CHRISTMAS"] = 2] = "CHRISTMAS";
})(Holiday || (Holiday = {}));
console.log(Holiday.NEW_YEAR);
