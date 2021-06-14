import { __extends } from "tslib";
import { DescribeTableInput, DescribeTableOutput } from "../models/models_0";
import { deserializeAws_json1_0DescribeTableCommand, serializeAws_json1_0DescribeTableCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the table, including the current status of the table, when it was created, the primary key schema, and any indexes on the table.</p>
 *          <note>
 *             <p>If you issue a <code>DescribeTable</code> request immediately after a <code>CreateTable</code> request, DynamoDB might
 *         return a <code>ResourceNotFoundException</code>. This is because <code>DescribeTable</code> uses an eventually
 *         consistent query, and the metadata for your table might not be available at that moment.
 *         Wait for a few seconds, and then try the <code>DescribeTable</code> request again.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, DescribeTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, DescribeTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new DescribeTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTableCommandInput} for command's `input` shape.
 * @see {@link DescribeTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeTableCommand = /** @class */ (function (_super) {
    __extends(DescribeTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeTableCommand(input) {
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
    DescribeTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "DescribeTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeTableOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0DescribeTableCommand(input, context);
    };
    DescribeTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0DescribeTableCommand(output, context);
    };
    return DescribeTableCommand;
}($Command));
export { DescribeTableCommand };
//# sourceMappingURL=DescribeTableCommand.js.map