const functions =require('./functions')
const data =require('./data.js');

const curr = {...data}

curr.name = functions.getAnswer('What is your name?\n')
curr.address =functions.getAnswer('What is your address?\n');

while(functions.addMore()) {
    curr.info.push(functions.getAnswer("Enter more data?"))
}
console.log(curr)
