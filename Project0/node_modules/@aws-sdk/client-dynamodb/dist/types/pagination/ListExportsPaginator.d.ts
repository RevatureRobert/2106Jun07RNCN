import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListExports(config: DynamoDBPaginationConfiguration, input: ListExportsCommandInput, ...additionalArguments: any): Paginator<ListExportsCommandOutput>;
