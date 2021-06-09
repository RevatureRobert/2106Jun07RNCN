const user = require('../assets/user.json');

module.exports.displayInfo = function displayInfo(){
    console.log('\n\n');
    console.log('***');
    console.log('Name: ' + user.name);
    console.log('Address: ' + user.address);
    console.log('Phone: ' + user.phone);
    console.log('Other Information: ');
    user.other.forEach(element => {
        console.log('      ' + element);
    });
    console.log('***');
}