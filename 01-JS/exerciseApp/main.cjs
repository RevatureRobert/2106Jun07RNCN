
const obj = require('../exerciseApp/exportfunctions.cjs');
const User = require('../exerciseApp/userObject.cjs');
const prompt = require('prompt-sync')({sigint: true});

const newPerson = Object.create(User);

let name = prompt('Please input your name: ');
newPerson.name = name;

let address = prompt('Please input your address: ');
newPerson.address = address;

let phonenumber = prompt('Please input your phone Number: ');
newPerson.phoneNumber = phonenumber;

let other = prompt('Please insert other information seperating each element with a  ",": ');
let othernew = other.split(',')
newPerson.other = othernew;

let r = '-1';
console.log()
console.log('Please indicate if you would like to see or change the following information: ');
do{
    console.log();
    console.log('Type the number of the Information your would like to change or q to quit:');
    r = prompt('For Name type 0, for Address type 1, for Phone Number type 2, for Other type 3 or to Quit type q: ');
    if(r === '0'){
        newPerson.Name(obj);
    }else if(r === '1' ){
        newPerson.Address(obj);
    }else if(r === '2'){
        newPerson.PhoneNumber(obj);
    }else if(r=== '3'){
        newPerson.Other(obj);
    }
}while (r != 'q')
