/*
queryInformation asks the user to type their personal information via command 
line to modify the info object. It is recursive and calls itself until the 
boolean parameter is set to false.

             r --> readline.Inferface() instance
    givePrompt --> boolean
          info --> PersonalInfo object

*/
module.exports.queryInformation = function queryInformation(r, givePrompt, info){
    r.question('Enter your name: ', name => {
        r.question('Enter your address: ', address => { 
            r.question('Enter your phone number: ', phoneNumber => {
                r.question('Enter your SSN: ', ssn => {
                    r.question('Enter your mom\'s credit card number: ', creditCardNumber => {
                    
                    console.log('Ok, now stealing... I mean, storing your information. New info is:');
                    info.set_name(name);
                    info.set_address(address);
                    info.set_phoneNumber(phoneNumber);
                    info.set_ssn(ssn);
                    info.set_momsCreditCardNumber(creditCardNumber);
                    
                    console.log(info);

                    //ask user if they would like to re-enter information 
                    const obj = require('./makeChanges.cjs');
                    obj.makeChanges(r, givePrompt, info);
                    });
                });
            });
        });
    });
}