let u = require('./modules/User.js');
let obj = new u();
obj.askall();
console.log(obj.getValues());
let cont = true;
while(cont){
    const prompt = require('prompt-sync')({sigint: true});
    const str = prompt("Enter 'Input' to input new informpation. Enter 'Display' to show all entered information. Enter 'Exit' to close the program. ");
    switch(str){
        case "Input":
            obj.dask();
            break;
        case "Display":
            console.log(obj.getValues());
            break;
        case "Exit":
            cont = false;
            break;
    }
}








