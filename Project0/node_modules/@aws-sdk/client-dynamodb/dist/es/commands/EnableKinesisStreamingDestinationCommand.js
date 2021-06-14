import { __extends } from "tslib";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0";
import { deserializeAws_json1_0EnableKinesisStreamingDestinationCommand, serializeAws_json1_0EnableKinesisStreamingDestinationCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts table data replication to the specified Kinesis data stream at a timestamp chosen
 *             during the enable workflow. If this operation doesn't return results immediately, use
 *             DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is
 *             ACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, EnableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, EnableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new EnableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link EnableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableKinesisStreamingDestinationCommand = /** @class */ (function (_super) {
    __extends(EnableKinesisStreamingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableKinesisStreamingDestinationCommand(input) {
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
    EnableKinesisStreamingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "EnableKinesisStreamingDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: KinesisStreamingDestinationInput.filterSensitiveLog,
            outputFilterSensitiveLog: KinesisStreamingDestinationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableKinesisStreamingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0EnableKinesisStreamingDestinationCommand(input, context);
    };
    EnableKinesisStreamingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0EnableKinesisStreamingDestinationCommand(output, context);
    };
    return EnableKinesisStreamingDestinationCommand;
}($Command));
export { EnableKinesisStreamingDestinationCommand };
//# sourceMappingURL=EnableKinesisStreamingDestinationCommand.js.map