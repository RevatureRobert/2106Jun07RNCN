import { __extends } from "tslib";
import { ExecuteTransactionInput, ExecuteTransactionOutput } from "../models/models_0";
import { deserializeAws_json1_0ExecuteTransactionCommand, serializeAws_json1_0ExecuteTransactionCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * This operation allows you to perform transactional reads or writes on data stored in DynamoDB, using PartiQL.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteTransactionCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteTransactionCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExecuteTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteTransactionCommandInput} for command's `input` shape.
 * @see {@link ExecuteTransactionCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteTransactionCommand = /** @class */ (function (_super) {
    __extends(ExecuteTransactionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteTransactionCommand(input) {
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
    ExecuteTransactionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ExecuteTransactionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteTransactionInput.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteTransactionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteTransactionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExecuteTransactionCommand(input, context);
    };
    ExecuteTransactionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExecuteTransactionCommand(output, context);
    };
    return ExecuteTransactionCommand;
}($Command));
export { ExecuteTransactionCommand };
//# sourceMappingURL=ExecuteTransactionCommand.js.map