class Person {

    constructor(name, address, phone){
        this.#name = name;
        this.#address = address;
        this.#phone = phone;
    }
    #name;
    #address;
    #phone;
    #moreInfo = [];

    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }

    get address(){
        return this.#address;
    }

    set address(address){
        this.#address = address;
    }

    get phone(){
        return this.#phone;
    }

    set phone(phone){
        this.#phone = phone;
    }

    get moreInfo(){
        return this.#moreInfo;
    }

    set moreInfo(newInfo){
        this.#moreInfo = newInfo;
    }


    




}
module.exports = Person;
