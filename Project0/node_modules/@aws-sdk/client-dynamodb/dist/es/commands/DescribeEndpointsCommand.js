import { __extends } from "tslib";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_0";
import { deserializeAws_json1_0DescribeEndpointsCommand, serializeAws_json1_0DescribeEndpointsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the regional endpoint information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeEndpointsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeEndpointsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEndpointsCommand = /** @class */ (function (_super) {
    __extends(DescribeEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEndpointsCommand(input) {
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
    DescribeEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeEndpointsCommand(input, context);
    };
    DescribeEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeEndpointsCommand(output, context);
    };
    return DescribeEndpointsCommand;
}($Command));
export { DescribeEndpointsCommand };
//# sourceMappingURL=DescribeEndpointsCommand.js.map