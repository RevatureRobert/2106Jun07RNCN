import { __extends } from "tslib";
import { UpdateTableInput, UpdateTableOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateTableCommand, serializeAws_json1_0UpdateTableCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p>
 *          <p>You can only perform one of the following operations at once:</p>
 *          <ul>
 *             <li>
 *                <p>Modify the provisioned throughput settings of the table.</p>
 *             </li>
 *             <li>
 *                <p>Enable or disable DynamoDB Streams on the table.</p>
 *             </li>
 *             <li>
 *                <p>Remove a global secondary index from the table.</p>
 *             </li>
 *             <li>
 *                <p>Create a new global secondary index on the table. After the index begins
 *                     backfilling, you can use <code>UpdateTable</code> to perform other
 *                     operations.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status
 *       changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>,
 *       you cannot issue another <code>UpdateTable</code> request. When the table returns to the
 *         <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTableCommand = /** @class */ (function (_super) {
    __extends(UpdateTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTableCommand(input) {
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
    UpdateTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTableOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateTableCommand(input, context);
    };
    UpdateTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateTableCommand(output, context);
    };
    return UpdateTableCommand;
}($Command));
export { UpdateTableCommand };
//# sourceMappingURL=UpdateTableCommand.js.map