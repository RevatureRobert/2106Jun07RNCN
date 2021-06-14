"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGlobalTableCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds or removes replicas in the specified global table. The global table must already
 *             exist to be able to use this operation. Any replica to be added must be empty, have the
 *             same name as the global table, have the same key schema, have DynamoDB Streams enabled,
 *             and have the same provisioned and maximum write capacity units.</p>
 *         <note>
 *             <p>Although you can use <code>UpdateGlobalTable</code> to add replicas and remove replicas in
 *                 a single request, for simplicity we recommend that you issue separate requests for
 *                 adding or removing replicas.</p>
 *          </note>
 *        	<p>
 *         If global secondary indexes are specified, then the following conditions must also be met:
 *         </p>
 *         <ul>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same name.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same hash key and sort key (if present).
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                The global secondary indexes must have the same provisioned and maximum write capacity units.
 *             </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateGlobalTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGlobalTableCommandInput} for command's `input` shape.
 * @see {@link UpdateGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateGlobalTableCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateGlobalTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateGlobalTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateGlobalTableOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateGlobalTableCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateGlobalTableCommand(output, context);
    }
}
exports.UpdateGlobalTableCommand = UpdateGlobalTableCommand;
//# sourceMappingURL=UpdateGlobalTableCommand.js.map