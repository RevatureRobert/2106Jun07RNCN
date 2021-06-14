import { __extends } from "tslib";
import { ListExportsInput, ListExportsOutput } from "../models/models_0";
import { deserializeAws_json1_0ListExportsCommand, serializeAws_json1_0ListExportsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists completed exports within the past 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListExportsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListExportsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListExportsCommand = /** @class */ (function (_super) {
    __extends(ListExportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListExportsCommand(input) {
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
    ListExportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ListExportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListExportsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListExportsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListExportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListExportsCommand(input, context);
    };
    ListExportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListExportsCommand(output, context);
    };
    return ListExportsCommand;
}($Command));
export { ListExportsCommand };
//# sourceMappingURL=ListExportsCommand.js.map