import { __extends } from "tslib";
import { CreateTableInput, CreateTableOutput } from "../models/models_0";
import { deserializeAws_json1_0CreateTableCommand, serializeAws_json1_0CreateTableCommand, } from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The <code>CreateTable</code> operation adds a new table to your account. In an AWS
 *             account, table names must be unique within each Region. That is, you can have two tables
 *             with same name if you create the tables in different Regions.</p>
 *          <p>
 *             <code>CreateTable</code> is an asynchronous operation. Upon receiving a <code>CreateTable</code> request,
 *       DynamoDB immediately returns a response with a <code>TableStatus</code> of <code>CREATING</code>. After
 *       the table is created, DynamoDB sets the <code>TableStatus</code> to <code>ACTIVE</code>. You can
 *       perform read and write operations only on an <code>ACTIVE</code> table. </p>
 *          <p>You can optionally define secondary indexes on the new table, as part of the <code>CreateTable</code>
 *       operation. If you want to create multiple tables with secondary indexes on them, you must create the
 *       tables sequentially. Only one table with secondary indexes can be in the <code>CREATING</code> state at
 *       any given time.</p>
 *          <p>You can use the <code>DescribeTable</code> action to check the table status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, CreateTableCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new CreateTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTableCommandInput} for command's `input` shape.
 * @see {@link CreateTableCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTableCommand = /** @class */ (function (_super) {
    __extends(CreateTableCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTableCommand(input) {
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
    CreateTableCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DynamoDBClient";
        var commandName = "CreateTableCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTableOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTableCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_0CreateTableCommand(input, context);
    };
    CreateTableCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_0CreateTableCommand(output, context);
    };
    return CreateTableCommand;
}($Command));
export { CreateTableCommand };
//# sourceMappingURL=CreateTableCommand.js.map