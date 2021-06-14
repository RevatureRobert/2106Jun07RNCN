import { __assign, __extends } from "tslib";
import { DescribeEndpointsCommand, } from "./commands/DescribeEndpointsCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import { resolveEndpointsConfig, resolveRegionConfig, } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { resolveEndpointDiscoveryConfig, } from "@aws-sdk/middleware-endpoint-discovery";
import { getHostHeaderPlugin, resolveHostHeaderConfig, } from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getAwsAuthPlugin, resolveAwsAuthConfig, } from "@aws-sdk/middleware-signing";
import { getUserAgentPlugin, resolveUserAgentConfig, } from "@aws-sdk/middleware-user-agent";
import { Client as __Client, } from "@aws-sdk/smithy-client";
/**
 * <fullname>Amazon DynamoDB</fullname>
 *
 *
 *          <p>Amazon DynamoDB is a fully managed NoSQL database service that provides fast and
 *       predictable performance with seamless scalability. DynamoDB lets you offload the
 *       administrative burdens of operating and scaling a distributed database, so that you don't have
 *       to worry about hardware provisioning, setup and configuration, replication, software patching,
 *       or cluster scaling.</p>
 *
 *          <p>With DynamoDB, you can create database tables that can store and retrieve any amount of
 *       data, and serve any level of request traffic. You can scale up or scale down your tables'
 *       throughput capacity without downtime or performance degradation, and use the AWS Management
 *       Console to monitor resource utilization and performance metrics.</p>
 *
 *          <p>DynamoDB automatically spreads the data and traffic for your tables over a sufficient
 *       number of servers to handle your throughput and storage requirements, while maintaining
 *       consistent and fast performance. All of your data is stored on solid state disks (SSDs) and
 *       automatically replicated across multiple Availability Zones in an AWS region, providing
 *       built-in high availability and data durability. </p>
 */
var DynamoDBClient = /** @class */ (function (_super) {
    __extends(DynamoDBClient, _super);
    function DynamoDBClient(configuration) {
        var _this = this;
        var _config_0 = __assign(__assign({}, __ClientDefaultValues), configuration);
        var _config_1 = resolveRegionConfig(_config_0);
        var _config_2 = resolveEndpointsConfig(_config_1);
        var _config_3 = resolveRetryConfig(_config_2);
        var _config_4 = resolveHostHeaderConfig(_config_3);
        var _config_5 = resolveAwsAuthConfig(_config_4);
        var _config_6 = resolveUserAgentConfig(_config_5);
        var _config_7 = resolveEndpointDiscoveryConfig(_config_6, DescribeEndpointsCommand);
        _this = _super.call(this, _config_7) || this;
        _this.config = _config_7;
        _this.middlewareStack.use(getRetryPlugin(_this.config));
        _this.middlewareStack.use(getContentLengthPlugin(_this.config));
        _this.middlewareStack.use(getHostHeaderPlugin(_this.config));
        _this.middlewareStack.use(getLoggerPlugin(_this.config));
        _this.middlewareStack.use(getAwsAuthPlugin(_this.config));
        _this.middlewareStack.use(getUserAgentPlugin(_this.config));
        return _this;
    }
    /**
     * Destroy underlying resources, like sockets. It's usually not necessary to do this.
     * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
     * Otherwise, sockets might stay open for quite a long time before the server terminates them.
     */
    DynamoDBClient.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
    };
    return DynamoDBClient;
}(__Client));
export { DynamoDBClient };
//# sourceMappingURL=DynamoDBClient.js.map