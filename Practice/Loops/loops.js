//for loops are great for iterating through an array one value at a time
//This one gives the sum of all the numbers in the array

let ar = [1,2,3,4,5];

function arraySum() {
let sum = 0;
for (let i = 0; i < ar.length; i++) {
  sum += ar[i]
}
console.log(sum)
}
arraySum()

//Do while loops repeats until a specified condition evaluates to false
//This one prints out numbers as long as they are less than 5

let i = 0
do {
    i += 1
    console.log(i)
} while (i < 5)

//While loops executes as long as a specified condition evaluteas to true
//You want it to eventually be false, or it will run forever
//This one prints the line "The number is" + number and adds one to the 
//number after each interation

let i = 0
let text = ""
while (i < 10) {
    text = "The number is " + i;
    i++
    console.log(text)
}

//For In loops can interate through the properties of an object or an array
//This one loops through an object

let person = {fname: "Jamario ", lname: "Walker ", age:40}

let text = ""
let x
for (x in person) {
    text += person[x]
}
 console.log(text)

 //This For in loop iterates through an array

 let numbers = [45 , 4 , 9 , 16 , 25]

 let txt = ""
 let x
 for (x in numbers) {
     //this + " " adds a space after each number
     txt += numbers[x] + " "
 }
 console.log(txt)

 //For Of loops interate through the values of objects, arrays or strings
 //This one prints out the individual letters of Javascript

 let language = "Javascript"
 let text = ""

 for (let x of language) {
     text += x + " "
 }
 console.log(text)

 //THis one loops over an array

  let cars = ["BMW", "Infiniti", "Saab"]
 let text = ""

 for (let x of cars) {
     text += x + " "
 }
 console.log(text)

 //Switch loop gives a number of cases that run or return different results
 //each case should be followed by a break statement so that it leaves the loop

 // This is a Switch statement to determine what user data to change
 
 const prompt = require('prompt-sync')({sigint: true});
 let newInfo = prompt('Enter the number of the element you would you like to change?');
 switch (newInfo) {
    case '1':
      let name = prompt('What is your name?');
      console.log('Thanks, your info is saved, please verify below')
      console.log(name);
      break;
  
    case '2':
      let address = prompt('What is your address?');
      console.log('Thanks, your info is saved, please verify below')
      console.log(address);
      break;
  
    case '3':
      let phoneNumber = prompt('What is your phone number?');
      console.log('Thanks, your info is saved, please verify below')
      console.log(phoneNumber);
      break;
  
    case '4':
      let otherInfo = prompt('What other info would you like to add?')
      console.log('Thanks, your info is saved, please verify below')
      console.log(otherInfo);
      break;
  
    default:
      console.log(`Sorry, please select from options 1 - 4.`);
  }
      

