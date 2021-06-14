import { __extends } from "tslib";
import { UpdateItemInput, UpdateItemOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateItemCommand, serializeAws_json1_0UpdateItemCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Edits an existing item's attributes, or adds a new item to the table if it does not already exist. You can put, delete, or add attribute values. You can also perform a conditional update on an existing item (insert a new attribute name-value pair if it doesn't exist, or replace an existing name-value pair if it has certain expected attribute values).</p>
 *          <p>You can also return the item's attribute values in the same <code>UpdateItem</code>
 *       operation using the <code>ReturnValues</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateItemCommandInput} for command's `input` shape.
 * @see {@link UpdateItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateItemCommand = /** @class */ (function (_super) {
    __extends(UpdateItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateItemCommand(input) {
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
    UpdateItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateItemInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateItemOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateItemCommand(input, context);
    };
    UpdateItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateItemCommand(output, context);
    };
    return UpdateItemCommand;
}($Command));
export { UpdateItemCommand };
//# sourceMappingURL=UpdateItemCommand.js.map