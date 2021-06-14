import { __extends } from "tslib";
import { TransactGetItemsInput, TransactGetItemsOutput } from "../models/models_0";
import { deserializeAws_json1_0TransactGetItemsCommand, serializeAws_json1_0TransactGetItemsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <code>TransactGetItems</code> is a synchronous operation that atomically retrieves
 *             multiple items from one or more tables (but not from indexes) in a single account and
 *             Region. A <code>TransactGetItems</code> call can contain up to 25
 *                 <code>TransactGetItem</code> objects, each of which contains a <code>Get</code>
 *             structure that specifies an item to retrieve from a table in the account and Region. A
 *             call to <code>TransactGetItems</code> cannot retrieve items from tables in more than one
 *             AWS account or Region. The aggregate size of the items in the transaction cannot exceed
 *             4 MB.</p>
 *          <p>DynamoDB rejects the entire <code>TransactGetItems</code> request if any of the following is true:</p>
 *          <ul>
 *             <li>
 *                <p>A conflicting operation is in the process of updating an
 *           item to be read.</p>
 *             </li>
 *             <li>
 *                <p>There is insufficient provisioned capacity for the transaction
 *           to be completed.</p>
 *             </li>
 *             <li>
 *                <p>There is a user error, such as an invalid data format.</p>
 *             </li>
 *             <li>
 *                <p>The aggregate size of the items in the transaction cannot exceed 4 MB.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, TransactGetItemsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, TransactGetItemsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new TransactGetItemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransactGetItemsCommandInput} for command's `input` shape.
 * @see {@link TransactGetItemsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TransactGetItemsCommand = /** @class */ (function (_super) {
    __extends(TransactGetItemsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TransactGetItemsCommand(input) {
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
    TransactGetItemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "TransactGetItemsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TransactGetItemsInput.filterSensitiveLog,
            outputFilterSensitiveLog: TransactGetItemsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TransactGetItemsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0TransactGetItemsCommand(input, context);
    };
    TransactGetItemsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0TransactGetItemsCommand(output, context);
    };
    return TransactGetItemsCommand;
}($Command));
export { TransactGetItemsCommand };
//# sourceMappingURL=TransactGetItemsCommand.js.map