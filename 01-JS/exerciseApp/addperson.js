const prompt = require('prompt-sync')({sigint: true});
function addPerson() {
    const name = prompt('Please enter your full name: ');
    const inputName = name.split(' ');
    const address = prompt('Please enter your address: ');
    const phone = prompt('Finally, enter a phone number: ');

    const person = require('./classes').PersonInfo;
    const newGuy = new person(inputName[0], inputName[1], address, phone);
    newGuy.saveFile();
    console.log("Great! You're all set. User " + inputName[0] + ' ' + inputName[1] + ' at ' + address + ' with phone ' + phone + ' saved!');
}

module.exports = {
    addPerson
}