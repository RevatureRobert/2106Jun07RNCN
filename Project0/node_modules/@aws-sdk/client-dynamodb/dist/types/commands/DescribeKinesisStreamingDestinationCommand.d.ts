import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeKinesisStreamingDestinationInput, DescribeKinesisStreamingDestinationOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeKinesisStreamingDestinationCommandInput extends DescribeKinesisStreamingDestinationInput {
}
export interface DescribeKinesisStreamingDestinationCommandOutput extends DescribeKinesisStreamingDestinationOutput, __MetadataBearer {
}
/**
 * <p>Returns information about the status of Kinesis streaming.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribeKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeKinesisStreamingDestinationCommand extends $Command<DescribeKinesisStreamingDestinationCommandInput, DescribeKinesisStreamingDestinationCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeKinesisStreamingDestinationCommandInput;
    constructor(input: DescribeKinesisStreamingDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeKinesisStreamingDestinationCommandInput, DescribeKinesisStreamingDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
