import { __extends } from "tslib";
import { DeleteItemInput, DeleteItemOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteItemCommand, serializeAws_json1_0DeleteItemCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a single item in a table by primary key. You can perform a conditional delete operation that deletes the item if it exists, or if it has an expected attribute value.</p>
 *          <p>In addition to deleting an item, you can also return the item's attribute values in the same
 *       operation, using the <code>ReturnValues</code> parameter.</p>
 *          <p>Unless you specify conditions, the <code>DeleteItem</code> is an idempotent operation; running it
 *       multiple times on the same item or attribute does <i>not</i> result in an error response.</p>
 *          <p>Conditional deletes are useful for deleting items only if specific conditions are met. If those conditions are met, DynamoDB performs the delete. Otherwise, the item is not deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteItemCommandInput} for command's `input` shape.
 * @see {@link DeleteItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteItemCommand = /** @class */ (function (_super) {
    __extends(DeleteItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteItemCommand(input) {
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
    DeleteItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DeleteItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteItemInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteItemOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteItemCommand(input, context);
    };
    DeleteItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteItemCommand(output, context);
    };
    return DeleteItemCommand;
}($Command));
export { DeleteItemCommand };
//# sourceMappingURL=DeleteItemCommand.js.map