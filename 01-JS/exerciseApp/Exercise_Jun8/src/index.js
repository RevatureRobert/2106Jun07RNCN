const {UserProfile} = require('./export/user_profile.cjs');

const { RSA_X931_PADDING } = require("constants");
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let newUser;
rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        rl.question("What is your phone number ? ", function(phoneNumber) {
            newUser = new UserProfile(name, country, phoneNumber);
            console.log(JSON.stringify(newUser));

            console.log(`${name}, is a citizen of ${country}, and his/her phone number is ${phoneNumber}`);
            rl.close();

        });
    });
});


rl.on("close", function() {
    process.exit(0);
});






