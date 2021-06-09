const menu = require('./export/displayMenu.cjs');
const editUser = require('./export/enterInformation.cjs');
const viewUser = require('./export/viewInformation.cjs');

let menuChoice = -1;    

do{
    menuChoice = menu.displayMenu();
    console.log('\nYou made selection ' + menuChoice);

    switch(menuChoice){
        case 0: 
            console.log('Goodbye! \n\n');
            break;
        case 1:
            console.log('You have chosen to enter information.');
            editUser.inputInfo();
            break;
        case 2: 
            console.log('You have chosen to display information.');
            viewUser.displayInfo();
            break;
        default: 
            console.log('Please choose a valid option.');
    }
} while(menuChoice != 0);
