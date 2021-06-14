import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ExecuteTransactionInput, ExecuteTransactionOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExecuteTransactionCommandInput extends ExecuteTransactionInput {
}
export interface ExecuteTransactionCommandOutput extends ExecuteTransactionOutput, __MetadataBearer {
}
/**
 * <p>
 * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteTransactionCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteTransactionCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExecuteTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteTransactionCommandInput} for command's `input` shape.
 * @see {@link ExecuteTransactionCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExecuteTransactionCommand extends $Command<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ExecuteTransactionCommandInput;
    constructor(input: ExecuteTransactionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput>;
    private serialize;
    private deserialize;
}
