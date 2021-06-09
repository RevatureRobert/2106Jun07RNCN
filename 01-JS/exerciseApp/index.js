
const prompt = require('prompt-sync')({sigint: true});
var exitBool = false;
do {
    console.log('What would you like to do? ');
    const initialPrompt = prompt('Valid operations include Add, Edit, Delete, and Exit. ');
    
    switch (initialPrompt) {
        case 'Add':
        case 'add':
            const addPerson = require('./addperson');
            addPerson.addPerson();
            break;
        case 'Edit':
        case 'edit':
            console.log('Not implemented yet.');
            break;
        case 'Delete':
        case 'delete':
            console.log('Not implemented yet.');
            break;
        default:
            console.log(initialPrompt + ' is treated as an exit command.')
            break;
    }
    

    const willContinue = prompt('Would you like to perform another operation? (Y/N) ');

    switch (willContinue) {
        case 'y':
        case 'Y':
        case 'yes':
        case 'Yes':
        case 'YES':
            exitBool = true;
            break;
        default:
            exitBool = false;
    }
} while (exitBool);