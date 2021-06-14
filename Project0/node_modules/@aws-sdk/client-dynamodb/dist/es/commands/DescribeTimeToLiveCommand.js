import { __extends } from "tslib";
import { DescribeTimeToLiveInput, DescribeTimeToLiveOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeTimeToLiveCommand, serializeAws_json1_0DescribeTimeToLiveCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gives a description of the Time to Live (TTL) status on the specified table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeTimeToLiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTimeToLiveCommandInput} for command's `input` shape.
 * @see {@link DescribeTimeToLiveCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTimeToLiveCommand = /** @class */ (function (_super) {
    __extends(DescribeTimeToLiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTimeToLiveCommand(input) {
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
    DescribeTimeToLiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeTimeToLiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTimeToLiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTimeToLiveOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTimeToLiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeTimeToLiveCommand(input, context);
    };
    DescribeTimeToLiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeTimeToLiveCommand(output, context);
    };
    return DescribeTimeToLiveCommand;
}($Command));
export { DescribeTimeToLiveCommand };
//# sourceMappingURL=DescribeTimeToLiveCommand.js.map