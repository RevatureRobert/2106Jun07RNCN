import { __extends } from "tslib";
import { UpdateGlobalTableInput, UpdateGlobalTableOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateGlobalTableCommand, serializeAws_json1_0UpdateGlobalTableCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or removes replicas in the specified global table. The global table must already
 *             exist to be able to use this operation. Any replica to be added must be empty, have the
 *             same name as the global table, have the same key schema, have DynamoDB Streams enabled,
 *             and have the same provisioned and maximum write capacity units.</p>
 *         <note>
 *             <p>Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in
 *                 a single request, for simplicity we recommend that you issue separate requests for
 *                 adding or removing replicas.</p>
 *          </note>
 *        	<p>
 *         If global secondary indexes are specified, then the following conditions must also be met:
 *         </p>
 *         <ul>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same name.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same hash key and sort key (if present).
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same provisioned and maximum write capacity units.
 *             </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateGlobalTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalTableCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGlobalTableCommand = /** @class */ (function (_super) {
    __extends(UpdateGlobalTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGlobalTableCommand(input) {
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
    UpdateGlobalTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateGlobalTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGlobalTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGlobalTableOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGlobalTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateGlobalTableCommand(input, context);
    };
    UpdateGlobalTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateGlobalTableCommand(output, context);
    };
    return UpdateGlobalTableCommand;
}($Command));
export { UpdateGlobalTableCommand };
//# sourceMappingURL=UpdateGlobalTableCommand.js.map