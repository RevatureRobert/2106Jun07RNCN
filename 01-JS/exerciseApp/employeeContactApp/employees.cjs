// An app that will hold Revature employees contact information

// Greet Employee
console.log('\n');
console.log(    "Welcome to Revature's new Employee Contact App! With this app, Revature can easily and efficiently maintain all employee contact information in one location.");
console.log(    "New employees can submit their personal information, and existing employees can update theirs as well. This app was designed for ease of use by all.");

// Create employee class
class Employee{
    constructor(name, address, phoneNumber, email, employeeId) {
        this._privname = name;
        this._privaddress = address;
        this._privphoneNumber = phoneNumber
        this._privemail = email;
        this._privemployeeId = employeeId;
    }
}

// Collect employee input
const prompt = require('prompt-sync')({sigint: true});

// Create employee object to hold contact information
console.log('\n');

const employee = {
    name: prompt('Please type your name: '),
    address: prompt('Add your address: '),
    phoneNumber: prompt('Add your phone number: '),
    email: prompt('Add your email: '),
    employeeId: prompt('Add your employee Id: '),
}
console.log('\n');

//Respond to employee input
console.log('Hello ' + employee.name + '. Thank you for providing your contact information. :)');

console.log('\n');

//Print employee inmput
console.log(employee);
console.log('\n');

// Prepare class export
module.exports = employee;

