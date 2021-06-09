/**
 * Jacob Kula, June 8th 
 * This a small application that is used to take in a persons inputs and save them for the person to view later
 * 
 * */

// The import statement that is used to bring over the object
const person = require('./person.js');

// This is the way that the NodeJs site was using for the readline() function
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function name(){
//     rl.question("What is your address? : ", address())
// }

// function address(){
//     rl.question("What is your phone number? : ", phone())
// }

// function phone(){
//     rl.question("Is there any other information that you want to share? ", 
//     person.Name = names);
//     person.Address = addresses;
//     person.Phone = phones;
//     person.Other = others
//     console.log(person);
//     console.log("Thank you for the information");
//     rl.close();

// }
//These are the questions that are asked to the person for their input

 rl.question("What is your name? : ", function(names){
    rl.question("What is your address :  ", function(addresses){
        rl.question("What is your phone number : ", function(phones){
                person.Name = names;
                person.Address = addresses;
                person.Phone = phones;
                console.log(person);
                console.log("Thank you for the information");
                rl.close();

        }); 

    });

 });


//  person.name(names);
//  person.address(address);
//  person.phone(phone);
//  person.other(other);

//  console.log(person);
//  console.log("Thank you for submitting your information")



// rl.close();