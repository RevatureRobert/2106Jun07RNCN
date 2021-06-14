import { __extends } from "tslib";
import { ListTablesInput, ListTablesOutput } from "../models/models_0";
import { deserializeAws_json1_0ListTablesCommand, serializeAws_json1_0ListTablesCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of table names associated with the current account and endpoint. The output
 *       from <code>ListTables</code> is paginated, with each page returning a maximum of 100 table
 *       names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListTablesCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListTablesCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListTablesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTablesCommandInput} for command's `input` shape.
 * @see {@link ListTablesCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTablesCommand = /** @class */ (function (_super) {
    __extends(ListTablesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTablesCommand(input) {
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
    ListTablesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ListTablesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTablesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTablesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTablesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListTablesCommand(input, context);
    };
    ListTablesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListTablesCommand(output, context);
    };
    return ListTablesCommand;
}($Command));
export { ListTablesCommand };
//# sourceMappingURL=ListTablesCommand.js.map