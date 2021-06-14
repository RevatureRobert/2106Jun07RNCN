import { __extends } from "tslib";
import { UpdateGlobalTableSettingsInput, UpdateGlobalTableSettingsOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateGlobalTableSettingsCommand, serializeAws_json1_0UpdateGlobalTableSettingsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates settings for a global table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGlobalTableSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateGlobalTableSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGlobalTableSettingsCommand(input) {
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
    UpdateGlobalTableSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateGlobalTableSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGlobalTableSettingsInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGlobalTableSettingsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGlobalTableSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateGlobalTableSettingsCommand(input, context);
    };
    UpdateGlobalTableSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateGlobalTableSettingsCommand(output, context);
    };
    return UpdateGlobalTableSettingsCommand;
}($Command));
export { UpdateGlobalTableSettingsCommand };
//# sourceMappingURL=UpdateGlobalTableSettingsCommand.js.map