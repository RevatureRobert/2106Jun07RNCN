const prompt = require('prompt-sync')({sigint: true});
const user = require('../assets/user.json');

module.exports.inputInfo = function inputInfo(){
    let counter = 0;
    let otherInput = '';
    
    console.log('\n\n');
    console.log('---');
    
    user.name = prompt("What is your name? ");
    user.address = prompt("What is your address? ");
    user.phone = prompt("What is your phone number? ");
    user.other = []; // clear old other data
    do{
        otherInput = prompt("Do you have any additional information to enter (y/n)? ");
        if (otherInput === 'y'){
            user.other[counter] = prompt("What is your additional information? ");
            counter++;
        }
    } while (otherInput === 'y' || otherInput === 'Y')

    console.log('---');
}