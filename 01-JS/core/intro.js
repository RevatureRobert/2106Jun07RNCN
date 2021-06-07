// single line comment
/*
    multi line comment
*/

// print hello world
console.log("Hello World");

// data types
// number, boolean, string, object, null, BigInt, undefined, function, Symbol

/**
 * number: includes int, float, etc.; anything numerical
 * boolean: true/false
 * string: any sequence of characters, detnoted w/ '' or ""
 * object: a key value pair of states/behaviors
 * null: an absence of value
 * undefined: an absence of value provided by the runtime
 * bigInt: a numerical representation of a number larger than js can handle
 * function: any repeatable logic
 * symbol: a unique identifier that would be impossible to duplicate
 */

// control flow
// control flow is the way we can programmatically control the execution
// flow of our programs

// someone is trying to sign up to our site, they must be 13+

// first, hold the age in a variable
// variables have 3 keywords: let const and var
// javascript is loosely typed and dynamic type checking
/**
 * let: variable w/ local scope (can be global based on location)
 * const: creates a constant; cannot be reassigned
 * var: variable w/ global scope (don't use)
 */

const age = 13;

// next, we need to write logic for determining the age
const overAge = (age >= 13); // will equal true/false

/**
 * ternary ?:
 * Condition ? true : false
 */

// if else statement
if(overAge){
    console.log('The person is of age to join the site');
} else{
    console.log('Our tight nit security has caught the intruder. Good thing we check for honesty.')
}

// The remainder
const something = 'cool';
if(something == 'cool'){
    console.log('something is cool');
} else if (something == 'not cool'){
    console.log('something is not cool indeed');
} else{
    console.error('something is wrong with something');
}

switch(something){
    case 'cool':
        console.log("this again");
        break;
    case 'not cool':
        console.log("this again but at least it isn't cool");
        break;
    case 'different':
        console.log('something is different with this one');
        break;
    default:
        console.error('something is again, something I do not understand');
}

// for() loop
for(let i = 0; i < 10; i++){
    console.log(i + ' is not 10');
}

/**
 * Naming Conventions
 *      constants UPPER_CASE (aka SCREAMING_SNAKE_CASE)
 *      functions camelCase
 *      variables camelCase (not constants)
 *      classes PascalCase
 */