const User = require('../export/user.cjs');
const input_functions = require('../export/get_input.cjs');

const current_user = new User();

current_user.user_name = input_functions.getInfo('What is your name? ');
current_user.user_name = input_functions.getInfo('What is your address? ');
current_user.user_name = input_functions.getInfo('What is your phone number? ');

while ( input_functions.getContinue() )
{
	current_user.user_other.push( input_functions.getInfo('What other info would you like to give? ') );
}

console.log(current_user);
