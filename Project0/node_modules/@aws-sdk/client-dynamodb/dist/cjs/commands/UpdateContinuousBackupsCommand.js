"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContinuousBackupsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>
 *             <code>UpdateContinuousBackups</code> enables or disables point in time recovery for the specified table.
 *       A successful <code>UpdateContinuousBackups</code> call returns the current <code>ContinuousBackupsDescription</code>.
 *       Continuous backups are <code>ENABLED</code> on all tables at table creation.
 *       If point in time recovery is enabled, <code>PointInTimeRecoveryStatus</code> will be set to ENABLED.</p>
 *          <p>
 *       Once continuous backups and point in time recovery are enabled, you can restore to any point in time within
 *       <code>EarliestRestorableDateTime</code> and <code>LatestRestorableDateTime</code>.
 *      </p>
 *          <p>
 *             <code>LatestRestorableDateTime</code> is typically 5 minutes before the current time.
 *             You can restore your table to any point in time during the last 35 days. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, UpdateContinuousBackupsCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, UpdateContinuousBackupsCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new UpdateContinuousBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateContinuousBackupsCommandInput} for command's `input` shape.
 * @see {@link UpdateContinuousBackupsCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class UpdateContinuousBackupsCommand extends smithy_client_1.Command {
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
        const commandName = "UpdateContinuousBackupsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateContinuousBackupsInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateContinuousBackupsOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0UpdateContinuousBackupsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0UpdateContinuousBackupsCommand(output, context);
    }
}
exports.UpdateContinuousBackupsCommand = UpdateContinuousBackupsCommand;
//# sourceMappingURL=UpdateContinuousBackupsCommand.js.map