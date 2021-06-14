import { __extends } from "tslib";
import { DeleteTableInput, DeleteTableOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteTableCommand, serializeAws_json1_0DeleteTableCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a
 *         <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until
 *       DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete
 *       it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns
 *       a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a
 *         <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no
 *       error is returned. </p>
 *          <note>
 *             <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and
 *           <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is
 *         complete.</p>
 *          </note>
 *          <p>When you delete a table, any indexes on that table are also deleted.</p>
 *          <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes
 *       into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p>
 *
 *          <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTableCommand = /** @class */ (function (_super) {
    __extends(DeleteTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTableCommand(input) {
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
    DeleteTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DeleteTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTableOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteTableCommand(input, context);
    };
    DeleteTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteTableCommand(output, context);
    };
    return DeleteTableCommand;
}($Command));
export { DeleteTableCommand };
//# sourceMappingURL=DeleteTableCommand.js.map