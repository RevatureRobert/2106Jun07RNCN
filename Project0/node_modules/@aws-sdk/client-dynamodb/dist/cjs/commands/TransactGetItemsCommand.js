"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactGetItemsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class TransactGetItemsCommand extends smithy_client_1.Command {
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
        const commandName = "TransactGetItemsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.TransactGetItemsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.TransactGetItemsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0TransactGetItemsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0TransactGetItemsCommand(output, context);
    }
}
exports.TransactGetItemsCommand = TransactGetItemsCommand;
//# sourceMappingURL=TransactGetItemsCommand.js.map