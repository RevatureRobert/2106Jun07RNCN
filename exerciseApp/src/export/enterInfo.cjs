const prompt = require('prompt-sync')({sigint: true});
const user = require('../user/user.json');
const fs = require('fs');

module.exports.info = function info(){
    user.name = prompt("Enter your name: ");
    user.address1 = prompt("Where is your street address: ");
    user.address2 = prompt("Enter the city and state: ");
    user.phone = prompt("Enter the best number to reach you at: ");
    user.other = prompt("Add any additional information here... ");
    
    //! Think about having it write to the json file specifically and then update/create more newUsers 
    /* For future reference
    const newUser = {
        name: user.name,
        address: user.address1 + " " + user.address2,
        phone: user.phone,
        other: user.other,
    }
    const path_name = 'C:\\Users\\imran\\Documents\\GitHub\\2106Jun07RNCN\\exerciseApp\\src\\user\\user.json'
    const jsonString = JSON.stringify(newUser);
    fs.writeFile(user, jsonString, err =>{
        if(err){
            console.log("Error when writing to user.json", err)
        }
        else{
            console.log("Successful addition to user.json");
        }
    })
    */
}