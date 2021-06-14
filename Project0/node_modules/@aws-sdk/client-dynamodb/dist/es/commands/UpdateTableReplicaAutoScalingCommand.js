import { __extends } from "tslib";
import { UpdateTableReplicaAutoScalingInput, UpdateTableReplicaAutoScalingOutput } from "../models/models_0";
import { deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand, serializeAws_json1_0UpdateTableReplicaAutoScalingCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates auto scaling settings on your global tables at once.</p>
 *          <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> of global tables.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateTableReplicaAutoScalingCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateTableReplicaAutoScalingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTableReplicaAutoScalingCommandInput} for command's `input` shape.
 * @see {@link UpdateTableReplicaAutoScalingCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateTableReplicaAutoScalingCommand = /** @class */ (function (_super) {
    __extends(UpdateTableReplicaAutoScalingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateTableReplicaAutoScalingCommand(input) {
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
    UpdateTableReplicaAutoScalingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "UpdateTableReplicaAutoScalingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateTableReplicaAutoScalingInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateTableReplicaAutoScalingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateTableReplicaAutoScalingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0UpdateTableReplicaAutoScalingCommand(input, context);
    };
    UpdateTableReplicaAutoScalingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand(output, context);
    };
    return UpdateTableReplicaAutoScalingCommand;
}($Command));
export { UpdateTableReplicaAutoScalingCommand };
//# sourceMappingURL=UpdateTableReplicaAutoScalingCommand.js.map