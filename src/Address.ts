import { assert } from "console";
import prompt from "prompt";
import {Validator} from "./PromptTypes"

class AddressProperties implements prompt.Properties{
    
    [name: string]: any;
    streetNumber: Number = 0;
    streetName: string = "";
    extension: string = "";
    city: string = "";
    stateCode: string = "";
    zipCode: Number = 0;

}

// "keep the functions and objects modularized by keeping them in their own module (files)."
export default class Address{

    private properties: AddressProperties | null = null;

    constructor(callBack: Function){

        prompt.get([

            <Validator>{

                name: "streetNumber",
                description: "Please enter your building number:",
                pattern: /^[0-9]{1,10}$/,
                message: "Please enter a number between one to ten digits long.",
                required: true,
                before: (input: String) => Number(input)

            },

            <Validator>{

                name: "streetName",
                description: "Please enter your street name:",
                pattern: /.+/,
                message: "Street name must not be blank.",
                required: true

            },
            
            <Validator>{

                name: "extension",
                description: "Please enter an appartment number or other extension, or just press enter if none:"

            },

            <Validator>{

                name: "city",
                description: "Please enter your city name:",
                pattern: /.+/,
                message: "City name must not be blank.",
                required: true

            },

            <Validator>{

                name: "stateCode",
                description: "Please enter your state's two letter abbreviation:",
                // Exhaustive list of all US states' and territories' two letter codes, ignoring the case of the input as we reformat it to uppercase below.
                pattern: /^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/ig,
                message: "State code must be valid, two letter abbreviations of state names:",
                required: true,
                before: (input: String) => input.toUpperCase()

            },

            <Validator>{

                name: "zipCode",
                description: "Please ender your zip code (not extended):",
                pattern: /^[0-9]{5}$/,
                message: "Zip code must be your five digit, non-extended zip code.",
                required: true,
                before: (input: String) => Number(input)

            }

        ], (err: any, result: prompt.Properties) => {

            if(err)
                return console.error(err);

            this.properties = result as AddressProperties;

            callBack(this);

        });

    }

    toString(){

        const props = this.properties || new AddressProperties();

        // Even from in the class, these were undefined unless accessed this way. I haven't used this newer private syntax,
        // but this seems very unintuitive even for JS, is this possibly a bug?
        return `${props.streetNumber} ${props.streetName}${props.extension ? ` (${props.extension})` : ""} ${props.city}, ${props.stateCode}, ${props.zipCode}`;

    }

}