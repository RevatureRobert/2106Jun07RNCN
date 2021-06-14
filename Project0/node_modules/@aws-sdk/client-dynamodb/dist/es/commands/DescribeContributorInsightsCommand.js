import { __extends } from "tslib";
import { DescribeContributorInsightsInput, DescribeContributorInsightsOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeContributorInsightsCommand, serializeAws_json1_0DescribeContributorInsightsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about contributor insights, for a given table or global secondary index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeContributorInsightsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeContributorInsightsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeContributorInsightsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeContributorInsightsCommandInput} for command's `input` shape.
 * @see {@link DescribeContributorInsightsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeContributorInsightsCommand = /** @class */ (function (_super) {
    __extends(DescribeContributorInsightsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeContributorInsightsCommand(input) {
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
    DescribeContributorInsightsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeContributorInsightsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeContributorInsightsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeContributorInsightsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeContributorInsightsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeContributorInsightsCommand(input, context);
    };
    DescribeContributorInsightsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeContributorInsightsCommand(output, context);
    };
    return DescribeContributorInsightsCommand;
}($Command));
export { DescribeContributorInsightsCommand };
//# sourceMappingURL=DescribeContributorInsightsCommand.js.map