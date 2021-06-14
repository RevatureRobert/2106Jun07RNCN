"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTableCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>The <code>DeleteTable</code> operation deletes a table and all of its items. After a
 *         <code>DeleteTable</code> request, the specified table is in the <code>DELETING</code> state until
 *       DynamoDB completes the deletion. If the table is in the <code>ACTIVE</code> state, you can delete
 *       it. If a table is in <code>CREATING</code> or <code>UPDATING</code> states, then DynamoDB returns
 *       a <code>ResourceInUseException</code>. If the specified table does not exist, DynamoDB returns a
 *         <code>ResourceNotFoundException</code>. If table is already in the <code>DELETING</code> state, no
 *       error is returned. </p>
 *          <note>
 *             <p>DynamoDB might continue to accept data read and write operations, such as <code>GetItem</code> and
 *           <code>PutItem</code>, on a table in the <code>DELETING</code> state until the table deletion is
 *         complete.</p>
 *          </note>
 *          <p>When you delete a table, any indexes on that table are also deleted.</p>
 *          <p>If you have DynamoDB Streams enabled on the table, then the corresponding stream on that table goes
 *       into the <code>DISABLED</code> state, and the stream is automatically deleted after 24 hours.</p>
 *
 *          <p>Use the <code>DescribeTable</code> action to check the status of the table. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DeleteTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DeleteTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteTableCommand extends smithy_client_1.Command {
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
        const commandName = "DeleteTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeleteTableOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0DeleteTableCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0DeleteTableCommand(output, context);
    }
}
exports.DeleteTableCommand = DeleteTableCommand;
//# sourceMappingURL=DeleteTableCommand.js.map