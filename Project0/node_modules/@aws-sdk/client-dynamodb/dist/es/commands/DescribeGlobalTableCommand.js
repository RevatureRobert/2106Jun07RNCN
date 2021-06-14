import { __extends } from "tslib";
import { DescribeGlobalTableInput, DescribeGlobalTableOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeGlobalTableCommand, serializeAws_json1_0DescribeGlobalTableCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the specified global table.</p>
 *           <note>
 *             <p>This operation only applies to <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V1.html">Version 2017.11.29</a> of global tables.
 *                    If you are using global tables <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/globaltables.V2.html">Version 2019.11.21</a> you can use <a href="https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_DescribeTable.html">DescribeTable</a> instead.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeGlobalTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeGlobalTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeGlobalTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGlobalTableCommandInput} for command's `input` shape.
 * @see {@link DescribeGlobalTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGlobalTableCommand = /** @class */ (function (_super) {
    __extends(DescribeGlobalTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGlobalTableCommand(input) {
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
    DescribeGlobalTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeGlobalTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGlobalTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGlobalTableOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGlobalTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeGlobalTableCommand(input, context);
    };
    DescribeGlobalTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeGlobalTableCommand(output, context);
    };
    return DescribeGlobalTableCommand;
}($Command));
export { DescribeGlobalTableCommand };
//# sourceMappingURL=DescribeGlobalTableCommand.js.map