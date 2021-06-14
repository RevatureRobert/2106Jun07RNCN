import { __extends } from "tslib";
import { ListContributorInsightsInput, ListContributorInsightsOutput } from "../models/models_0";
import { deserializeAws_json1_0ListContributorInsightsCommand, serializeAws_json1_0ListContributorInsightsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of ContributorInsightsSummary for a table and all its global secondary indexes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link ListContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContributorInsightsCommand = /** @class */ (function (_super) {
    __extends(ListContributorInsightsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContributorInsightsCommand(input) {
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
    ListContributorInsightsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ListContributorInsightsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContributorInsightsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListContributorInsightsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContributorInsightsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListContributorInsightsCommand(input, context);
    };
    ListContributorInsightsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListContributorInsightsCommand(output, context);
    };
    return ListContributorInsightsCommand;
}($Command));
export { ListContributorInsightsCommand };
//# sourceMappingURL=ListContributorInsightsCommand.js.map