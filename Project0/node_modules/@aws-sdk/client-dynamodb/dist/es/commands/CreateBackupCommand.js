import { __extends } from "tslib";
import { CreateBackupInput, CreateBackupOutput } from "../models/models_0";
import { deserializeAws_json1_0CreateBackupCommand, serializeAws_json1_0CreateBackupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var CreateBackupCommand = /** @class */ (function (_super) {
    __extends(CreateBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBackupCommand(input) {
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
    CreateBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "CreateBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBackupInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBackupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateBackupCommand(input, context);
    };
    CreateBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateBackupCommand(output, context);
    };
    return CreateBackupCommand;
}($Command));
export { CreateBackupCommand };
//# sourceMappingURL=CreateBackupCommand.js.map