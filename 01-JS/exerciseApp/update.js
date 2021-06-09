console.clear();

const user = require('./user.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function updateUser(){
    readline.question("Name : ", function(name){
        readline.question("Address :  ", function(address){
            readline.question("Phone Number : ", function(number){
                readline.question("Additional Information : ", function(extra){
                    const prompt = require('./prompt.js');

                    user.name = name;
                    user.address = address;
                    user.number = number;
                    user.extra = extra;
                    
                    (extra.length > 0) ? user.extra = extra : user.extra = "User has not provided additional information.";

                    console.clear();
                    console.log('Current user information: ', user, '\n');
                
                    readline.question("Do you want to update the user again? (y/n) : ", function(yn){
                        switch (yn.toLowerCase()){
                            case "y":
                                updateUser();
                                break;
                            case "n":
                                console.clear();
                                console.log("Cool. Exiting app.", '\n');           
                                readline.close();
                                break;
                            default:
                                console.log("Invalid input.");
                                updateUser();
                        }
                    });
                
                });
            });
        });
    });
}

module.exports = {updateUser};