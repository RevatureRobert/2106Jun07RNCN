"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitUntilTableNotExists = exports.waitForTableNotExists = void 0;
const DescribeTableCommand_1 = require("../commands/DescribeTableCommand");
const util_waiter_1 = require("@aws-sdk/util-waiter");
const checkState = async (client, input) => {
    let reason;
    try {
        let result = await client.send(new DescribeTableCommand_1.DescribeTableCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_1.WaiterState.SUCCESS, reason };
        }
    }
    return { state: util_waiter_1.WaiterState.RETRY, reason };
};
/**
 *
 *  @deprecated Use waitUntilTableNotExists instead. waitForTableNotExists does not throw error in non-success cases.
 */
const waitForTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
};
exports.waitForTableNotExists = waitForTableNotExists;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTableCommand for polling.
 */
const waitUntilTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await util_waiter_1.createWaiter({ ...serviceDefaults, ...params }, input, checkState);
    return util_waiter_1.checkExceptions(result);
};
exports.waitUntilTableNotExists = waitUntilTableNotExists;
//# sourceMappingURL=waitForTableNotExists.js.map