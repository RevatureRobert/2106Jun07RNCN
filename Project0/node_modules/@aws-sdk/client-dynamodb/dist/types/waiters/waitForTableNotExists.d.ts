import { DynamoDBClient } from "../DynamoDBClient";
import { DescribeTableCommandInput } from "../commands/DescribeTableCommand";
import { WaiterConfiguration, WaiterResult } from "@aws-sdk/util-waiter";
/**
 *
 *  @deprecated Use waitUntilTableNotExists instead. waitForTableNotExists does not throw error in non-success cases.
 */
export declare const waitForTableNotExists: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeTableCommandInput) => Promise<WaiterResult>;
/**
 *
 *  @param params - Waiter configuration options.
 *  @param input - The input to DescribeTableCommand for polling.
 */
export declare const waitUntilTableNotExists: (params: WaiterConfiguration<DynamoDBClient>, input: DescribeTableCommandInput) => Promise<WaiterResult>;
