const user = require('./user.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Name : ", function(name) {
    readline.question("Address :  ", function(address) {
        readline.question("Phone Number : ", function(number){
            user.Name = name;
            user.Address = address;
            user.Number = number;
            console.log(user);
            readline.close();
        });
    });
});

