import { __extends } from "tslib";
import { DescribeBackupInput, DescribeBackupOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeBackupCommand, serializeAws_json1_0DescribeBackupCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing backup of a table.</p>
 *          <p>You can call <code>DescribeBackup</code> at a maximum rate of 10 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeBackupCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeBackupCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBackupCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBackupCommand = /** @class */ (function (_super) {
    __extends(DescribeBackupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBackupCommand(input) {
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
    DescribeBackupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeBackupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBackupInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBackupOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBackupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeBackupCommand(input, context);
    };
    DescribeBackupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeBackupCommand(output, context);
    };
    return DescribeBackupCommand;
}($Command));
export { DescribeBackupCommand };
//# sourceMappingURL=DescribeBackupCommand.js.map