"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListTables = void 0;
const DynamoDB_1 = require("../DynamoDB");
const DynamoDBClient_1 = require("../DynamoDBClient");
const ListTablesCommand_1 = require("../commands/ListTablesCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListTablesCommand_1.ListTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listTables(input, ...args);
};
async function* paginateListTables(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.ExclusiveStartTableName
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartTableName = token;
        input["Limit"] = config.pageSize;
        if (config.client instanceof DynamoDB_1.DynamoDB) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof DynamoDBClient_1.DynamoDBClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
        }
        yield page;
        token = page.LastEvaluatedTableName;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListTables = paginateListTables;
//# sourceMappingURL=ListTablesPaginator.js.map