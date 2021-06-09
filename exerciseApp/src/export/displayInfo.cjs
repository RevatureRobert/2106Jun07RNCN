const prompt = require('prompt-sync')({sigint: true});
const user = require('../user/user.json');

module.exports.display = function display(){
    console.log("Your information is as listed: ");
    console.log(user.name);
    console.log(user.address1);
    console.log(user.address2);
    console.log(user.phone);
    console.log(user.other);
}