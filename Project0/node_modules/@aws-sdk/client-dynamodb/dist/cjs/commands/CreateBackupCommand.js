"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBackupCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a backup for an existing table.</p>
 *          <p> Each time you create an on-demand backup, the entire table data is backed up. There
 *             is no limit to the number of on-demand backups that can be taken. </p>
 *          <p> When you create an on-demand backup, a time marker of the request is cataloged, and
 *             the backup is created asynchronously, by applying all changes until the time of the
 *             request to the last full table snapshot. Backup requests are processed instantaneously
 *             and become available for restore within minutes. </p>
 *          <p>You can call <code>CreateBackup</code> at a maximum rate of 50 times per second.</p>
 *          <p>All backups in DynamoDB work without consuming any provisioned throughput on the table.</p>
 *          <p> If you submit a backup request on 2018-12-14 at 14:25:00, the backup is guaranteed
 *             to contain all data committed to the table up to 14:24:00, and data committed after
 *             14:26:00 will not be. The backup might contain data modifications made between 14:24:00
 *             and 14:26:00. On-demand backup does not support causal consistency. </p>
 *          <p>
 *              Along with data, the following are also included on the backups:
 *          </p>
 *            <ul>
 *             <li>
 *                   <p>Global secondary indexes (GSIs)</p>
 *               </li>
 *             <li>
 *                   <p>Local secondary indexes (LSIs)</p>
 *               </li>
 *             <li>
 *                   <p>Streams</p>
 *               </li>
 *             <li>
 *                   <p>Provisioned read and write capacity</p>
 *               </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new CreateBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackupCommandInput} for command's `input` shape.
 * @see {@link CreateBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateBackupCommand extends smithy_client_1.Command {
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
        const commandName = "CreateBackupCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateBackupInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateBackupOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0CreateBackupCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0CreateBackupCommand(output, context);
    }
}
exports.CreateBackupCommand = CreateBackupCommand;
//# sourceMappingURL=CreateBackupCommand.js.map