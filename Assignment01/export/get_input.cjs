var readlineSync = require('readline-sync');

function getInfo(message)
{
	return readlineSync.question(message);
};

function getContinue()
{
	return readlineSync.keyInYNStrict('Do you want to continue entering information? ');
};

module.exports = {
	getInfo,
	getContinue
}
