const User = require('./User.js');
const prompt = require('prompt-sync')({sigint: true});

let exit = '1';
while (exit != 0 )
    if (exit === '1') {
        console.log('Enter Data Below');
        User.name = prompt('Enter Name: ' );
        User.address = prompt('Enter Address: ');
        User.phone = prompt('Enter Phone: ');
        exit = 3;
    } else if (exit === '2') {
        console.log(`\nUser Data\n-----\nName: ${User.name}\nAddress: ${User.address}\nPhone: ${User.phone}`);
        exit = 3;
    } else {
        console.log('\n(1) Enter Data\n(2) View Data\n(0) Exit Program\n');
        exit = prompt('Enter Your choice: ');
    }