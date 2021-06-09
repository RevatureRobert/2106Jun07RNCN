const user = require('./user.js');
const update = require('./update.js');

function prompt(){
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false
    });

    console.log('Current user information: ', user, '\n');
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

module.exports = {prompt};