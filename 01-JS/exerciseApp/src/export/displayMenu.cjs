const prompt = require('prompt-sync')({sigint: true});

module.exports.displayMenu = function displayMenu(){
    console.log('\n\n');
    console.log('========================================');
    console.log('1. Enter Information');
    console.log('2. View Information');
    console.log('0. Exit Application');
    return parseInt(prompt('What option would you like? '));
}