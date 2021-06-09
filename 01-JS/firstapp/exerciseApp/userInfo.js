const user = require("./functions");
const readline = require("readline");
const userData = require("./object");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const questions = [
 "Please answer the following questions. To start this program, press enter. To end this program, type END.",
 "What is your full name?", 
 "What is your address?", 
 "When were you born?", 
 "What is your phone number?",
 "Would you like to change any information? If so, enter what you want to change. (NAME, ADD, PHONE, DOB, NO)",
 "Would you like to end or continue? (END/CONT)"
]

let i = 0;

const iterateUntilEnd = function(){
    rl.question(questions[i], (response) => {
        
        switch(i) {
            case 1:
                user.nameChange(response, userData);
                console.log(userData.name);
                break;
            case 2:
                user.addressChange(response, userData);
                console.log(userData.address);
                break;
            case 3:
                user.dobChange(response, userData);
                console.log(userData.dateOfBirth);
                break;
            case 4: 
                user.phoneNumChange(response, userData);
                console.log(userData.phoneNumber);
                break;
            default:
                break;
        }

        if(response == "END") {
            console.log("Program will now end.");
            return rl.close();
        } else if (response == "CONT") {
            i = 0;
            iterateUntilEnd();
        } else if (response === "NAME"){
            i = 1;
            iterateUntilEnd();
        } else if(response === "ADD"){
            i = 2;
            iterateUntilEnd()
        } else if(response === "PHONE"){
            i = 3;
            iterateUntilEnd();
        } else if(response === "DOB"){
            i = 1;
            iterateUntilEnd();
        } else {
            i++;
            iterateUntilEnd();
        }
    })
}

iterateUntilEnd();
