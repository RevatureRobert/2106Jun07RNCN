const personnel = require("./personnel.cjs");
const prompt = require("prompt");

console.log("Welcome to the personnel detailer. Let's get started.");

const initialSchema = {
    properties: {
        name: {
            description: "Please enter your full name:",
            required: true
        },
        address: {
            description: "Please enter your address:",
            required: true
        },
        phone: {
            description: "Please enter your phone number:",
            required: true
        },
        note: {
            description: "Please enter a note to add to your account:",
            required: true
        }
    }
};

const querySchema = {
    properties: {
        query: {
            description: ">"
        }
    }
}

prompt.message = "";
prompt.delimiter = "";

prompt.start();
prompt.get(initialSchema, StartProgram);

async function StartProgram (err, result) {
    personnel.Create(result.name, result.address, result.phone, result.note);
    console.log("Excellent, thank you. Here is what you entered:");
    console.log(personnel.person);
    console.log("You may now use the following commands:");
    console.log("create - creates an entirely new personnel file.");
    console.log("update  [property]  [new value] - updates a given property in your file.");
    console.log("add  [item] - adds an item to the extras section in your file.");
    console.log("remove  [index] - removes the specified item from the extras section.");
    console.log("display - displays your file.")
    console.log("exit - quits the program.");
    console.log("Please use two spaces between a command and any options.");

    while (true) {
        const input = await prompt.get(querySchema);
        const query = input.query.split('  ');
        switch (query[0]) {
            case 'create':
                const {name, address, phone, note} = await prompt.get(initialSchema);
                personnel.Create(name, address, phone, note);
                break;
            case 'update':
                personnel.Update(query[1], query[2]);
                break;
            case 'add':
                personnel.AddExtra(query[1]);
                break;
            case 'remove':
                personnel.RemoveExtra(query[1]);
                break;
            case 'display':
                console.log(personnel.person);
                break;
            case 'exit':
                process.exit(0);
            default:
                console.log("'" + query[0] + "' is not a valid command, please try again.");
        }        
    }
}