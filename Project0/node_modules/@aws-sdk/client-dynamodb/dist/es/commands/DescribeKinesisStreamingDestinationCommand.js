import { __extends } from "tslib";
import { DescribeKinesisStreamingDestinationInput, DescribeKinesisStreamingDestinationOutput, } from "../models/models_0";
import { deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand, serializeAws_json1_0DescribeKinesisStreamingDestinationCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeKinesisStreamingDestinationCommand = /** @class */ (function (_super) {
    __extends(DescribeKinesisStreamingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeKinesisStreamingDestinationCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeKinesisStreamingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeKinesisStreamingDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeKinesisStreamingDestinationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeKinesisStreamingDestinationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeKinesisStreamingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeKinesisStreamingDestinationCommand(input, context);
    };
    DescribeKinesisStreamingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand(output, context);
    };
    return DescribeKinesisStreamingDestinationCommand;
}($Command));
export { DescribeKinesisStreamingDestinationCommand };
//# sourceMappingURL=DescribeKinesisStreamingDestinationCommand.js.map