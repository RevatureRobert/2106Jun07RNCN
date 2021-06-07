// single line comment
/*
    multi line comment
*/
console.log("Hello World");
// data types
//      number, boolean, string, object, null, BigInt, undefined, function, symbol

/*
    number => anything numerical
    boolean => true or false
    string => any sequence of characters, denoted with '' or ""
    onject => a key value pair of states and behaviors
    null => an absence of value
    undefined => an absence of value provided by the runtime
    bigInt => a numerical representation of a number larger than js can handle
    function => any repeatable logic
    symbol => a unique identifier that would be impossible to duplicate
*/

// control flow
// control flow is the way we cann programmatically control the execution 
//      flow of our program

// someone is trying to sign up to our site, they must be 13 or over 

// first, hold the age in a variable 
//      we can create variables with three keywords
//          let const and var
const age = 15;

//next we need to write logic for determining the age
//      the value of below will be either true or false
const overAge = (age >= 13);

//operators, work on data
/**
 * mathematical, logical
 * unary, bianary, ternary
 * 
 *  binary
 *      +       sum
 *      -       minus
 *      /       division
 *      *       multiplication
 *      %       remainder
 *      =       assignment
 *      ==      comparison
 *      ===     strict comparison
 *      >       grater than
 *      >=      greater than or equal to
 *      <       less than
 *      <=      less than or equal
 * 
 *  unary
 *              x = x+1 or x = x-1
 *      x++     post increment
 *      ++x     pre increment
 *      x--     post decrement
 *      --x     pre decrement
 * 
 *  turnay
 *              x = x < 1 ? x : 1;
 *      ? :     ternary operator
 * 
 *  
 */

// if else statement
if(overAge){
    console.log('The person is of age to join the site');
}else {
    console.log('Our tight nit security has caught the intruder. Good thing we check for honesty');
}

//The remainder 
const something = 'cool';
if(something === 'cool'){
    console.log('something is cool');
}else if(something === 'not cool'){
    console.log('somehting is not cool indeed');
}else {
    console.error('something is wrong with something');
}

switch (something){
    case 'cool':
        console.log('this agian');
        break;
    case 'not cool':
        console.log('this again but at least it isn\'t cool')
    case 'different':
        console.log('something is different with this one');
    default:
        console.error('something is again, something I do not understand');
}

// for loop
for(let i = 0; i < 10; i++){
    console.log(i + ' is not 10')
}