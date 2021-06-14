//-----------------------------------------------------------------------------
//Personal information manager
console.log('Welcome to the personal information manager!');

//read from terminal
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let promptUser = true;

const obj1 = require('./PersonalInfo.cjs');
let currentUserInfo = new obj1.PersonalInfo("a","b","c");

//a recursive function that recalls itself if boolean parameter stays true
const obj = require('./queryInformation.cjs');
obj.queryInformation(r1, promptUser, currentUserInfo);