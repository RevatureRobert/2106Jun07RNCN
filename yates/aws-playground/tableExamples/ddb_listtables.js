
// Import required AWS SDK clients and commands for Node.js
import { ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { ddbClient } from "../libs/ddbClient.js";

const run = async () => {
    try {
        const data = await ddbClient.send(new ListTablesCommand({}));
        console.log(data.TableNames.join("\n"));
        return data;
    } catch (err) {
        console.error(err);
    }
};
run();
