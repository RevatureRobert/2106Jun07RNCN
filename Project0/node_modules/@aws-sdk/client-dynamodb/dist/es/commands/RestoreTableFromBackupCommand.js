import { __extends } from "tslib";
import { RestoreTableFromBackupInput, RestoreTableFromBackupOutput } from "../models/models_0";
import { deserializeAws_json1_0RestoreTableFromBackupCommand, serializeAws_json1_0RestoreTableFromBackupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var RestoreTableFromBackupCommand = /** @class */ (function (_super) {
    __extends(RestoreTableFromBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestoreTableFromBackupCommand(input) {
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
    RestoreTableFromBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "RestoreTableFromBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestoreTableFromBackupInput.filterSensitiveLog,
            outputFilterSensitiveLog: RestoreTableFromBackupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestoreTableFromBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0RestoreTableFromBackupCommand(input, context);
    };
    RestoreTableFromBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0RestoreTableFromBackupCommand(output, context);
    };
    return RestoreTableFromBackupCommand;
}($Command));
export { RestoreTableFromBackupCommand };
//# sourceMappingURL=RestoreTableFromBackupCommand.js.map