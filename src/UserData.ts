import prompt from "prompt";
import {Validator} from "./PromptTypes";
import Address from "./Address";

class UserProperties implements prompt.Properties{

    [name: string]: any;
    name: string = "";
    phoneNumber: string = "";
    other: string = "";
    address: Address | null = null;

}

// "create an object that can hold the users name, address, phone number, and other personal information."
export default class UserData{

    private properties: UserProperties | null = null;

    constructor(callBack: Function){
        // "take user input from the console to update the object."
        prompt.get([

            <Validator>{

                name: "name",
                description: "Please enter your name:",
                pattern: /.+/,
                message: "Name must not be blank.",
                required: true

            },

            <Validator>{

                name: "phoneNumber",
                description: "Please enter your phone number:",
                // Allows phone numbers with or without '-' between the area codes and chunks, with or without a single digit national code,
                // with or without a preceding '+', and with or without '()' around the area code.
                pattern: /^[0-9]?[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g,
                message: "Please enter a valid phone number with an area code, but without an extension.",
                required: true

            },

            <Validator>{

                name: "other",
                description: "Please enter any other personal information, or just press enter if none:"

            }

        ], (err, result) => {

            if(err)
                return console.error(err);

            const props = this.properties = result as UserProperties;

            new Address((address: Address) => {
                // This is gross, but I didn't structure this originally thinking I'd have to use callbacks like this.
                props.address = address;
                // Apparently node can't block the main thread on console input, or prompt just decided not to.
                // Either way, we can only get concurrency in callbacks.
                callBack(this);

            });

        });

    }

    toString(){

        const props = this.properties || new UserProperties();

        return `${props.name} living at ${props.address} whose phone number is ${props.phoneNumber}${props.other ? ` and notes about themselves: ${props.other}` : ""}`;

    }

}
