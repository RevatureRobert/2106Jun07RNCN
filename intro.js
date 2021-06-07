// single line comment
/*
    multi line comment
*/

// print hello world
// console.log("Hello World");


// data types
//      number, boolean, string, object (key-value pair), null ('object'), BigInt, undefined, function, symbol
/*
    number => anything numerical
    boolean => true or false
    string => any sequence of characters, denoted with '' or ""
    object => a key value pair of states and behaviors
    null => an absence of value
    undefined => an absence of value provided by the runtime
    bigInt => a numerical representation of a number larger than js can handle
    function => any repeatable logic
    symbol => a unique identifier that would be impossible to duplicate
*/
// control flow
// control flow is the way we can programmatically control the execution
//      flow of our programs

// Example: someone is trying to sign up to our site; they must be 13 or older

/** first, hold the age in a variable
 *        we can create variables with three keywords
 *             - JavaScript is loosely typed and uses dynamic type checking
 *        let =>
 *        const =>
 *        var => 
 *              - **never use var**
*/
let age = 13;

/**
 * scoping
 *      age is global scoped
 *      a and b is function scoped
 *      c is block scoped
 *          unless you use var, then it is function scoped.
 *          --ALWAYS USE VAR--
 */
function add(a, b) {
    if (a < 0) {
        let c = Math.abs(a);
    }
    return c+b;
}
console.log(add(1,2));

// next, we need to write logic for determining the age
//      The value of below will be either true or false (boolean)
const overAge = (age >= 13);

// operators, work on data
/**
 * mathematical, logical
 * unary, binary, ternary
 * 
 *      binary
 *          +       sum
 *          -       minus
 *          /       divide
 *          *       multiply
 *          %       modulus
 *          =       assignment
 *          ==      comparison
 *          ===     strict comparison
 *          >       GT
 *          >=      GTE
 *          <       LT
 *          <=      LTE
 *
 *       unary
 *                  x = x+1 or x = x-1
 *          x++     post increment
 *          ++x     pre increment
 *          x--     post decrement
 *          --x     pre decrement
 * 
 *       ternary
 *                  x = x < 1 ? x : 1;
 *           ? :    ternary operator
 * 
 */

// if else statement
if (overAge) {
    console.log('The person is of aget o join the site');
} else {
    console.log('Our tight nit security has caught the intruder. Good thing we check for honesty (sometimes).');
}

// The remainder
const something = 'cool';
if (something === 'cool') {
    console.log('something is cool');
} else if (something === 'not cool') {
    console.log('something is not cool indeed');
} else {
    console.error('something is wrong with me');
}

switch (something) {
    case 'cool':
        console.log("this again");
        break;
    case 'not cool':
        console.log('this again but at least it isn\'t cool');
    case 'different':
        console.log('something is different with this fella');
    default:
        console.error('something is again some thing I do not understand');
}

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i + ' is not 10')
}

const max = 100;
let iteration = 0;
while (iteration < max) {
    if (max % iteration == 0) {
        console.log('the first divisible number is: ' + iteration);
        break;
    }
    iteration++;
}

const max = 105;
let iteration = 3;
while (false) {
    if (max % iteration == 0) {
        console.log('the first divisible number is ' + iteration);
    }
    iteration++;
    console.log(iteration);
}
do {
    console.log('running')
} while (false);


// ternary
function add(a, b, times) {
/*     let sum = 0;
    if (times === 0) {
        sum = a+b;
    } else {
        sum = (a+b)*times;
    }
    sum = (times === 0) ? a+b : (a+b)*times;
    return sum; */
    return (times === 0) ? a+b : (a+b)*times;
}


/**
 * naming conventions
 *         constants UPPERCASE_WITH_SCREAMING_SNAKEE
 *         functions camelCase
 *         variables camelCase
 *         classes   PascalCase
 */