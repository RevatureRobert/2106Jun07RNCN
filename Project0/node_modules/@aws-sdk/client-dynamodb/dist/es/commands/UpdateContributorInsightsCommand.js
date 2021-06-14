import { __extends } from "tslib";
import { UpdateContributorInsightsInput, UpdateContributorInsightsOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateContributorInsightsCommand, serializeAws_json1_0UpdateContributorInsightsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status for contributor insights for a specific table or index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link UpdateContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateContributorInsightsCommand = /** @class */ (function (_super) {
    __extends(UpdateContributorInsightsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateContributorInsightsCommand(input) {
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
    UpdateContributorInsightsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateContributorInsightsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateContributorInsightsInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateContributorInsightsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateContributorInsightsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateContributorInsightsCommand(input, context);
    };
    UpdateContributorInsightsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateContributorInsightsCommand(output, context);
    };
    return UpdateContributorInsightsCommand;
}($Command));
export { UpdateContributorInsightsCommand };
//# sourceMappingURL=UpdateContributorInsightsCommand.js.map