"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTableCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the provisioned throughput settings, global secondary indexes, or DynamoDB Streams settings for a given table.</p>
 *          <p>You can only perform one of the following operations at once:</p>
 *          <ul>
 *             <li>
 *                <p>Modify the provisioned throughput settings of the table.</p>
 *             </li>
 *             <li>
 *                <p>Enable or disable DynamoDB Streams on the table.</p>
 *             </li>
 *             <li>
 *                <p>Remove a global secondary index from the table.</p>
 *             </li>
 *             <li>
 *                <p>Create a new global secondary index on the table. After the index begins
 *                     backfilling, you can use <code>UpdateTable</code> to perform other
 *                     operations.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <code>UpdateTable</code> is an asynchronous operation; while it is executing, the table status
 *       changes from <code>ACTIVE</code> to <code>UPDATING</code>. While it is <code>UPDATING</code>,
 *       you cannot issue another <code>UpdateTable</code> request. When the table returns to the
 *         <code>ACTIVE</code> state, the <code>UpdateTable</code> operation is complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableCommandInput} for command's `input` shape.
 * @see {@link UpdateTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateTableCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateTableOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateTableCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateTableCommand(output, context);
    }
}
exports.UpdateTableCommand = UpdateTableCommand;
//# sourceMappingURL=UpdateTableCommand.js.map