const user = require("./functions");
const readline = require("readline");
const userData = require("./object");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
 "Please answer the following questions. To end this program, type END.",
 "What is your full name?", 
 "What is your address?", 
 "When were you born?", 
 "What is your phone number?",
 "Would you like to end? (END/NO)"
]

let i = 0;

const iterateUntilEnd = function(){
    rl.question(questions[i], (response) => {
        console.log(userData);
        
        switch(i) {
            case 1:
                user.nameChange(response, userData);
                console.log(userData);
                break;
            case 2:
                user.addressChange(response, userData);
                console.log(userData);
                break;
            case 3:
                user.dobChange(response, userData);
                console.log(userData);
                break;
            case 4: 
                user.phoneNumChange(response, userData);
                console.log(userData);
                break;
            default:
                break;
        }

        if(response === "END") {
            console.log("Program will now end.");
            return rl.close();
        } else if (response === "NO") {
            i = 0;
            iterateUntilEnd();
        } else {
            i++;
            iterateUntilEnd();
        }
    })
}

iterateUntilEnd();