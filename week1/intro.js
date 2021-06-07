console.log("Hello World!");
var x = 0;
console.log(x = x<1?x:1);
//assigns x to 1 if x is less than 1

//If Else Statement
let age = 18;
const rqd_age = age < 18;
if(rqd_age){
    console.log("Turn Away!");
} else{
    console.log("You're old enough");
}

//Switch Statement
switch(age){
    case 18:
        console.log("You may not enter");
        break;
    case 21:
        console.log("Fine, but you can't drink");
        break;
    case 25:
        console.log("Good to go");
        break;
    default:
        console.error("something is wrong");
        break;
}

//For-Loops
const num = 2;
function square(number, iterations){
    for(let i = 0; i < iterations; i++){
        number = number*2;
    }
    return number;
}
console.log(square(num, 4));

//While Loops
            //ALWAYS USE CONST OR LET, VARS IS OUTDATED
const condition = age < 25;
while(condition){
    if(age === 21){
        console.log("21 time");
        break;
    }
    console.log("not old enough: " + age);
    age++;
}

/*Naming Conventions
    constants ALL_CAPS_W/_UNDERLINE
    vars/let camelCase
*/