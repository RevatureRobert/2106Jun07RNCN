const User = require('./User.js');
const prompt = require('prompt-sync')({sigint: true});

let run = '1';
while (run != 0 )
    if (run === '1') {
        console.log('Enter Data Below');
        User.name = prompt('Enter Name: ' );
        User.address = prompt('Enter Address: ');
        User.phone = prompt('Enter Phone: ');
        run = 3;
    } else if (run === '2') {
        console.log(`\nUser Data\n-----\nName: ${User.name}\nAddress: ${User.address}\nPhone: ${User.phone}`);
        run = 3;
    } else {
        console.log('\n(1) Enter Data\n(2) View Data\n(0) Exit Program\n');
        run = prompt('Enter Your choice: ');
    }