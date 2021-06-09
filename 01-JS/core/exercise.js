// const obj = {};
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// class personalInformation {
//     constructor(name){
//         this._name = name;
//     }
//     get name(){
        
//         return this._name;
//     }
//     name = (function() {

//         console.log("Hello There, please enter your name below:");
//         const val = readline();
//         obj.name = val;
   
//         console.log("Thank you, can you now give me your adress below:");
//         const val1 = readline();
//         obj.address = val1;
   
//         console.log("Thank you, can you now give me your phone number below:")
//         const val2 = readline();
//         obj.phone = val2;
//    })()
// }
// const pi = new personalInformation('Bill');
// pi.name = ('Hello');


// const readline = require("readline");

// function personInformation(){

//      console.log("Hello There, please enter your name below:");
//      const val = readline();
//      obj.name = val;

//      console.log("Thank you, can you now give me your adress below:");
//      const val1 = readline();
//      obj.address = val1;

//      console.log("Thank you, can you now give me your phone number below:")
//      const val2 = readline();
//      obj.phone = val2;
// }

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });


const obj = [];

const person = (function(){
    console.log('Hello there please enter your information below like name, phone, and address: ');
    let info = '';
    return function (infomation){
        for(let i = 0; i < 10;i++){
            obj[i] = infomation
            
        }
        return 'Thank you for you information';
        
    }
})();


