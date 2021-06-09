let u = require('./modules/User.js');
let obj = new u();
obj.askall();
console.log(obj.getValues());
let cont = true;
console.log("Enter 'Input' to input new fields or change existing fields.\nEnter 'DisplayAll' to show all entered information.\nEnter 'Display' to show a specific field.\nEnter 'InputAll' to re-enter all fields.\nEnter 'Help' to get this list of commands. \nEnter 'Exit' to close the program.");
while(cont){
    const prompt = require('prompt-sync')({sigint: true});
    console.log("Enter a command");
    const str = prompt("");
    switch(str){
        case "Help":
            console.log("Enter 'Input' to input new fields or change existing fields.\nEnter 'DisplayAll' to show all entered information.\nEnter 'Display' to show a specific field.\nEnter 'InputAll' to re-enter all fields.\nEnter 'Help' to get this list of commands. \nEnter 'Exit' to close the program.");
            break;
        case "Input":
            obj.dask();
            break;
        case "DisplayAll":
            console.log(obj.getValues());
            break;
        case "Display":
            console.log(obj.display());
            break;
        case "InputAll":
            obj.askall();
            break;
        case "Exit":
            cont = false;
            break;
        default:
            console.log("Unknown command. Enter Help to get a list of commands.");
    }
}








