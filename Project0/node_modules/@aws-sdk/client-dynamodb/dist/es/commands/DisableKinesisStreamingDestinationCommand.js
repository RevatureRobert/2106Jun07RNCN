import { __extends } from "tslib";
import { KinesisStreamingDestinationInput, KinesisStreamingDestinationOutput } from "../models/models_0";
import { deserializeAws_json1_0DisableKinesisStreamingDestinationCommand, serializeAws_json1_0DisableKinesisStreamingDestinationCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops replication from the DynamoDB table to the Kinesis data stream. This is done
 *             without deleting either of the resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DisableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DisableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DisableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link DisableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableKinesisStreamingDestinationCommand = /** @class */ (function (_super) {
    __extends(DisableKinesisStreamingDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableKinesisStreamingDestinationCommand(input) {
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
    DisableKinesisStreamingDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DisableKinesisStreamingDestinationCommand";
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
    DisableKinesisStreamingDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DisableKinesisStreamingDestinationCommand(input, context);
    };
    DisableKinesisStreamingDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DisableKinesisStreamingDestinationCommand(output, context);
    };
    return DisableKinesisStreamingDestinationCommand;
}($Command));
export { DisableKinesisStreamingDestinationCommand };
//# sourceMappingURL=DisableKinesisStreamingDestinationCommand.js.map