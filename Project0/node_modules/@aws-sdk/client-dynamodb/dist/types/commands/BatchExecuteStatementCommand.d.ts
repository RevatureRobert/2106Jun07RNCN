import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { BatchExecuteStatementInput, BatchExecuteStatementOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchExecuteStatementCommandInput extends BatchExecuteStatementInput {
}
export interface BatchExecuteStatementCommandOutput extends BatchExecuteStatementOutput, __MetadataBearer {
}
/**
 * <p>
 * This operation allows you to perform batch reads and writes on data stored in DynamoDB, using PartiQL.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, BatchExecuteStatementCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new BatchExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link BatchExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchExecuteStatementCommand extends $Command<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: BatchExecuteStatementCommandInput;
    constructor(input: BatchExecuteStatementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput>;
    private serialize;
    private deserialize;
}
