import { __extends } from "tslib";
import { TagResourceInput } from "../models/models_0";
import { deserializeAws_json1_0TagResourceCommand, serializeAws_json1_0TagResourceCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate a set of tags with an Amazon DynamoDB resource. You can then activate these
 *             user-defined tags so that they appear on the Billing and Cost Management console for
 *             cost allocation tracking. You can call TagResource up to five times per second, per
 *             account. </p>
 *          <p>For an overview on tagging DynamoDB resources, see
 *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
 *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, TagResourceCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, TagResourceCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagResourceCommand = /** @class */ (function (_super) {
    __extends(TagResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TagResourceCommand(input) {
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
    TagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "TagResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TagResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TagResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0TagResourceCommand(input, context);
    };
    TagResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0TagResourceCommand(output, context);
    };
    return TagResourceCommand;
}($Command));
export { TagResourceCommand };
//# sourceMappingURL=TagResourceCommand.js.map