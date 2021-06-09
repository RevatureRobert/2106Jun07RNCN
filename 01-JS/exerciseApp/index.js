const User = require('./User.js');
const prompt = require('prompt-sync')({sigint: true});

let exit = 1;
while (exit != 0 )
    if (exit === '0') {
        console.log('exit program');
    } else if (exit === 1) {
        console.log('Enter Data');
        User.name = prompt('Enter Name: ' )
        User.address = prompt('Enter Address: ')
        User.phone = prompt('Enter phone: ')
        exit = 3;
    } else if (exit === '2') {
        console.log('view data');
    } else {
        console.log('(1) Enter Data\n(2) View Data\n(0) Exit Program\n');
        exit = prompt('Enter Your choice: ')
        console.log('value is', exit);
        console.log(typeof exit);
    }