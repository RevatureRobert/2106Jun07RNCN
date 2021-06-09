//const inc = require('../src/export/oject.cjs')


class Person {
    constructor(){
        this.name = "Bob";
        this.address = "1234 highway";
        this.phoneNumber = 1234567890;
        this.otherInfo=" werid";    
        this.setName = function (who)
            {
                this.name=who;
            }       
        this.setAddress =function(where)
            {
                this.address=where;
            }
        this.setPhoneNumber=function(phone)
            {
                this.phoneNumber=phone;
        this.setOtherInfo=function(info)
            {
                this.otherInfo=info;    
            }
            
    function sayName(){
        return console.log(this.name);
    }
    function writeAddress(){
        return console.log(this.address);
    }
    function giveNumber(){
        return console.log(this.phoneNumber);
    }
    function tellStory(){
        return console.log(this.otherInfo);
    }
    
}
    
   

    
const prompt = require('prompt-sync')({sigint: true});  
   
let roster = [];
  

console.log("Hello Welcome to my first Node JS App.");
console.log("This is a basic bio gathering app.");
let choice = '0';
let list = 0;
let index = 0;
let selection =0;

while(choice !=='3'){
   console.log("Would You like to Create or Edit a person's info, or quit program?");
    console.log("1 : Edit");
    console.log("2 : Create");
    console.log("3 : Quit");
    choice = prompt('Which do you want to do ? : ');

    if (choice == 1){
        console.log("You want to edit a person?");
        console.log(roster)
        selection = prompt("Which person would you like to edit");
    


    }else if (choice ==2){
        console.log("You want to create");
        roster[index]= list;
        let human = new Person();
        human.setName(prompt("Who is the new person? "));
        human.setAddress(prompt("Where do they live?"));
        human.setPhoneNumber(prompt("What is there phone number? "));
        human.setOtherInfo(prompt("Tell us something about them :"));
        roster[list]= human;
        

    
        list++;
        index++;


    }else{
            console.log("Goodbye");

    }
    
}
process.exit();
}}