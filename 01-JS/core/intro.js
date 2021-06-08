// single line comment
/* 
    multi line comment
*/
// print hello world
// console.log("Hello World");
console.log(typeof sym);
// data types
//      number, boolean, string, object, null, BigInt, undefined, function, Symbol
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
//  control flow is the way we can programmatically control the execution
//      flow of our programs

// someone is trying to sign up to our site, they must be 13 or over
/* 
 first, hold the age in a variable
      we can create variables with three keywords
                javascript is loosely typed and uses dynamic type checking
          let => variable, allows all three scopes
          const => constant variable, cannot reassign, allows all three scopes
          var => variable, only allows global and function scope
*/
let age = 13;
/**
 * scoping
 *      age is global scoped
 *      a and b is function scoped
 *      c is block scoped
 *          unless you use var, then it is function scoped.
 *          NEVER USE VAR
 */
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
// next, we need to write logic for determining the age
//      The value of below will be either true or false
const overAge = age >= 13;

/**
 naming conventions
 *      constants UPPERCASE_WITH_SCREAMING_SNAKE
        functions camelCase
        variables camelCase
        classes Pascalcase
 */
