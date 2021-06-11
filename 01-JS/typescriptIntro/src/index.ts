console.log("this is typescript");

// any type if not specified, can explicity tell it one or many types
let that: string | number | boolean = false;
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
const t1:[number, string, boolean] = [2, 'safhg',true];
that = t1[1];


// enum
enum Holiday {
    NEW_YEAR,
    INDEPENDENCE_DAY,
    THANKSGIVING
}

console.log(Holiday.INDEPENDENCE_DAY);