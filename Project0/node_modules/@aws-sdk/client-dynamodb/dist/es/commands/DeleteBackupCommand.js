import { __extends } from "tslib";
import { DeleteBackupInput, DeleteBackupOutput } from "../models/models_0";
import { deserializeAws_json1_0DeleteBackupCommand, serializeAws_json1_0DeleteBackupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an existing backup of a table.</p>
 *          <p>You can call <code>DeleteBackup</code> at a maximum rate of 10 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBackupCommand = /** @class */ (function (_super) {
    __extends(DeleteBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBackupCommand(input) {
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
    DeleteBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DeleteBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBackupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteBackupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DeleteBackupCommand(input, context);
    };
    DeleteBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DeleteBackupCommand(output, context);
    };
    return DeleteBackupCommand;
}($Command));
export { DeleteBackupCommand };
//# sourceMappingURL=DeleteBackupCommand.js.map