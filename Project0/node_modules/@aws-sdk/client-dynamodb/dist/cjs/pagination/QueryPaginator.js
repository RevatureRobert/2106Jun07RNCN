"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateQuery = void 0;
const DynamoDB_1 = require("../DynamoDB");
const DynamoDBClient_1 = require("../DynamoDBClient");
const QueryCommand_1 = require("../commands/QueryCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new QueryCommand_1.QueryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.query(input, ...args);
};
async function* paginateQuery(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.ExclusiveStartKey
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.ExclusiveStartKey = token;
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
        token = page.LastEvaluatedKey;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateQuery = paginateQuery;
//# sourceMappingURL=QueryPaginator.js.map