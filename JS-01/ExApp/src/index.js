const Person = require('./personalInfo.js'); //import person class



const rLS = require('readline-sync'); //import console io module
let user; //create user
console.log("Please enter your informaiton:"); 
const name = rLS.question("Name: ");
const address = rLS.question("Address: ");
const phone = rLS.question("Phone: ");
user = new Person(name, address, phone);
            
//start menu loop
checkSelection();
function checkSelection(){
    let choice = 10;
    console.log();
    console.log(`Available options: 
        1: Update Name
        2: Update address 
        3: Update phone 
        4: Add additional information 
        5: Display all current Info
        0: Exit`);
    choice = rLS.question("Please enter your selection: ");
    // switch between chioce of action
    switch(choice){
        case '1': {
            user.name = rLS.question("Enter new Name: ");
            checkSelection();
            break;
        };
        case '2': {
            user.address = rLS.question("Enter new Address: ");
            checkSelection();
            break;
        };
        case '3': {
           user.phone = rLS.question("Enter new Phone number: ");
           checkSelection();
           break;
        };
        case '4': {
            let infoType = rLS.question("Catagory: ");
            let info = rLS.question("Enter your " + infoType + ': ');
            let currentInfo = user.moreInfo;
            currentInfo[currentInfo.length] = infoType + ': ' + info;
            user.moreInfo = currentInfo;
            checkSelection();
            break;
            
        };
        case '5': {
            user.displayAll();
            checkSelection();
            break;
        }
        case '0': {
            console.log(`Final Data`); 
            user.displayAll();
            console.log("Thanks for useing the app!");
            break;
        };
        default: {
            console.log("Please choose from the list");
            checkSelection();
        }
    };
};



