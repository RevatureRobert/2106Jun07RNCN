import { QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateQuery(config: DynamoDBPaginationConfiguration, input: QueryCommandInput, ...additionalArguments: any): Paginator<QueryCommandOutput>;
