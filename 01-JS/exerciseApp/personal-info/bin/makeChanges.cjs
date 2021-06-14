/*
A helper function for queryInformation(). makeChanges asks the user a yes or no
 question answered in the command line.

             r --> readline.Inferface() instance
    givePrompt --> boolean
          info --> PersonalInfo object

*/
module.exports.makeChanges = function makeChanges(r, givePrompt, info){
    r.question('Make changes? (y/n): ', answer => {
        if (answer === 'n' || answer === 'N'){
            givePrompt = false;
        } else if (answer != 'y' && answer != "Y"){
            console.log('Please type one of the following letters: n, N, y, or Y.');
            givePrompt = true;
            makeChanges(r, givePrompt, info);
        } else {
            console.log('Ok, let\'s ask everying again:');
            givePrompt = true;
        }
        
        if (givePrompt === false){
            console.log('Thanks for using the personal information manager! The application will now terminate.');
            r.close();
        } else {
            const obj = require('./queryInformation.cjs');
            obj.queryInformation(r, givePrompt, info);
        }
    });
}