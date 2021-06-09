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
            ans += e + ": " + eval("this." + e) + "\n";
        });
        return ans;
    }
    //Ask the user the value of a specified string.
    ask(field){
        if(!this.fields.includes(field)){
            this.fields.push(field);
        }
        const prompt = require('prompt-sync')({sigint: true});
        try {
            eval("let a = this." + field);
        } catch{
            console.log("Invalid input field.");
            return;
        }
        const answer = prompt("Input your " + field + ": ");
        eval("this." + field + " = answer");

    }
    //Ask the user for a field, then its value
    dask(){
        const prompt = require('prompt-sync')({sigint: true});
        const str = prompt("What information would you like to store? ");
        let ans = str.replaceAll(/[^a-zA-Z0-9]/g,"");
        this.ask(ans);
    }
    askall(){
        this.fields.forEach(e => {
            eval("this.ask(\'" + e +"\');");
        });
        /*this.ask("Name");
        this.ask("Phone");
        this.ask("Email");*/
    }
}
module.exports = User;