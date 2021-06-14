import { __extends } from "tslib";
import { DescribeExportInput, DescribeExportOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeExportCommand, serializeAws_json1_0DescribeExportCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an existing table export.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeExportCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeExportCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeExportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportCommandInput} for command's `input` shape.
 * @see {@link DescribeExportCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExportCommand = /** @class */ (function (_super) {
    __extends(DescribeExportCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeExportCommand(input) {
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
    DescribeExportCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeExportCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeExportInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeExportOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeExportCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeExportCommand(input, context);
    };
    DescribeExportCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeExportCommand(output, context);
    };
    return DescribeExportCommand;
}($Command));
export { DescribeExportCommand };
//# sourceMappingURL=DescribeExportCommand.js.map