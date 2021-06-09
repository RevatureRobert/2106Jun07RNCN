var fs = require('fs');
class PersonInfo {
    constructor(firstName, lastName, address, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }
    contactInfo() {
        console.log('User ' + this.firstName + ' ' + this.lastName + " has the phone number: " + this.phone);
    }
    saveFile() {
        var jsonData  = JSON.stringify(this) + '\n';

        fs.appendFile('PersonData.txt', jsonData, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
}

module.exports = {
    PersonInfo
};