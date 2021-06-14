"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScanCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The <code>Scan</code> operation returns one or more items and item attributes by accessing every
 *       item in a table or a secondary index. To have DynamoDB return fewer items, you can provide a <code>FilterExpression</code> operation.</p>
 *          <p>If the total number of scanned items exceeds the maximum dataset size limit of 1 MB, the
 *             scan stops and results are returned to the user as a <code>LastEvaluatedKey</code> value
 *             to continue the scan in a subsequent operation. The results also include the number of
 *             items exceeding the limit. A scan can result in no table data meeting the filter
 *             criteria. </p>
 *          <p>A single <code>Scan</code> operation reads up to the maximum number of items set (if
 *             using the <code>Limit</code> parameter) or a maximum of 1 MB of data and then apply any
 *             filtering to the results using <code>FilterExpression</code>. If
 *                 <code>LastEvaluatedKey</code> is present in the response, you need to paginate the
 *             result set. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.Pagination">Paginating the
 *                 Results</a> in the <i>Amazon DynamoDB Developer Guide</i>. </p>
 *          <p>
 *             <code>Scan</code> operations proceed sequentially; however, for faster performance on
 *             a large table or secondary index, applications can request a parallel <code>Scan</code>
 *             operation by providing the <code>Segment</code> and <code>TotalSegments</code>
 *             parameters. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html#Scan.ParallelScan">Parallel
 *                 Scan</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 *          <p>
 *             <code>Scan</code> uses eventually consistent reads when accessing the data in a
 *             table; therefore, the result set might not include the changes to data in the table
 *             immediately before the operation began. If you need a consistent copy of the data, as of
 *             the time that the <code>Scan</code> begins, you can set the <code>ConsistentRead</code>
 *             parameter to <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ScanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ScanCommandInput} for command's `input` shape.
 * @see {@link ScanCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ScanCommand extends smithy_client_1.Command {
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
        const commandName = "ScanCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ScanInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ScanOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0ScanCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0ScanCommand(output, context);
    }
}
exports.ScanCommand = ScanCommand;
//# sourceMappingURL=ScanCommand.js.map