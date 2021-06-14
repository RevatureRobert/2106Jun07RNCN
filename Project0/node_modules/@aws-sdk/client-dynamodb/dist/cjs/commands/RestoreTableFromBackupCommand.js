"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestoreTableFromBackupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a new table from an existing backup. Any number of users can execute up to 4 concurrent restores
 *         (any type of restore) in a given account.
 *       </p>
 *          <p>You can call <code>RestoreTableFromBackup</code> at a maximum rate of 10 times per second.</p>
 *          <p>You must manually set up the following on the restored table:</p>
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
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, RestoreTableFromBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, RestoreTableFromBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new RestoreTableFromBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreTableFromBackupCommandInput} for command's `input` shape.
 * @see {@link RestoreTableFromBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RestoreTableFromBackupCommand extends smithy_client_1.Command {
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
        const commandName = "RestoreTableFromBackupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RestoreTableFromBackupInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.RestoreTableFromBackupOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0RestoreTableFromBackupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0RestoreTableFromBackupCommand(output, context);
    }
}
exports.RestoreTableFromBackupCommand = RestoreTableFromBackupCommand;
//# sourceMappingURL=RestoreTableFromBackupCommand.js.map