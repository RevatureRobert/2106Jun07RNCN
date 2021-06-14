import { ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateScan(config: DynamoDBPaginationConfiguration, input: ScanCommandInput, ...additionalArguments: any): Paginator<ScanCommandOutput>;
