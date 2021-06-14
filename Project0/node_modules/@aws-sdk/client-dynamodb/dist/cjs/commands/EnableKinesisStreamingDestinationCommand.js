"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnableKinesisStreamingDestinationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_0_1 = require("../protocols/Aws_json1_0");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Starts table data replication to the specified Kinesis data stream at a timestamp chosen
 *             during the enable workflow. If this operation doesn't return results immediately, use
 *             DescribeKinesisStreamingDestination to check if streaming to the Kinesis data stream is
 *             ACTIVE.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DynamoDBClient, EnableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
 * // const { DynamoDBClient, EnableKinesisStreamingDestinationCommand } = require("@aws-sdk/client-dynamodb"); // CommonJS import
 * const client = new DynamoDBClient(config);
 * const command = new EnableKinesisStreamingDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableKinesisStreamingDestinationCommandInput} for command's `input` shape.
 * @see {@link EnableKinesisStreamingDestinationCommandOutput} for command's `response` shape.
 * @see {@link DynamoDBClientResolvedConfig | config} for command's `input` shape.
 *
 */
class EnableKinesisStreamingDestinationCommand extends smithy_client_1.Command {
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
        const commandName = "EnableKinesisStreamingDestinationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.KinesisStreamingDestinationInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.KinesisStreamingDestinationOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_0_1.serializeAws_json1_0EnableKinesisStreamingDestinationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_0_1.deserializeAws_json1_0EnableKinesisStreamingDestinationCommand(output, context);
    }
}
exports.EnableKinesisStreamingDestinationCommand = EnableKinesisStreamingDestinationCommand;
//# sourceMappingURL=EnableKinesisStreamingDestinationCommand.js.map