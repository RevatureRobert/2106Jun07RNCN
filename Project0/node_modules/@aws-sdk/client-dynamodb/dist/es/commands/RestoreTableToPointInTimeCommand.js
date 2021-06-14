import { __extends } from "tslib";
import { RestoreTableToPointInTimeInput, RestoreTableToPointInTimeOutput } from "../models/models_0";
import { deserializeAws_json1_0RestoreTableToPointInTimeCommand, serializeAws_json1_0RestoreTableToPointInTimeCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restores the specified table to the specified point in time within
 *         <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
 *         You can restore your table to any point in time during the last 35 days.
 *         Any number of users can execute up to 4 concurrent restores (any type of restore) in a given account.
 *       </p>
 *          <p>
 *      When you restore using point in time recovery, DynamoDB restores your table data to the state based on
 *      the selected date and time (day:hour:minute:second) to a new table.
 *      </p>
 *          <p>
 *     Along with data, the following are also included on the new restored table using point in time recovery:
 *     </p>
 *         <ul>
 *             <li>
 *                  <p>Global secondary indexes (GSIs)</p>
 *              </li>
 *             <li>
 *                  <p>Local secondary indexes (LSIs)</p>
 *              </li>
 *             <li>
 *                  <p>Provisioned read and write capacity</p>
 *              </li>
 *             <li>
 *                  <p>Encryption settings</p>
 *                <important>
 *                   <p>
 *                  All these settings come from the current settings of the source table at the time of restore.
 *              </p>
 *                </important>
 *              </li>
 *          </ul>
 *
 *            <p>You must manually set up the following on the restored table:</p>
 *          <ul>
 *             <li>
 *                  <p>Auto scaling policies</p>
 *              </li>
 *             <li>
 *                  <p>IAM policies</p>
 *              </li>
 *             <li>
 *                  <p>Amazon CloudWatch metrics and alarms</p>
 *              </li>
 *             <li>
 *                  <p>Tags</p>
 *              </li>
 *             <li>
 *                  <p>Stream settings</p>
 *              </li>
 *             <li>
 *                  <p>Time to Live (TTL) settings</p>
 *              </li>
 *             <li>
 *                  <p>Point in time recovery settings</p>
 *              </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, RestoreTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, RestoreTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new RestoreTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link RestoreTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestoreTableToPointInTimeCommand = /** @class */ (function (_super) {
    __extends(RestoreTableToPointInTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreTableToPointInTimeCommand(input) {
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
    RestoreTableToPointInTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "RestoreTableToPointInTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreTableToPointInTimeInput.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreTableToPointInTimeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreTableToPointInTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0RestoreTableToPointInTimeCommand(input, context);
    };
    RestoreTableToPointInTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0RestoreTableToPointInTimeCommand(output, context);
    };
    return RestoreTableToPointInTimeCommand;
}($Command));
export { RestoreTableToPointInTimeCommand };
//# sourceMappingURL=RestoreTableToPointInTimeCommand.js.map