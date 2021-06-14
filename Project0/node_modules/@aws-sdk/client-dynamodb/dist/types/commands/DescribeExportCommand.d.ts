import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeExportInput, DescribeExportOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExportCommandInput extends DescribeExportInput {
}
export interface DescribeExportCommandOutput extends DescribeExportOutput, __MetadataBearer {
}
/**
 * <p>Describes an existing table export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeExportCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeExportCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExportCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExportCommand extends $Command<DescribeExportCommandInput, DescribeExportCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeExportCommandInput;
    constructor(input: DescribeExportCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportCommandInput, DescribeExportCommandOutput>;
    private serialize;
    private deserialize;
}
