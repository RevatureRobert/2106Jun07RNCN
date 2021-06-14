import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ListTablesInput, ListTablesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTablesCommandInput extends ListTablesInput {
}
export interface ListTablesCommandOutput extends ListTablesOutput, __MetadataBearer {
}
/**
 * <p>Returns an array of table names associated with the current account and endpoint. The output
 *       from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table
 *       names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTablesCommand extends $Command<ListTablesCommandInput, ListTablesCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ListTablesCommandInput;
    constructor(input: ListTablesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTablesCommandInput, ListTablesCommandOutput>;
    private serialize;
    private deserialize;
}
