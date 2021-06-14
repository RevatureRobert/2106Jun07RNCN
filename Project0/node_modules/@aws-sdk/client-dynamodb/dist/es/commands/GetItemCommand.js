import { __extends } from "tslib";
import { GetItemInput, GetItemOutput } from "../models/models_0";
import { deserializeAws_json1_0GetItemCommand, serializeAws_json1_0GetItemCommand } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>GetItem</code> operation returns a set of attributes for the item with the given primary
 *           key. If there is no matching item, <code>GetItem</code> does not return any data and there will be no <code>Item</code> element in the response.</p>
 *          <p>
 *             <code>GetItem</code> provides an eventually consistent read by default. If your application
 *       requires a strongly consistent read, set <code>ConsistentRead</code> to <code>true</code>. Although
 *       a strongly consistent read might take more time than an eventually consistent read, it always
 *       returns the last updated value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, GetItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new GetItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetItemCommandInput} for command's `input` shape.
 * @see {@link GetItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetItemCommand = /** @class */ (function (_super) {
    __extends(GetItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetItemCommand(input) {
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
    GetItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "GetItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetItemInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetItemOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0GetItemCommand(input, context);
    };
    GetItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0GetItemCommand(output, context);
    };
    return GetItemCommand;
}($Command));
export { GetItemCommand };
//# sourceMappingURL=GetItemCommand.js.map