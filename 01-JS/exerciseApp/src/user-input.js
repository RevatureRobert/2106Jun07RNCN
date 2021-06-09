const obj = require('../src/user-data.cjs');
// const readlineSync = require('readline-sync');
const prompt = require('prompt-sync')();

const memberName = prompt('What is your name?');
obj.data.name = memberName;
const memberAddress = prompt('What is your address?');
obj.data.address = memberAddress;
const memberPhone = prompt('What is your phone number?');
obj.data.phone = memberPhone;

info();

function info(){
    let addInfo = prompt('Would you like to input additional info? (Y/N)');
    switch(addInfo.toUpperCase()){
        case "Y":
            const addMoreInfo = prompt('what would you like to input for your additional info?');
            obj.data.otherData[obj.data.otherData.length] = addMoreInfo;
            info();
            break;
        case "N":
            break;
        default:
            console.log("Oops!! Something went wrong.")    
    }
}

console.log("");
console.log("Here is the data you entered ealier. :)");
console.log(obj.read());
