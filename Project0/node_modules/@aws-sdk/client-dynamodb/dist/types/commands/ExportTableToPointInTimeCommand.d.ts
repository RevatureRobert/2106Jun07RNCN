import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { ExportTableToPointInTimeInput, ExportTableToPointInTimeOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportTableToPointInTimeCommandInput extends ExportTableToPointInTimeInput {
}
export interface ExportTableToPointInTimeCommandOutput extends ExportTableToPointInTimeOutput, __MetadataBearer {
}
/**
 * <p>Exports table data to an S3 bucket. The table must have point in time recovery
 *             enabled, and you can export data from any time within the point in time recovery
 *             window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExportTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExportTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExportTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link ExportTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportTableToPointInTimeCommand extends $Command<ExportTableToPointInTimeCommandInput, ExportTableToPointInTimeCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: ExportTableToPointInTimeCommandInput;
    constructor(input: ExportTableToPointInTimeCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportTableToPointInTimeCommandInput, ExportTableToPointInTimeCommandOutput>;
    private serialize;
    private deserialize;
}
