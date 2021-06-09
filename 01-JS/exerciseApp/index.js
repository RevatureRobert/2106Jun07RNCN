const user = require('./user.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Name : ", function(name){
    readline.question("Address :  ", function(address){
        readline.question("Phone Number : ", function(number){
            readline.question("Additional Information : ", function(extra){
                user.name = name;
                user.address = address;
                user.number = number;
                
                (extra.length > 0) ? user.extra = extra : user.extra = "User has not provided additional information.";

                console.log(user);
                readline.close();
            });
        });
    });
});

