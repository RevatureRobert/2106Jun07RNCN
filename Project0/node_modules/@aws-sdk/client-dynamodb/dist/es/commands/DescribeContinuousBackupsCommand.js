import { __extends } from "tslib";
import { DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeContinuousBackupsCommand, serializeAws_json1_0DescribeContinuousBackupsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks the status of continuous backups and point in time recovery on the specified table.
 *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
 *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
 *          <p> After continuous backups and point in time recovery are enabled, you can restore to any
 *             point in time within <code>EarliestRestorableDateTime</code> and
 *                 <code>LatestRestorableDateTime</code>. </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time. You can restore your table to any point
 *        in time during the last 35 days.
 *      </p>
 *          <p>You can call <code>DescribeContinuousBackups</code> at a maximum rate of 10 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContinuousBackupsCommand = /** @class */ (function (_super) {
    __extends(DescribeContinuousBackupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContinuousBackupsCommand(input) {
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
    DescribeContinuousBackupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeContinuousBackupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContinuousBackupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContinuousBackupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContinuousBackupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeContinuousBackupsCommand(input, context);
    };
    DescribeContinuousBackupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeContinuousBackupsCommand(output, context);
    };
    return DescribeContinuousBackupsCommand;
}($Command));
export { DescribeContinuousBackupsCommand };
//# sourceMappingURL=DescribeContinuousBackupsCommand.js.map