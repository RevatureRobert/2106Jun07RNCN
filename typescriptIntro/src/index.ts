console.log("What's good America");

/*
data types in typescript:
    string, number, symbol, object, null, undefined, function
    never, void, tuples, any, enum
*/

//any denotes that it can be anything

//can explicitly or implicitly define a variable
let that: string = "Something";

//can assign multiple acceptable datatypes using |
let value: string|number|void = "cool stuff";

//enums
enum Holiday{
    NEW_YEAR,
    INDEPENDENCE_DAY,
    CHRISTMAS
}
console.log(Holiday.NEW_YEAR);