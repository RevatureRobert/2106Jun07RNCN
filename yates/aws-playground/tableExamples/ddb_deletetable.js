// Import required AWS SDK clients and commands for Node.js
import { DeleteTableCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../libs/ddbClient.js";

// Set the parameters
const params = {
    TableName: "TEST_TABLE",
};

const run = async () => {
    try {
        const data = await ddbClient.send(new DeleteTableCommand(params));
        console.log("Success, table deleted", data);
        return data;
    } catch (err) {
        if (err && err.code === "ResourceNotFoundException") {
            console.log("Error: Table not found");
        } else if (err && err.code === "ResourceInUseException") {
            console.log("Error: Table in use");
        }
    }
};
run();
