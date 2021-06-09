 //new class
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
            }
        this.setOtherInfo=function(info)
            {
                this.otherInfo=info;    
            }
        this.sayName = function ()
            {
                console.log(this.name);
            }
        this.writeAddress = function ()
            {
                console.log(this.address);
            }          
        this.giveNumber = function ()
            {
                console.log(this.phoneNumber);
            }
        this.tellStory = function ()
            {
                console.log(this.otherInfo);
            }          
    

    }
   
    
}
//exports the Person class
module.exports = Person;