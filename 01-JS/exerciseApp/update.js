// clears console for cleaner output, imports user object
console.clear();
const user = require('./user.js');

// initializes readline
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

// updateUser function
function updateUser(){
    // prompts the user for personal information
    readline.question("Name : ", function(name){
        readline.question("Address :  ", function(address){
            readline.question("Phone Number : ", function(number){
                readline.question("Additional Information : ", function(extra){
                    // assigns data from user to object
                    user.name = name;
                    user.address = address;
                    user.number = number;
                    user.extra = extra;
                    
                    // checks if personal information is empty, provides a string if yes
                    (extra.length > 0) ? user.extra = extra : user.extra = "User has not provided additional information.";

                    // clears console for a cleaner output, displays updated user information
                    console.clear();
                    console.log('Current user information: ', user, '\n');
                
                    // prompts user if they want to update the information again, recurses if yes, exits if no
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

// exports updateUser function
module.exports = {updateUser};