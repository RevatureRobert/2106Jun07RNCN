"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListContributorInsights = void 0;
const DynamoDB_1 = require("../DynamoDB");
const DynamoDBClient_1 = require("../DynamoDBClient");
const ListContributorInsightsCommand_1 = require("../commands/ListContributorInsightsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListContributorInsightsCommand_1.ListContributorInsightsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listContributorInsights(input, ...args);
};
async function* paginateListContributorInsights(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
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
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListContributorInsights = paginateListContributorInsights;
//# sourceMappingURL=ListContributorInsightsPaginator.js.map