import { __extends } from "tslib";
import { ListBackupsInput, ListBackupsOutput } from "../models/models_0";
import { deserializeAws_json1_0ListBackupsCommand, serializeAws_json1_0ListBackupsCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List backups associated with an AWS account. To list backups for a given table, specify
 *                 <code>TableName</code>. <code>ListBackups</code> returns a paginated list of results
 *             with at most 1 MB worth of items in a page. You can also specify a maximum number of
 *             entries to be returned in a page. </p>
 *          <p>In the request, start time is inclusive, but end time is exclusive. Note that these
 *             boundaries are for the time at which the original backup was requested.</p>
 *          <p>You can call <code>ListBackups</code> a maximum of five times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, ListBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, ListBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new ListBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBackupsCommandInput} for command's `input` shape.
 * @see {@link ListBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBackupsCommand = /** @class */ (function (_super) {
    __extends(ListBackupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBackupsCommand(input) {
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
    ListBackupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "ListBackupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBackupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListBackupsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBackupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0ListBackupsCommand(input, context);
    };
    ListBackupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0ListBackupsCommand(output, context);
    };
    return ListBackupsCommand;
}($Command));
export { ListBackupsCommand };
//# sourceMappingURL=ListBackupsCommand.js.map