// good ol hello world
console.log('Hello World');

// if statement
const age = 12;
const overAge = (age >= 13);

if(overAge){
    console.log('The person is of age to join the the site.');
} else {
    console.log('Out tight nit security has caught the intruder. Good thing we check for honesty.');
}

// else if statement
const something = 'cool';

if(something === 'cool'){
    console.log('something is cool');
} else if(something === 'not cool'){
    console.log('something is not cool :(')
} else {
    console.error('something is wrong with something');
}

// ternary
(something === 'cool') ? console.log('its cool') : console.log('not cool'); 

// switch statement
switch(something){
    case 'cool':
        console.log('still cool');
        break;
    case 'not cool':
        console.log('still not cool');
        break;
    case 'different':
        console.log('something is different');
    default:
        console.error('something is really really wrong');
}

// for loop
for(let i = 0; i < 10; i++){
    console.log(i + ' is not 10');
}

// while loop
const max = 105;
let iteration = 3;

while(iteration < max){
    if (max % iteration == 0){
        console.log('the first divisible number is: ' + iteration);
        break;
    }
    iteration++;
}

// do while loop
do {
    console.log('yes');
} while (false);
