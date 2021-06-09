class User {
    constructor(){
        this.Name = "DefaultName";
        this.Phone = "000-000-0000";
        this.Email = "example@example.com";
        this.fields = ["Name", "Phone", "Email"]
    }
    Name;
    Phone;
    Email;
    //Return values of all fields in a string.
    getValues(){
        let ans = "";
        this.fields.forEach(e => {
            ans += e + ": " + this[e] + "\n";
        });
        return ans;
    }
    //display a particular value
    display(){
        const prompt = require('prompt-sync')({sigint: true});
        const field = prompt("Which property would you like to display? ");
        if(!this.fields.includes(field)){
            return `Sorry, there is no data on ${field}`; 
        } else {
            return field + ": " + this[field] + "\n";
        }
    }
    //Ask the user the value of a specified string.
    ask(field){
        if(!this.fields.includes(field)){
            this.fields.push(field);
        }
        const prompt = require('prompt-sync')({sigint: true});
        try {
            this[field];
        } catch{
            console.log("Invalid input field.");
            return;
        }
        const answer = prompt("Input your " + field + ": ");
        this[field] = answer;

    }
    //Ask the user for a field, then its value
    dask(){
        const prompt = require('prompt-sync')({sigint: true});
        const str = prompt("What information would you like to store? ");
        let ans = str;
        this.ask(ans);
    }
    askall(){
        this.fields.forEach(e => {
            this.ask(e);
        });
        /*this.ask("Name");
        this.ask("Phone");
        this.ask("Email");*/
    }
}
module.exports = User;