
// Let customer exit the system 

//imports
const empl = require('./employees.cjs');
const val = require('./validate.cjs');
const prompt = require('prompt-sync')({sigint: true});

const exitSystem = prompt('Are you ready to exit the system? Y or N: ');

    console.log('\n');

    if(exitSystem == 'Y') {
        console.log('Thank you, have a great day!');
        console.log('\n');
        process.exit()
    } else {
        console.log('If you are still having trouble updating your contact information, please call HR services at (123) 456-7890.');
        console.log('\n');
        process.exit()
    }