import { __extends } from "tslib";
import { DescribeTableReplicaAutoScalingInput, DescribeTableReplicaAutoScalingOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand, serializeAws_json1_0DescribeTableReplicaAutoScalingCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes auto scaling settings across replicas of the global table at once.</p>
 *          <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link DescribeTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTableReplicaAutoScalingCommand = /** @class */ (function (_super) {
    __extends(DescribeTableReplicaAutoScalingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTableReplicaAutoScalingCommand(input) {
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
    DescribeTableReplicaAutoScalingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeTableReplicaAutoScalingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTableReplicaAutoScalingInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTableReplicaAutoScalingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTableReplicaAutoScalingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeTableReplicaAutoScalingCommand(input, context);
    };
    DescribeTableReplicaAutoScalingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand(output, context);
    };
    return DescribeTableReplicaAutoScalingCommand;
}($Command));
export { DescribeTableReplicaAutoScalingCommand };
//# sourceMappingURL=DescribeTableReplicaAutoScalingCommand.js.map