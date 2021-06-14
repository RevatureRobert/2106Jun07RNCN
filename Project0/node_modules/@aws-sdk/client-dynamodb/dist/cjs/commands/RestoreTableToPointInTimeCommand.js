"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreTableToPointInTimeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class RestoreTableToPointInTimeCommand extends smithy_client_1.Command {
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
        const commandName = "RestoreTableToPointInTimeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RestoreTableToPointInTimeInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RestoreTableToPointInTimeOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0RestoreTableToPointInTimeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0RestoreTableToPointInTimeCommand(output, context);
    }
}
exports.RestoreTableToPointInTimeCommand = RestoreTableToPointInTimeCommand;
//# sourceMappingURL=RestoreTableToPointInTimeCommand.js.map