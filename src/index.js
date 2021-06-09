const Human = require('./export/class.js');
    
const prompt = require('prompt-sync')({sigint: true});  
   
let roster = [];
let man = new Human(); 

console.log("Hello Welcome to my first Node JS App.");
console.log("This is a basic bio gathering app.");
let choice = '0';
let list = 0;
let index = 0;
let selection =0;

while(choice !=='3'){
    console.log("");
    console.log("Would You like to Create or Edit a person's info, or quit program?");
    console.log("1 : Edit");
    console.log("2 : Create");
    console.log("3 : Quit");
    console.log("");

    choice = prompt('Which do you want to do ? : ');

    if (choice == 1){

        

        if (roster.length ===0){
            console.log("There isnt anyone to edit. Please go create a person");
            console.log("");
        }else{
            console.log("You want to edit a person?");
            for( let per in roster){
            console.log("person : "+( Number(per)+1));
            }
          
        console.log("");
        selection = (prompt("Which person would you like to edit  : "));
        man = roster[(selection-1)];
        console.log("");
        console.log("Name : "+man.name);
        console.log("Address : "+man.address);
        console.log("Phone Number : "+man.phoneNumber);
        console.log("Other Info : "+man.otherInfo);
        console.log("");
        man.setName(prompt("What is new name? : "));
        man.setAddress(prompt("Where do they live now? : "));
        man.setPhoneNumber(prompt("What is there new phone number? : "));
        man.setOtherInfo(prompt("Tell us something new about them. : "));
        console.log("");
        console.log("Name : "+man.name);
        console.log("Address : "+man.address);
        console.log("Phone Number : "+man.phoneNumber);
        console.log("Other Info : "+man.otherInfo);
        }
    


    }else if (choice ==2){
        console.log("You want to create");
        
        roster[index]= list;       
        man.setName(prompt("Who is the new person? "));
        man.setAddress(prompt("Where do they live?"));
        man.setPhoneNumber(prompt("What is there phone number? "));
        man.setOtherInfo(prompt("Tell us something about them :"));
        roster[list]= man;
        console.log("");
        console.log("The name is "+man.name);
        console.log("The address is "+man.address);
        console.log("The phone number is "+man.phoneNumber+".");
        console.log("More Info about them is :"+man.otherInfo);
        

    
        list++;
        index++;


    }else if(choice === '3'){
            console.log("Goodbye");
            process.exit();

    }
    else{}
    
}

