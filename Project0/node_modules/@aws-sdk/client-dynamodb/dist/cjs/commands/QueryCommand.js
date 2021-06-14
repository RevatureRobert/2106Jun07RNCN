"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The <code>Query</code> operation finds items based on primary key values.
 *             You can query any table or secondary index that has a composite primary key (a partition
 *             key and a sort key).
 *         </p>
 *         <p>Use the <code>KeyConditionExpression</code> parameter to provide a specific value
 *             for the partition key. The <code>Query</code> operation will return all of the items
 *             from the table or index with that partition key value. You can optionally narrow the
 *             scope of the <code>Query</code> operation by specifying a sort key value and a
 *             comparison operator in <code>KeyConditionExpression</code>. To further refine the <code>Query</code> results,
 *             you can optionally provide a <code>FilterExpression</code>. A <code>FilterExpression</code> determines which items
 *             within the results should be returned to you. All of the other results are discarded.
 *         </p>
 *         <p>
 *             A <code>Query</code> operation always returns a result set. If no matching items are found,
 *             the result set will be empty. Queries that do not return results consume the minimum number of
 *             read capacity units for that type of read operation.
 *         </p>
 *         <note>
 *             <p>
 *                 DynamoDB calculates the number of read capacity units consumed based on item size,
 *                 not on the amount of data that is returned to an application. The number of capacity
 *                 units consumed will be the same whether you request all of the attributes (the default behavior)
 *                 or just some of them (using a projection expression). The number will also be the same
 *                 whether or not you use a <code>FilterExpression</code>.
 *             </p>
 *         </note>
 *         <p>
 *             <code>Query</code> results are always sorted by the sort key value. If the data type of the sort key is Number,
 *             the results are returned in numeric order; otherwise, the results are returned in order of UTF-8 bytes.
 *             By default, the sort order is ascending. To reverse the order, set the <code>ScanIndexForward</code> parameter
 *             to false.
 *         </p>
 *         <p> A single <code>Query</code> operation will read up to the maximum number of items
 *             set (if using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then
 *             apply any filtering to the results using <code>FilterExpression</code>. If
 *                 <code>LastEvaluatedKey</code> is present in the response, you will need to paginate
 *             the result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html#Query.Pagination">Paginating
 *                 the Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
 *         <p>
 *             <code>FilterExpression</code> is applied after a <code>Query</code> finishes, but before
 *             the results are returned.
 *             A <code>FilterExpression</code> cannot contain partition key or sort key attributes.
 *             You need to specify those attributes in the <code>KeyConditionExpression</code>.
 *         </p>
 *         <note>
 *             <p>
 *                 A <code>Query</code> operation can return an empty result set and a <code>LastEvaluatedKey</code>
 *                 if all the items read for the page of results are filtered out.
 *             </p>
 *         </note>
 *         <p>You can query a table, a local secondary index, or a global secondary index. For a
 *             query on a table or on a local secondary index, you can set the
 *                 <code>ConsistentRead</code> parameter to <code>true</code> and obtain a
 *             strongly consistent result. Global secondary indexes support eventually consistent reads
 *             only, so do not specify <code>ConsistentRead</code> when querying a global
 *             secondary index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, QueryCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new QueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryCommandInput} for command's `input` shape.
 * @see {@link QueryCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class QueryCommand extends smithy_client_1.Command {
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
        const commandName = "QueryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.QueryInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.QueryOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0QueryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0QueryCommand(output, context);
    }
}
exports.QueryCommand = QueryCommand;
//# sourceMappingURL=QueryCommand.js.map