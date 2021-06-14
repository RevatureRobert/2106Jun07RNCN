import { __extends } from "tslib";
import { ExecuteStatementInput, ExecuteStatementOutput } from "../models/models_0";
import { deserializeAws_json1_0ExecuteStatementCommand, serializeAws_json1_0ExecuteStatementCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * This operation allows you to perform reads and singleton writes on data stored in DynamoDB, using PartiQL.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExecuteStatementCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExecuteStatementCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExecuteStatementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteStatementCommandInput} for command's `input` shape.
 * @see {@link ExecuteStatementCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExecuteStatementCommand = /** @class */ (function (_super) {
    __extends(ExecuteStatementCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExecuteStatementCommand(input) {
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
    ExecuteStatementCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ExecuteStatementCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExecuteStatementInput.filterSensitiveLog,
            outputFilterSensitiveLog: ExecuteStatementOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExecuteStatementCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExecuteStatementCommand(input, context);
    };
    ExecuteStatementCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExecuteStatementCommand(output, context);
    };
    return ExecuteStatementCommand;
}($Command));
export { ExecuteStatementCommand };
//# sourceMappingURL=ExecuteStatementCommand.js.map