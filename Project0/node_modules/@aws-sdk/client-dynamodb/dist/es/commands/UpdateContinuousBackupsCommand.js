import { __extends } from "tslib";
import { UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateContinuousBackupsCommand, serializeAws_json1_0UpdateContinuousBackupsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table.
 *       A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>.
 *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
 *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
 *          <p>
 *       Once continuous backups and point in time recovery are enabled, you can restore to any point in time within
 *       <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
 *      </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
 *             You can restore your table to any point in time during the last 35 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContinuousBackupsCommand = /** @class */ (function (_super) {
    __extends(UpdateContinuousBackupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContinuousBackupsCommand(input) {
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
    UpdateContinuousBackupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateContinuousBackupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContinuousBackupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContinuousBackupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContinuousBackupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateContinuousBackupsCommand(input, context);
    };
    UpdateContinuousBackupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateContinuousBackupsCommand(output, context);
    };
    return UpdateContinuousBackupsCommand;
}($Command));
export { UpdateContinuousBackupsCommand };
//# sourceMappingURL=UpdateContinuousBackupsCommand.js.map