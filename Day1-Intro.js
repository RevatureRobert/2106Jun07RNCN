// print hello world
console.log("Hello World");

//operator returning the data type
console.log(typeof sym);

/* data types
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

/*control flow
    control flow is the way we can programmatically control the execution flow of our programs 
*/

// someone trying to sign up to the site must be 13 or over
/* 
 first, hold the age in a variable
      we can create variables with three keywords
                javascript is loosely typed and uses dynamic type checking
          let => variable, allows all three scopes
          const => constant variable, cannot reassign, allows all three scopes
          var => variable, only allows global and function scope
*/
let age = 13;

function add(a, b){
    if(a < 0){
        var c = Math.abs(a);
    }
    // for(let i =0; i<10;i++){}
    // console.log(i);
    var c = 0;
    return c+b;
}
console.log(add(-1,2));

/* scoping
    age is globally scoped
    a and b is function scoped
    c is block scoped
    unless you use var, then it is function scoped (NEVER USE VAR)
*/

/*
write logic for determining the age
The value of below will be either true or false
*/
const overAge = age >= 13;

// Operator - work on data
/*
 mathematical, logical
 unary, binary, ternary
 
 binary
          +       sum
          -       minus
          /       divide
          *       multiply
          %       modulus
          =       assignment
          ==      comparison
          ===     strict comparison
          >       GT
          >=      GTE
          <       LT
          <=      LTE

 unary (x = x+1 or x = x-1)
         x++     post increment
         ++x     pre increment
         x--     post decrement
         --x     pre decrement
 
 ternary (x = x < 1 ? x : 1;)
        ? :     ternary operator

 */

// if-else statement
if(overAge){
    console.log('The person is of age to join the site.');
} else {
    console.log('This person is not able to join the site!');
}

// The remainder
const something = "cool";

if(something === 'cool'){
    console.log('Something is cool');
} else if (something === 'not cool'){
    console.log('Something is not cool.');
} else {
    console.error('Something is wrong');
}

//Switch statement 
switch (something) {
  case "cool":
    console.log("This again");
    break;
  case "not cool":
    console.log("This again but not cool");
  case "different":
    console.log("Something is different");
  default:
    console.error("Something is wrong.");
}

// For loop- to iterate through data/number
for(let i = 0; i < 10; i++){
    console.log(i + ' is not 10');
}

const max = 105;
let iteration = 3;
while(false){
    if(max % iteration == 0){
        console.log('the first divisible number is: ' + iteration);
    }
    iteration++;
    console.log(iteration);
}

// do-while loop
do {
    console.log('running')
} while(false);


/// ternary to simplify a function
function add(a, b, times){
    /* 
    let sum = 0;
    if(times === 0){
        sum = a+b;
     } else {
        sum = (a+b)*times;
    }
    sum = (times === 0) ? a+b : (a+b)*times;
    return sum;
    */
    return (times === 0) ? a+b : (a+b)*times;
}

/* Naming conventions
 constants UPPERCASE_WITH_SCREAMING_SNAKE
 functions camelCase
 variables camelCase
 classes Pascalcase
*/
