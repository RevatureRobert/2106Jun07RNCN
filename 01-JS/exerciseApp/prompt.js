// imports user object and update function
const user = require('./user.js');
const update = require('./update.js');

// prompt function
function prompt(){
    // initializes readline
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    // clears console for a cleaner output, displays current user information, 
    console.clear();
    console.log('Current user information: ', user, '\n');

    // prompts the user if they want want to update the user, calls updateUser function if yes, exits if no
    readline.question("Do you want to update the user? (y/n) : ", function(yn){
        switch (yn.toLowerCase()){
            case "y":
                update.updateUser();
                break;
            case "n":
                console.clear();
                console.log("Cool. Exiting app.", '\n');           
                readline.close();
                break;
            default:
                console.log("Invalid input.");
                readline.close();
                prompt();
        }
    });

}

// exports prompt function
module.exports = {prompt};