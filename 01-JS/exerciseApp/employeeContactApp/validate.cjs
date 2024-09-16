//Prepare employee import
const empl = require('./employees.cjs');
const prompt = require('prompt-sync')({sigint: true});

//Validate employee input
const validate = prompt('Is your contact information correct? Please type Y or N: ');

console.log('\n');

//Create conditional statement to validate employee input
    if(validate == 'Y') {
        console.log('Thank you, for validating your contact information.');
    } else if (validate == 'N'){
        console.log('Please update your contact information.');
        console.log('\n');
        const employee = {
            name: prompt('Please type your name: '),
            address: prompt('Type your address: '),
            phoneNumber: prompt('Type your phone number: '),
            email: prompt('Type your email: '),
            employeeId: prompt('Type your employee Id: '),
        } 

    console.log('\n');

    console.log(employee);

    } else {
        prompt('Please type a valid selection: Y or N: '); 
        console.log('\n');  
        const employee = {
            name: prompt('Please type your name: '),
            address: prompt('Type your address: '),
            phoneNumber: prompt('Type your phone number: '),
            email: prompt('Type your email: '),
            employeeId: prompt('Type your employee Id: '),
        }  
    }

console.log('\n');

// Prepare validate export
module.exports = validate;

