//setup input prompt
const prompt = require('prompt-sync')({sigint: true});

// prompt and receive input from user
let name = prompt('What is your name?');
let address = prompt('What is your address?');
let phoneNumber = prompt('What is your phone number?');
let otherInfo = prompt('Would you like to add any other info?')

// create person object from inputs
let person = {
    name: (name),
    address: (address),
    phoneNumber: (phoneNumber),
    otherInfo: (otherInfo)
};

// Display info back to user
console.log('Thanks, your info is saved, please verify below')
console.log(person);

// Ask user if they want to update or change anything
let userUpdate = prompt('Do you wish to change or update anything? Y or N ');

if (userUpdate == 'Y') {
    console.log('1.Name')
    console.log('2.Address')
    console.log('3.Phone Number')
    console.log('4.Other Info')
    let newInfo = prompt('Enter the number of the element you would you like to change?');
    
// Switch statement to determine what user data to change
switch (newInfo) {
  case '1':
    let name = prompt('What is your name?');
    person.name = name
    console.log('Thanks, your info is saved, please verify below')
    console.log(person);
    break;

  case '2':
    let address = prompt('What is your address?');
    person.address = address
    console.log('Thanks, your info is saved, please verify below')
    console.log(person);
    break;

  case '3':
    let phoneNumber = prompt('What is your phone number?');
    person.phoneNumber = phoneNumber
    console.log('Thanks, your info is saved, please verify below')
    console.log(person);
    break;

  case '4':
    let otherInfo = prompt('What other info would you like to add?')
    person.otherInfo = otherInfo
    console.log('Thanks, your info is saved, please verify below')
    console.log(person);
    break;

  default:
    console.log(`Sorry, please select from options 1 - 4.`);
}
    } else {console.log('Thank you');

    }




   
    