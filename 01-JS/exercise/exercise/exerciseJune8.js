/**
 * Jacob Kula, June 8th 
 * This a small application that is used to take in a persons inputs and save them for the person to view later
 * 
 * */
 const person = {
    "Name":" ",
    "Address":" ",
    "Number":" "
};

// This is the way that the NodeJs site was using for the readline() function
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

//These are the questions that are asked to the person for their input

readline.question("What is your name? : ", function(name) { //The name
readline.question("What is your address :  ", function(address) { //The address
readline.question("What is your phone number : ", function(number){ //The phone number
            person.Name = name; 
            person.Address = address; // They are then inputted into the object that is inside of person.js
            person.Number = number;
            console.log(person);
        });
    });
});