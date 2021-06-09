let u = require('./modules/User.js');
let obj = new u();
obj.askall();
console.log(obj.getValues());
let cont = true;
while(cont){
    const prompt = require('prompt-sync')({sigint: true});
    const str = prompt("Enter 'Input' to input new fields or change existing fields. Enter 'Display' to show all entered information. Enter 'All' to re-enter all fields. Enter 'Exit' to close the program. ");
    switch(str){
        case "Input":
            obj.dask();
            break;
        case "Display":
            console.log(obj.getValues());
            break;
        case "Edit":
            obj.askall();
            break;
        case "Exit":
            cont = false;
            break;
        default:
            console.log("Unknown command."); 
    }
}








