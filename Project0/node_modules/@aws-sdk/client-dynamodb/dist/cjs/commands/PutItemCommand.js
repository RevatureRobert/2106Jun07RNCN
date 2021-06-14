"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutItemCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new item, or replaces an old item with a new item. If an item that has the same primary key as the new item already exists in the specified table, the new item completely replaces the existing item. You can perform a conditional put operation (add a new item if one with the specified primary key doesn't exist), or replace an existing item if it has certain attribute values. You can return the item's attribute values in the same operation, using the <code>ReturnValues</code> parameter.</p>
 *          <important>
 *             <p>This topic provides general information about the <code>PutItem</code> API.</p>
 *             <p>For information on how to call the <code>PutItem</code> API using the AWS SDK in specific languages, see the following:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/aws-cli/dynamodb-2012-08-10/PutItem"> PutItem in the AWS Command Line Interface</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/DotNetSDKV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for .NET</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/SdkForCpp/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for C++</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/SdkForGoV1/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Go</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/SdkForJava/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Java</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/AWSJavaScriptSDK/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for JavaScript</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/SdkForPHPV3/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for PHP V3</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/boto3/dynamodb-2012-08-10/PutItem">
 *                             PutItem in the AWS SDK for Python</a>
 *                     </p>
 *                </li>
 *                <li>
 *                   <p>
 *                         <a href="http://docs.aws.amazon.com/goto/SdkForRubyV2/dynamodb-2012-08-10/PutItem"> PutItem in the AWS SDK for Ruby V2</a>
 *                     </p>
 *                </li>
 *             </ul>
 *          </important>
 *
 *          <p>When you add an item, the primary key attributes are the only required attributes.
 *             Attribute values cannot be null.</p>
 *             <p>Empty String and Binary attribute values are allowed. Attribute values of type String and Binary must have a length greater than zero if the attribute is used as a key attribute for a table or index.
 *             Set type attributes cannot be empty. </p>
 *             <p>Invalid Requests with empty values will
 *             be rejected with a <code>ValidationException</code> exception.</p>
 *          <note>
 *             <p>To prevent a new item from replacing an existing item, use a conditional expression
 *          that contains the <code>attribute_not_exists</code> function with the name of the
 *          attribute being used as the partition key for the table.  Since every record must contain
 *          that attribute, the <code>attribute_not_exists</code> function will only succeed if
 *          no matching item exists.</p>
 *          </note>
 *          <p>For more information about <code>PutItem</code>, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html">Working with Items</a> in the <i>Amazon DynamoDB Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new PutItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutItemCommandInput} for command's `input` shape.
 * @see {@link PutItemCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutItemCommand extends smithy_client_1.Command {
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
        const commandName = "PutItemCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutItemInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutItemOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0PutItemCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0PutItemCommand(output, context);
    }
}
exports.PutItemCommand = PutItemCommand;
//# sourceMappingURL=PutItemCommand.js.map