const user = require('../export/update.cjs');
const readline = require('readline');
const userObject = require('../export/object.cjs');

const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

    // r.question("Please enter the your name", (answer) => {
    //     console.log(userObject.name);
    //     user.nameUpdate(answer, userObject);
    //     console.log(userObject.name)
    // })

const arrayOfQuestions = ["Please input your answers according to the prompt. If you ever want to stop, please type STOP. To continue type anything:","Please input your full name with spaces:", "Please input your address:", "Please input your phone number:", "Please input any other information you would like to share:"]

let i = 0;

const loopTilstop = function() {
    r.question(arrayOfQuestions[i], (answer) => {
        console.log(userObject);
        switch (i) {
            case 1:
                user.nameUpdate(answer, userObject);
                console.log(userObject);
                break;
            case 2:
                user.addressUpdate(answer, userObject);
                console.log(userObject);
                break;
            case 3:
                user.phoneNumberUpdate(answer,userObject);
                console.log(userObject);
                break;
            case 4:
                user.otherInfoUpdate(answer, userObject);
                console.log(userObject);
                break;
            default:
                break;
        }
        if (answer === "STOP"){
            console.log("Goodbye");
            return r.close();
        } else { 
            if (i === 4){
                console.log(userObject);
                i = 0;
                loopTilstop();
            } else {
                i++;
                loopTilstop();
            }
        }
    })
}

loopTilstop();











