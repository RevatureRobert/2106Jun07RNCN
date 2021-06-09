const prompt = require('prompt-sync')({sigint: true});
const user = require('../user/user.json');

module.exports.info = function info(){
    user.name = prompt("Enter your name: ");
    user.address1 = prompt("Where is your street address: ");
    user.address2 = prompt("Enter the city and state: ");
    user.phone = prompt("Enter the best number to reach you at: ");    
}