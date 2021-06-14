"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeLimitsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns the current provisioned-capacity quotas for your AWS account in a Region, both
 *             for the Region as a whole and for any one DynamoDB table that you create there.</p>
 *          <p>When you establish an AWS account, the account has initial quotas on the maximum read
 *             capacity units and write capacity units that you can provision across all of your
 *             DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you
 *             create a table there. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html">Service, Account, and Table
 *                 Quotas</a> page in the <i>Amazon DynamoDB Developer
 *             Guide</i>.</p>
 *
 *          <p>Although you can increase these quotas by filing a case at <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>, obtaining the increase is not
 *             instantaneous. The <code>DescribeLimits</code> action lets you write code to compare the
 *             capacity you are currently using to those quotas imposed by your account so that you
 *             have enough time to apply for an increase before you hit a quota.</p>
 *
 *          <p>For example, you could use one of the AWS SDKs to do the following:</p>
 *
 *          <ol>
 *             <li>
 *                <p>Call <code>DescribeLimits</code> for a particular Region to obtain your current
 *                     account quotas on provisioned capacity there.</p>
 *             </li>
 *             <li>
 *                <p>Create a variable to hold the aggregate read capacity units provisioned for all
 *                     your tables in that Region, and one to hold the aggregate write capacity units.
 *                     Zero them both.</p>
 *             </li>
 *             <li>
 *                <p>Call <code>ListTables</code> to obtain a list of all your DynamoDB tables.</p>
 *             </li>
 *             <li>
 *                <p>For each table name listed by <code>ListTables</code>, do the following:</p>
 *                <ul>
 *                   <li>
 *                      <p>Call <code>DescribeTable</code> with the table name.</p>
 *                   </li>
 *                   <li>
 *                      <p>Use the data returned by <code>DescribeTable</code> to add the read capacity units and write capacity
 *             units provisioned for the table itself to your variables.</p>
 *                   </li>
 *                   <li>
 *                      <p>If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Report the account quotas for that Region returned by <code>DescribeLimits</code>, along with
 *                     the total current provisioned capacity levels you have calculated.</p>
 *             </li>
 *          </ol>
 *
 *          <p>This will let you see whether you are getting close to your account-level quotas.</p>
 *          <p>The per-table quotas apply only when you are creating a new table. They restrict the sum
 *             of the provisioned capacity of the new table itself and all its global secondary
 *             indexes.</p>
 *          <p>For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned
 *             capacity extremely rapidly, but the only quota that applies is that the aggregate
 *             provisioned capacity over all your tables and GSIs cannot exceed either of the
 *             per-account quotas.</p>
 *          <note>
 *             <p>
 *                <code>DescribeLimits</code> should only be called periodically. You can expect throttling
 *         errors if you call it more than once in a minute.</p>
 *          </note>
 *          <p>The <code>DescribeLimits</code> Request element has no content.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeLimitsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeLimitsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeLimitsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeLimitsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeLimitsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeLimitsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DescribeLimitsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DescribeLimitsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0DescribeLimitsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0DescribeLimitsCommand(output, context);
    }
}
exports.DescribeLimitsCommand = DescribeLimitsCommand;
//# sourceMappingURL=DescribeLimitsCommand.js.map