const User = {
    name: '',
    address: '',
    phoneNumber: '',
    other: [],

    Name: function(obj){
        let newName = obj.CheckName(this.name);
        this.name = newName;
        console.log('New Name: '+ this.name);
    },
    Address: function(obj){
        let newAddress = obj.CheckAddress(this.address);
        this.address = newAddress;
        console.log('New Adress: '+ this.address);
    },
    PhoneNumber: function(obj){
        let newPhoneNum = obj.CheckPhoneNumber(this.phoneNumber);
        this.phoneNumber = newPhoneNum;
        console.log('New Number: ' + this.phoneNumber);
    },
    Other: function(obj){
        let newother = obj.CheckOther(this.other);
        this.other = newother;
        console.log('New Other Info: ' + this.other);
    }
}
module.exports = User;
