import { __extends } from "tslib";
import { UpdateTimeToLiveInput, UpdateTimeToLiveOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateTimeToLiveCommand, serializeAws_json1_0UpdateTimeToLiveCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>UpdateTimeToLive</code> method enables or disables Time to Live (TTL) for the
 *             specified table. A successful <code>UpdateTimeToLive</code> call returns the current
 *                 <code>TimeToLiveSpecification</code>. It can take up to one hour for the change to
 *             fully process. Any additional <code>UpdateTimeToLive</code> calls for the same table
 *             during this one hour duration result in a <code>ValidationException</code>. </p>
 *          <p>TTL compares the current time in epoch time format to the time stored in the TTL
 *             attribute of an item. If the epoch time value stored in the attribute is less than the
 *             current time, the item is marked as expired and subsequently deleted.</p>
 *         <note>
 *             <p> The epoch time format is the number of seconds elapsed since 12:00:00 AM January 1,
 *                 1970 UTC. </p>
 *         </note>
 *         <p>DynamoDB deletes expired items on a best-effort basis to ensure availability of
 *             throughput for other data operations.
 *         </p>
 *             <important>
 *                 <p>DynamoDB typically deletes expired items within two days of expiration. The exact duration
 *                 within which an item gets deleted after expiration is specific to the
 *                 nature of the workload. Items that have expired and not been deleted will still show up in reads,
 *                     queries, and scans.</p>
 *             </important>
 *         <p>As items are deleted, they are removed from any local secondary index and global
 *             secondary index immediately in the same eventually consistent way as a standard delete
 *             operation.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TTL.html">Time To Live</a> in the Amazon DynamoDB Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTimeToLiveCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTimeToLiveCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTimeToLiveCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTimeToLiveCommandInput} for command's `input` shape.
 * @see {@link UpdateTimeToLiveCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTimeToLiveCommand = /** @class */ (function (_super) {
    __extends(UpdateTimeToLiveCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTimeToLiveCommand(input) {
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
    UpdateTimeToLiveCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateTimeToLiveCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTimeToLiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTimeToLiveOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTimeToLiveCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateTimeToLiveCommand(input, context);
    };
    UpdateTimeToLiveCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateTimeToLiveCommand(output, context);
    };
    return UpdateTimeToLiveCommand;
}($Command));
export { UpdateTimeToLiveCommand };
//# sourceMappingURL=UpdateTimeToLiveCommand.js.map