//-----------------------------------------------------------------------------
//Class used to keep track of user-entered information
module.exports.PersonalInfo = class PersonalInfo {
    constructor(name, address, phoneNumber, ssn, momsCreditCardNumber){
        _name: name;
        _address: address;
        _phoneNumber: phoneNumber;
        _ssn: ssn;
        _momsCreditCardNumber: momsCreditCardNumber;
    }

    //Getters
    get_name(){
        return this._firstName;
    }
    get_address(){
        return this._address();
    }
    get_phoneNumber(){
        return this._phoneNumber();
    }
    get_ssn(){
        return this._ssn;
    }
    get_momsCreditCardNumber(){
        return this._momsCreditCardNumber;
    }

    //Setters
    set_name(name){
        this._firstName = name;
    }
    set_address(address){
        this._address = address;
    }
    set_phoneNumber(phoneNumber){
        this._phoneNumber = phoneNumber;
    }
    set_ssn(ssn){
        this._ssn = ssn;
    }
    set_momsCreditCardNumber(creditCardNumber){
        this._momsCreditCardNumber = creditCardNumber;
    }
}