const enterInfo = require('./export/enterInfo.cjs');
const display = require('./export/displayInfo.cjs');
const prompt = require('prompt-sync')({sigint: true});

console.log("Welcome to your fitness app!");
let cont = true;
while(cont){
    let decision = prompt("Press \'1\' to view your information. Press \'2\' to update. Press \'0\' to exit. ");
    switch(decision){
        case "1": 
            enterInfo.info();
            break;
        case "2":
            display.display();
            break;  
        case "0":
            cont = false;
            console.log("Have a good day.");
            break;
        default:
            console.log("Invalid option");
    }
}