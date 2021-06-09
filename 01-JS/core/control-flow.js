
// if else statement
// if(overAge){
//     console.log('The person is of age to join the site');
// } else {
//     console.log('Our tight nit security has caught the intruder. Good thing we check for honesty');
// }

// // The remainder
const something = "cool";
// if(something === 'cool'){
//     console.log('something is cool');
// } else if (something === 'not cool'){
//     console.log('something is not cool indeed');
// } else {
//     console.error('something is wrong with something');
// }

switch (something) {
  case "cool":
    console.log("this again");
    break;
  case "not cool":
    console.log("this again but at least it isnt cool");
  case "different":
    console.log("something is different with this one");
  default:
    console.error("something is again, something I do not understand");
}

// for loop 
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
// do while
do {
    console.log('running')
}while(false);


/// ternary
function add(a, b, times){
    // let sum = 0;
    // if(times === 0){
    //     sum = a+b;
    // } else {
    //     sum = (a+b)*times;
    // }
    // sum = (times === 0) ? a+b : (a+b)*times;
    // return sum;
    return (times === 0) ? a+b : (a+b)*times;
}
