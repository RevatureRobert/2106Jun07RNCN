const contact = {
    nickname: null,
    age: null,
    address: null,
    phone: null
}

var readline = require('readline');

var readlineOne = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*var readlineTwo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var readlineThree = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var readlineFour = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/


var recursiveAsyncReadLine = function () {

                readlineOne.question('Who are you? ', name => {
                    console.log(`Hey there ${name}!`);
                    contact.nickname = name;
                
                    readlineOne.question('How old are you? ', years => {
                        console.log(`You're ${years} years old!`);
                        contact.age = parseInt(years);
                    
                        readlineOne.question('What is your mailing address? ', location => {
                            console.log(`You live at ${location}!`);
                            contact.address = location;
                        
                            readlineOne.question('What is your phone number? ', numbers => {
                                console.log(`I can call you at ${numbers}!`);
                                contact.phone = numbers;
                                console.log(contact);
                            
                                readlineOne.question('Enter another contact? (Yes or No) ', answer => {
                                
                                    switch(answer){
                                        case 'yes', 'Yes':
                                            console.log("Very well!");
                                            recursiveAsyncReadLine();
                                            break;
                                        case 'no', 'No':
                                            console.log("Goodbye!");
                                            end = false;
                                            readlineOne.close();
                                            break;
                                    }
                                    //readlineOne.close();
                                });
                            
                                //readlineOne.close();
                            });
                        
                            //readlineOne.close();
                        });
                    
                        //readlineOne.close();
                    });
                    //console.log(contact);
                
                //readlineOne.close();
            });
        }
recursiveAsyncReadLine();