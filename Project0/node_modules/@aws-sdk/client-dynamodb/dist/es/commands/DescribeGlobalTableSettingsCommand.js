import { __extends } from "tslib";
import { DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeGlobalTableSettingsCommand, serializeAws_json1_0DescribeGlobalTableSettingsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes Region-specific settings for a global table.</p>
 *           <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeGlobalTableSettingsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeGlobalTableSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalTableSettingsCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalTableSettingsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGlobalTableSettingsCommand = /** @class */ (function (_super) {
    __extends(DescribeGlobalTableSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGlobalTableSettingsCommand(input) {
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
    DescribeGlobalTableSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeGlobalTableSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGlobalTableSettingsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGlobalTableSettingsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGlobalTableSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeGlobalTableSettingsCommand(input, context);
    };
    DescribeGlobalTableSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeGlobalTableSettingsCommand(output, context);
    };
    return DescribeGlobalTableSettingsCommand;
}($Command));
export { DescribeGlobalTableSettingsCommand };
//# sourceMappingURL=DescribeGlobalTableSettingsCommand.js.map