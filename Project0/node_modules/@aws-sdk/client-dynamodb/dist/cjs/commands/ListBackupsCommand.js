"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBackupsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class ListBackupsCommand extends smithy_client_1.Command {
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
        const commandName = "ListBackupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListBackupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListBackupsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0ListBackupsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0ListBackupsCommand(output, context);
    }
}
exports.ListBackupsCommand = ListBackupsCommand;
//# sourceMappingURL=ListBackupsCommand.js.map