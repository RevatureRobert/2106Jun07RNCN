import { __extends } from "tslib";
import { ListGlobalTablesInput, ListGlobalTablesOutput } from "../models/models_0";
import { deserializeAws_json1_0ListGlobalTablesCommand, serializeAws_json1_0ListGlobalTablesCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all global tables that have a replica in the specified Region.</p>
 *           <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListGlobalTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListGlobalTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGlobalTablesCommandInput} for command's `input` shape.
 * @see {@link ListGlobalTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGlobalTablesCommand = /** @class */ (function (_super) {
    __extends(ListGlobalTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGlobalTablesCommand(input) {
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
    ListGlobalTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ListGlobalTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGlobalTablesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListGlobalTablesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGlobalTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListGlobalTablesCommand(input, context);
    };
    ListGlobalTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListGlobalTablesCommand(output, context);
    };
    return ListGlobalTablesCommand;
}($Command));
export { ListGlobalTablesCommand };
//# sourceMappingURL=ListGlobalTablesCommand.js.map