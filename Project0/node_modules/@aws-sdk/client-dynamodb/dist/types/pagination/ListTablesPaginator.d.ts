import { ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListTables(config: DynamoDBPaginationConfiguration, input: ListTablesCommandInput, ...additionalArguments: any): Paginator<ListTablesCommandOutput>;
