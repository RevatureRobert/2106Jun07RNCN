"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilTableExists = exports.waitForTableExists = void 0;
const DescribeTableCommand_1 = require("../commands/DescribeTableCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeTableCommand_1.DescribeTableCommand(input));
        reason = result;
        try {
            let returnComparator = () => {
                return result.Table.TableStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_1.WaiterState.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.RETRY, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilTableExists instead. waitForTableExists does not throw error in non-success cases.
 */
const waitForTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForTableExists = waitForTableExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTableCommand for polling.
 */
const waitUntilTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilTableExists = waitUntilTableExists;
//# sourceMappingURL=waitForTableExists.js.map