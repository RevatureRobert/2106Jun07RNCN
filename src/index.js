import UserData from "./UserData.js";

const lastInputs = [];
const exitCommand = ".exit\r";

const users = [];

// "and should continue to run until the user decides to stop."
process.stdin.addListener("data", data => {
    // Prompt sets stdin to notify us of every character input, so we need to keep track ourselves.
    lastInputs.push(data.toString());

    while(lastInputs.length > exitCommand.length)
        lastInputs.shift();

    if(lastInputs.join("") === exitCommand){

        console.log("\nUsers entered in this session:");
        users.forEach(user => console.log(user.toString()));

        process.exit();

    }
    
});

const onResult = userData => {

    if(userData){
    
        users.push(userData);
        console.log("Received user data: " + userData);

    }

    console.log("Enter \".exit\" at any time to leave.");

    new UserData(onResult);

}
// I wonder how many times I'd need to enter data into this to cause a stack overflow in V8.
onResult();