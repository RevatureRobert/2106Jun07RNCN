
// let person = {
//     name: this.name,
//     address: this.address,
//     phoneNumber: this.phoneNumber,
//     otherInfo: this.otherInfo
// }
const prompt = require('prompt-sync')({sigint: true});

let name = prompt('What is your name?');
let address = prompt('What is your address?');
let phoneNumber = prompt('What is your phone number?');
let otherInfo = prompt('Would you like to add any other info?')

let person = {
    name: (name),
    address: (address),
    phoneNumber: (phoneNumber),
    otherInfo: (otherInfo)
};

console.log('Thanks, your info is saved, please verify below')
console.log(person);

let userUpdate = prompt('Do you wish to change or update anything?');
if (userUpdate == y) {
    function updateInfo()
    } else {console.log('Thank you');

    }



//console.log('this.name', this.address, this.phoneNumber, this.otherInfo)

//let personInfo = [name, address, phoneNumber, otherInfo]

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('What is your name?' , name => {
//     console.log()
// })


   
    