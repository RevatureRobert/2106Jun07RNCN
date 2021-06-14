import { __extends } from "tslib";
import { ListTagsOfResourceInput, ListTagsOfResourceOutput } from "../models/models_0";
import { deserializeAws_json1_0ListTagsOfResourceCommand, serializeAws_json1_0ListTagsOfResourceCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all tags on an Amazon DynamoDB resource. You can call ListTagsOfResource up to 10 times per second, per account.</p>
 *          <p>For an overview on tagging DynamoDB resources, see
 *       <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tagging.html">Tagging for DynamoDB</a>
 *       in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTagsOfResourceCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTagsOfResourceCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListTagsOfResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsOfResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsOfResourceCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTagsOfResourceCommand = /** @class */ (function (_super) {
    __extends(ListTagsOfResourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTagsOfResourceCommand(input) {
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
    ListTagsOfResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ListTagsOfResourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTagsOfResourceInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTagsOfResourceOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTagsOfResourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListTagsOfResourceCommand(input, context);
    };
    ListTagsOfResourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListTagsOfResourceCommand(output, context);
    };
    return ListTagsOfResourceCommand;
}($Command));
export { ListTagsOfResourceCommand };
//# sourceMappingURL=ListTagsOfResourceCommand.js.map