import prompt from "prompt";
// "keep the functions and objects modularized by keeping them in their own module (files)."
export default class Address{

    #streetNumber;
    #streetName;
    #extension;
    #city;
    #stateCode;
    #zipCode;

    constructor(callBack){

        prompt.get([

            {

                name: "streetNumber",
                description: "Please enter your building number:",
                pattern: /^[0-9]{1,10}$/,
                message: "Please enter a number between one to ten digits long.",
                required: true,
                before: input => Number(input)

            },

            {

                name: "streetName",
                description: "Please enter your street name:",
                pattern: /.+/,
                message: "Street name must not be blank.",
                required: true

            },
            
            {

                name: "extension",
                description: "Please enter an appartment number or other extension, or just press enter if none:"

            },

            {

                name: "city",
                description: "Please enter your city name:",
                pattern: /.+/,
                message: "City name must not be blank.",
                required: true

            },

            {

                name: "stateCode",
                description: "Please enter your state's two letter abbreviation:",
                // Exhaustive list of all US states' and territories' two letter codes, ignoring the case of the input as we reformat it to uppercase below.
                pattern: /^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/ig,
                message: "State code must be valid, two letter abbreviations of state names:",
                required: true,
                before: input => input.toUpperCase()

            },

            {

                name: "zipCode",
                description: "Please ender your zip code (not extended):",
                pattern: /^[0-9]{5}$/,
                message: "Zip code must be your five digit, non-extended zip code.",
                required: true,
                before: input => Number(input)

            }

        ], (err, result) => {

            if(err)
                return console.error(err);

            for(let i in result)
                this[`#${i}`] = result[i];

            callBack(this);

        });

    }

    toString(){
        // Even from in the class, these were undefined unless accessed this way. I haven't used this newer private syntax,
        // but this seems very unintuitive even for JS, is this possibly a bug?
        return `${this["#streetNumber"]} ${this["#streetName"]}${this["#extension"] ? ` (${this["#extension"]})` : ""} ${this["#city"]}, ${this["#stateCode"]}, ${this["#zipCode"]}`;

    }

}