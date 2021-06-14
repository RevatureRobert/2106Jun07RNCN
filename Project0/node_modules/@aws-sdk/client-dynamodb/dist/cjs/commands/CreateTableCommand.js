"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateTableCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "DynamoDBClient";
        const commandName = "CreateTableCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateTableInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateTableOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0CreateTableCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0CreateTableCommand(output, context);
    }
}
exports.CreateTableCommand = CreateTableCommand;
//# sourceMappingURL=CreateTableCommand.js.map