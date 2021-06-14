import { __extends } from "tslib";
import { ExportTableToPointInTimeInput, ExportTableToPointInTimeOutput } from "../models/models_0";
import { deserializeAws_json1_0ExportTableToPointInTimeCommand, serializeAws_json1_0ExportTableToPointInTimeCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports table data to an S3 bucket. The table must have point in time recovery
 *             enabled, and you can export data from any time within the point in time recovery
 *             window.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ExportTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ExportTableToPointInTimeCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ExportTableToPointInTimeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportTableToPointInTimeCommandInput} for command's `input` shape.
 * @see {@link ExportTableToPointInTimeCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportTableToPointInTimeCommand = /** @class */ (function (_super) {
    __extends(ExportTableToPointInTimeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportTableToPointInTimeCommand(input) {
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
    ExportTableToPointInTimeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ExportTableToPointInTimeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportTableToPointInTimeInput.filterSensitiveLog,
            outputFilterSensitiveLog: ExportTableToPointInTimeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportTableToPointInTimeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ExportTableToPointInTimeCommand(input, context);
    };
    ExportTableToPointInTimeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ExportTableToPointInTimeCommand(output, context);
    };
    return ExportTableToPointInTimeCommand;
}($Command));
export { ExportTableToPointInTimeCommand };
//# sourceMappingURL=ExportTableToPointInTimeCommand.js.map