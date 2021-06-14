"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTimeToLiveCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class UpdateTimeToLiveCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "UpdateTimeToLiveCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateTimeToLiveInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateTimeToLiveOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateTimeToLiveCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateTimeToLiveCommand(output, context);
    }
}
exports.UpdateTimeToLiveCommand = UpdateTimeToLiveCommand;
//# sourceMappingURL=UpdateTimeToLiveCommand.js.map