import { __assign, __awaiter, __generator, __read } from "tslib";
import { AttributeValue, } from "../models/models_0";
import { HttpRequest as __HttpRequest } from "@aws-sdk/protocol-http";
import { v4 as generateIdempotencyToken } from "uuid";
export var serializeAws_json1_0BatchExecuteStatementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.BatchExecuteStatement",
        };
        body = JSON.stringify(serializeAws_json1_0BatchExecuteStatementInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0BatchGetItemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.BatchGetItem",
        };
        body = JSON.stringify(serializeAws_json1_0BatchGetItemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0BatchWriteItemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.BatchWriteItem",
        };
        body = JSON.stringify(serializeAws_json1_0BatchWriteItemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.CreateBackup",
        };
        body = JSON.stringify(serializeAws_json1_0CreateBackupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateGlobalTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.CreateGlobalTable",
        };
        body = JSON.stringify(serializeAws_json1_0CreateGlobalTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0CreateTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.CreateTable",
        };
        body = JSON.stringify(serializeAws_json1_0CreateTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DeleteBackup",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteBackupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteItemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DeleteItem",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteItemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DeleteTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DeleteTable",
        };
        body = JSON.stringify(serializeAws_json1_0DeleteTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeBackup",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeBackupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeContinuousBackupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeContinuousBackups",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeContinuousBackupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeContributorInsightsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeContributorInsights",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeContributorInsightsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeEndpointsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeEndpoints",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeEndpointsRequest(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeExportCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeExport",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeExportInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeGlobalTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeGlobalTable",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeGlobalTableSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeGlobalTableSettings",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeGlobalTableSettingsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeKinesisStreamingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeKinesisStreamingDestination",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeKinesisStreamingDestinationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeLimitsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeLimits",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeLimitsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeTable",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeTableReplicaAutoScalingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeTableReplicaAutoScaling",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeTableReplicaAutoScalingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DescribeTimeToLiveCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DescribeTimeToLive",
        };
        body = JSON.stringify(serializeAws_json1_0DescribeTimeToLiveInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0DisableKinesisStreamingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.DisableKinesisStreamingDestination",
        };
        body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0EnableKinesisStreamingDestinationCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.EnableKinesisStreamingDestination",
        };
        body = JSON.stringify(serializeAws_json1_0KinesisStreamingDestinationInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExecuteStatementCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ExecuteStatement",
        };
        body = JSON.stringify(serializeAws_json1_0ExecuteStatementInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExecuteTransactionCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ExecuteTransaction",
        };
        body = JSON.stringify(serializeAws_json1_0ExecuteTransactionInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ExportTableToPointInTimeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ExportTableToPointInTime",
        };
        body = JSON.stringify(serializeAws_json1_0ExportTableToPointInTimeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0GetItemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.GetItem",
        };
        body = JSON.stringify(serializeAws_json1_0GetItemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListBackupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ListBackups",
        };
        body = JSON.stringify(serializeAws_json1_0ListBackupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListContributorInsightsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ListContributorInsights",
        };
        body = JSON.stringify(serializeAws_json1_0ListContributorInsightsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListExportsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ListExports",
        };
        body = JSON.stringify(serializeAws_json1_0ListExportsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListGlobalTablesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ListGlobalTables",
        };
        body = JSON.stringify(serializeAws_json1_0ListGlobalTablesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListTablesCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ListTables",
        };
        body = JSON.stringify(serializeAws_json1_0ListTablesInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ListTagsOfResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.ListTagsOfResource",
        };
        body = JSON.stringify(serializeAws_json1_0ListTagsOfResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0PutItemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.PutItem",
        };
        body = JSON.stringify(serializeAws_json1_0PutItemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0QueryCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.Query",
        };
        body = JSON.stringify(serializeAws_json1_0QueryInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RestoreTableFromBackupCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.RestoreTableFromBackup",
        };
        body = JSON.stringify(serializeAws_json1_0RestoreTableFromBackupInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0RestoreTableToPointInTimeCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.RestoreTableToPointInTime",
        };
        body = JSON.stringify(serializeAws_json1_0RestoreTableToPointInTimeInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0ScanCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.Scan",
        };
        body = JSON.stringify(serializeAws_json1_0ScanInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.TagResource",
        };
        body = JSON.stringify(serializeAws_json1_0TagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TransactGetItemsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.TransactGetItems",
        };
        body = JSON.stringify(serializeAws_json1_0TransactGetItemsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0TransactWriteItemsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.TransactWriteItems",
        };
        body = JSON.stringify(serializeAws_json1_0TransactWriteItemsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UntagResourceCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UntagResource",
        };
        body = JSON.stringify(serializeAws_json1_0UntagResourceInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateContinuousBackupsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateContinuousBackups",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateContinuousBackupsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateContributorInsightsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateContributorInsights",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateContributorInsightsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateGlobalTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateGlobalTable",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateGlobalTableSettingsCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateGlobalTableSettings",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateGlobalTableSettingsInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateItemCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateItem",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateItemInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateTableCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateTable",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateTableInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateTableReplicaAutoScalingCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateTableReplicaAutoScaling",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateTableReplicaAutoScalingInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var serializeAws_json1_0UpdateTimeToLiveCommand = function (input, context) { return __awaiter(void 0, void 0, void 0, function () {
    var headers, body;
    return __generator(this, function (_a) {
        headers = {
            "content-type": "application/x-amz-json-1.0",
            "x-amz-target": "DynamoDB_20120810.UpdateTimeToLive",
        };
        body = JSON.stringify(serializeAws_json1_0UpdateTimeToLiveInput(input, context));
        return [2 /*return*/, buildHttpRpcRequest(context, headers, "/", undefined, body)];
    });
}); };
export var deserializeAws_json1_0BatchExecuteStatementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0BatchExecuteStatementCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0BatchExecuteStatementOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0BatchExecuteStatementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "RequestLimitExceeded": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0BatchGetItemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0BatchGetItemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0BatchGetItemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0BatchGetItemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "RequestLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0BatchWriteItemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0BatchWriteItemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0BatchWriteItemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0BatchWriteItemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ItemCollectionSizeLimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException": return [3 /*break*/, 6];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 8];
                    case "RequestLimitExceeded": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0CreateBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateBackupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BackupInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#BackupInUseException": return [3 /*break*/, 2];
                    case "ContinuousBackupsUnavailableException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 6];
                    case "InvalidEndpointException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 10];
                    case "TableInUseException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TableInUseException": return [3 /*break*/, 12];
                    case "TableNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0CreateGlobalTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateGlobalTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateGlobalTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateGlobalTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GlobalTableAlreadyExistsException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 8];
                    case "TableNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0CreateTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0CreateTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0CreateTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0CreateTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DeleteBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteBackupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BackupInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#BackupInUseException": return [3 /*break*/, 2];
                    case "BackupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#BackupNotFoundException": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 6];
                    case "InvalidEndpointException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DeleteItemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteItemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteItemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteItemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "RequestLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "TransactionConflictException": return [3 /*break*/, 16];
                    case "com.amazonaws.dynamodb#TransactionConflictException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DeleteTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DeleteTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DeleteTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DeleteTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeBackupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BackupNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#BackupNotFoundException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeContinuousBackupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeContinuousBackupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeContinuousBackupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeContinuousBackupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "TableNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeContributorInsightsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeContributorInsightsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeContributorInsightsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeContributorInsightsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeEndpointsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeEndpointsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeEndpointsResponse(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeEndpointsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, parsedBody, message;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = [__assign({}, output)];
                _b = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_b.body = _c.sent(), _b)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                switch (errorCode) {
                    default:
                        parsedBody = parsedOutput.body;
                        errorCode = parsedBody.code || parsedBody.Code || errorCode;
                        response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                }
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeExportCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeExportCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeExportOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeExportCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ExportNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ExportNotFoundException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExportNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeGlobalTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeGlobalTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeGlobalTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeGlobalTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeGlobalTableSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeGlobalTableSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeGlobalTableSettingsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeGlobalTableSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeKinesisStreamingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeKinesisStreamingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeLimitsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeLimitsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeLimitsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeLimitsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeTableReplicaAutoScalingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeTableReplicaAutoScalingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DescribeTimeToLiveCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DescribeTimeToLiveCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0DescribeTimeToLiveOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DescribeTimeToLiveCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0DisableKinesisStreamingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0DisableKinesisStreamingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0EnableKinesisStreamingDestinationCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0KinesisStreamingDestinationOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0EnableKinesisStreamingDestinationCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ExecuteStatementCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExecuteStatementCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExecuteStatementOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExecuteStatementCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "DuplicateItemException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#DuplicateItemException": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 6];
                    case "ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "RequestLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "TransactionConflictException": return [3 /*break*/, 16];
                    case "com.amazonaws.dynamodb#TransactionConflictException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0DuplicateItemExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ExecuteTransactionCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExecuteTransactionCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExecuteTransactionOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExecuteTransactionCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "RequestLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TransactionCanceledException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TransactionCanceledException": return [3 /*break*/, 12];
                    case "TransactionInProgressException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#TransactionInProgressException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ExportTableToPointInTimeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ExportTableToPointInTimeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ExportTableToPointInTimeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ExportTableToPointInTimeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ExportConflictException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ExportConflictException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidExportTimeException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidExportTimeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 8];
                    case "PointInTimeRecoveryUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException": return [3 /*break*/, 10];
                    case "TableNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ExportConflictExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidExportTimeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0GetItemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0GetItemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0GetItemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0GetItemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "RequestLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ListBackupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListBackupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListBackupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListBackupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ListContributorInsightsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListContributorInsightsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListContributorInsightsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListContributorInsightsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ListExportsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListExportsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListExportsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListExportsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ListGlobalTablesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListGlobalTablesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListGlobalTablesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListGlobalTablesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ListTablesCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListTablesCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListTablesOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListTablesCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ListTagsOfResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ListTagsOfResourceCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ListTagsOfResourceOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ListTagsOfResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, parsedBody, message;
    var _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _a = [__assign({}, output)];
                _f = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_f.body = _g.sent(), _f)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ResourceNotFoundException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_g.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 9];
            case 8:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _g.label = 9;
            case 9:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0PutItemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0PutItemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0PutItemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0PutItemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "RequestLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "TransactionConflictException": return [3 /*break*/, 16];
                    case "com.amazonaws.dynamodb#TransactionConflictException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0QueryCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0QueryCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0QueryOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0QueryCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "RequestLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0RestoreTableFromBackupCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RestoreTableFromBackupCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0RestoreTableFromBackupOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0RestoreTableFromBackupCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "BackupInUseException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#BackupInUseException": return [3 /*break*/, 2];
                    case "BackupNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#BackupNotFoundException": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 6];
                    case "InvalidEndpointException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 10];
                    case "TableAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TableAlreadyExistsException": return [3 /*break*/, 12];
                    case "TableInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#TableInUseException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BackupInUseExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0BackupNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0RestoreTableToPointInTimeCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0RestoreTableToPointInTimeCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0RestoreTableToPointInTimeOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0RestoreTableToPointInTimeCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "InvalidRestoreTimeException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidRestoreTimeException": return [3 /*break*/, 6];
                    case "LimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 8];
                    case "PointInTimeRecoveryUnavailableException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException": return [3 /*break*/, 10];
                    case "TableAlreadyExistsException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TableAlreadyExistsException": return [3 /*break*/, 12];
                    case "TableInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#TableInUseException": return [3 /*break*/, 14];
                    case "TableNotFoundException": return [3 /*break*/, 16];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidRestoreTimeExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableInUseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0ScanCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0ScanCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0ScanOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0ScanCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "RequestLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0TagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0TagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0TransactGetItemsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TransactGetItemsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0TransactGetItemsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0TransactGetItemsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 6];
                    case "RequestLimitExceeded": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                    case "TransactionCanceledException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TransactionCanceledException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0TransactWriteItemsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0TransactWriteItemsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0TransactWriteItemsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0TransactWriteItemsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#IdempotentParameterMismatchException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 8];
                    case "RequestLimitExceeded": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 10];
                    case "ResourceNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 12];
                    case "TransactionCanceledException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#TransactionCanceledException": return [3 /*break*/, 14];
                    case "TransactionInProgressException": return [3 /*break*/, 16];
                    case "com.amazonaws.dynamodb#TransactionInProgressException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionCanceledExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionInProgressExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UntagResourceCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UntagResourceCommandError(output, context)];
                }
                return [4 /*yield*/, collectBody(output.body, context)];
            case 1:
                _a.sent();
                response = {
                    $metadata: deserializeMetadata(output),
                };
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UntagResourceCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateContinuousBackupsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateContinuousBackupsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateContinuousBackupsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateContinuousBackupsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ContinuousBackupsUnavailableException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "TableNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateContributorInsightsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateContributorInsightsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateContributorInsightsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateContributorInsightsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, parsedBody, message;
    var _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _a = [__assign({}, output)];
                _e = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_e.body = _f.sent(), _e)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "ResourceNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 4];
                }
                return [3 /*break*/, 6];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_f.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 7];
            case 6:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _f.label = 7;
            case 7:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateGlobalTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateGlobalTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateGlobalTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateGlobalTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, parsedBody, message;
    var _j;
    return __generator(this, function (_k) {
        switch (_k.label) {
            case 0:
                _a = [__assign({}, output)];
                _j = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_j.body = _k.sent(), _j)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "ReplicaAlreadyExistsException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException": return [3 /*break*/, 8];
                    case "ReplicaNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ReplicaNotFoundException": return [3 /*break*/, 10];
                    case "TableNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#TableNotFoundException": return [3 /*break*/, 12];
                }
                return [3 /*break*/, 14];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TableNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_k.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 15];
            case 14:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _k.label = 15;
            case 15:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateGlobalTableSettingsCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateGlobalTableSettingsCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateGlobalTableSettingsOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateGlobalTableSettingsCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, parsedBody, message;
    var _k;
    return __generator(this, function (_l) {
        switch (_l.label) {
            case 0:
                _a = [__assign({}, output)];
                _k = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_k.body = _l.sent(), _k)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#GlobalTableNotFoundException": return [3 /*break*/, 2];
                    case "IndexNotFoundException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#IndexNotFoundException": return [3 /*break*/, 4];
                    case "InternalServerError": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 6];
                    case "InvalidEndpointException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 8];
                    case "LimitExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 10];
                    case "ReplicaNotFoundException": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#ReplicaNotFoundException": return [3 /*break*/, 12];
                    case "ResourceInUseException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 14];
                }
                return [3 /*break*/, 16];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0GlobalTableNotFoundExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0IndexNotFoundExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ReplicaNotFoundExceptionResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_l.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 17];
            case 16:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _l.label = 17;
            case 17:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateItemCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateItemCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateItemOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateItemCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, _h, _j, _k, parsedBody, message;
    var _l;
    return __generator(this, function (_m) {
        switch (_m.label) {
            case 0:
                _a = [__assign({}, output)];
                _l = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_l.body = _m.sent(), _l)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#ConditionalCheckFailedException": return [3 /*break*/, 2];
                    case "InternalServerError": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 4];
                    case "InvalidEndpointException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 6];
                    case "ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException": return [3 /*break*/, 8];
                    case "ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException": return [3 /*break*/, 10];
                    case "RequestLimitExceeded": return [3 /*break*/, 12];
                    case "com.amazonaws.dynamodb#RequestLimitExceeded": return [3 /*break*/, 12];
                    case "ResourceNotFoundException": return [3 /*break*/, 14];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 14];
                    case "TransactionConflictException": return [3 /*break*/, 16];
                    case "com.amazonaws.dynamodb#TransactionConflictException": return [3 /*break*/, 16];
                }
                return [3 /*break*/, 18];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ConditionalCheckFailedExceptionResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 12:
                _h = [{}];
                return [4 /*yield*/, deserializeAws_json1_0RequestLimitExceededResponse(parsedOutput, context)];
            case 13:
                response = __assign.apply(void 0, [__assign.apply(void 0, _h.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 14:
                _j = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 15:
                response = __assign.apply(void 0, [__assign.apply(void 0, _j.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 16:
                _k = [{}];
                return [4 /*yield*/, deserializeAws_json1_0TransactionConflictExceptionResponse(parsedOutput, context)];
            case 17:
                response = __assign.apply(void 0, [__assign.apply(void 0, _k.concat([(_m.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 19];
            case 18:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _m.label = 19;
            case 19:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateTableCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateTableCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateTableOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateTableCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateTableReplicaAutoScalingCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateTableReplicaAutoScalingCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, parsedBody, message;
    var _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _a = [__assign({}, output)];
                _g = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_g.body = _h.sent(), _g)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "LimitExceededException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 4];
                    case "ResourceInUseException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 6];
                    case "ResourceNotFoundException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 8];
                }
                return [3 /*break*/, 10];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_h.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 11];
            case 10:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _h.label = 11;
            case 11:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
export var deserializeAws_json1_0UpdateTimeToLiveCommand = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var data, contents, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (output.statusCode >= 300) {
                    return [2 /*return*/, deserializeAws_json1_0UpdateTimeToLiveCommandError(output, context)];
                }
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                data = _a.sent();
                contents = {};
                contents = deserializeAws_json1_0UpdateTimeToLiveOutput(data, context);
                response = __assign({ $metadata: deserializeMetadata(output) }, contents);
                return [2 /*return*/, Promise.resolve(response)];
        }
    });
}); };
var deserializeAws_json1_0UpdateTimeToLiveCommandError = function (output, context) { return __awaiter(void 0, void 0, void 0, function () {
    var parsedOutput, _a, response, errorCode, _b, _c, _d, _e, _f, _g, parsedBody, message;
    var _h;
    return __generator(this, function (_j) {
        switch (_j.label) {
            case 0:
                _a = [__assign({}, output)];
                _h = {};
                return [4 /*yield*/, parseBody(output.body, context)];
            case 1:
                parsedOutput = __assign.apply(void 0, _a.concat([(_h.body = _j.sent(), _h)]));
                errorCode = "UnknownError";
                errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
                _b = errorCode;
                switch (_b) {
                    case "InternalServerError": return [3 /*break*/, 2];
                    case "com.amazonaws.dynamodb#InternalServerError": return [3 /*break*/, 2];
                    case "InvalidEndpointException": return [3 /*break*/, 4];
                    case "com.amazonaws.dynamodb#InvalidEndpointException": return [3 /*break*/, 4];
                    case "LimitExceededException": return [3 /*break*/, 6];
                    case "com.amazonaws.dynamodb#LimitExceededException": return [3 /*break*/, 6];
                    case "ResourceInUseException": return [3 /*break*/, 8];
                    case "com.amazonaws.dynamodb#ResourceInUseException": return [3 /*break*/, 8];
                    case "ResourceNotFoundException": return [3 /*break*/, 10];
                    case "com.amazonaws.dynamodb#ResourceNotFoundException": return [3 /*break*/, 10];
                }
                return [3 /*break*/, 12];
            case 2:
                _c = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InternalServerErrorResponse(parsedOutput, context)];
            case 3:
                response = __assign.apply(void 0, [__assign.apply(void 0, _c.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 4:
                _d = [{}];
                return [4 /*yield*/, deserializeAws_json1_0InvalidEndpointExceptionResponse(parsedOutput, context)];
            case 5:
                response = __assign.apply(void 0, [__assign.apply(void 0, _d.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 6:
                _e = [{}];
                return [4 /*yield*/, deserializeAws_json1_0LimitExceededExceptionResponse(parsedOutput, context)];
            case 7:
                response = __assign.apply(void 0, [__assign.apply(void 0, _e.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 8:
                _f = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceInUseExceptionResponse(parsedOutput, context)];
            case 9:
                response = __assign.apply(void 0, [__assign.apply(void 0, _f.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 10:
                _g = [{}];
                return [4 /*yield*/, deserializeAws_json1_0ResourceNotFoundExceptionResponse(parsedOutput, context)];
            case 11:
                response = __assign.apply(void 0, [__assign.apply(void 0, _g.concat([(_j.sent())])), { name: errorCode, $metadata: deserializeMetadata(output) }]);
                return [3 /*break*/, 13];
            case 12:
                parsedBody = parsedOutput.body;
                errorCode = parsedBody.code || parsedBody.Code || errorCode;
                response = __assign(__assign({}, parsedBody), { name: "" + errorCode, message: parsedBody.message || parsedBody.Message || errorCode, $fault: "client", $metadata: deserializeMetadata(output) });
                _j.label = 13;
            case 13:
                message = response.message || response.Message || errorCode;
                response.message = message;
                delete response.Message;
                return [2 /*return*/, Promise.reject(Object.assign(new Error(message), response))];
        }
    });
}); };
var deserializeAws_json1_0BackupInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0BackupInUseException(body, context);
        contents = __assign({ name: "BackupInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0BackupNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0BackupNotFoundException(body, context);
        contents = __assign({ name: "BackupNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ConditionalCheckFailedExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ConditionalCheckFailedException(body, context);
        contents = __assign({ name: "ConditionalCheckFailedException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ContinuousBackupsUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ContinuousBackupsUnavailableException(body, context);
        contents = __assign({ name: "ContinuousBackupsUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0DuplicateItemExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0DuplicateItemException(body, context);
        contents = __assign({ name: "DuplicateItemException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ExportConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ExportConflictException(body, context);
        contents = __assign({ name: "ExportConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ExportNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ExportNotFoundException(body, context);
        contents = __assign({ name: "ExportNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0GlobalTableAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0GlobalTableAlreadyExistsException(body, context);
        contents = __assign({ name: "GlobalTableAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0GlobalTableNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0GlobalTableNotFoundException(body, context);
        contents = __assign({ name: "GlobalTableNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0IdempotentParameterMismatchExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0IdempotentParameterMismatchException(body, context);
        contents = __assign({ name: "IdempotentParameterMismatchException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0IndexNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0IndexNotFoundException(body, context);
        contents = __assign({ name: "IndexNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InternalServerErrorResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InternalServerError(body, context);
        contents = __assign({ name: "InternalServerError", $fault: "server", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidEndpointExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidEndpointException(body, context);
        contents = __assign({ name: "InvalidEndpointException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidExportTimeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidExportTimeException(body, context);
        contents = __assign({ name: "InvalidExportTimeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0InvalidRestoreTimeExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0InvalidRestoreTimeException(body, context);
        contents = __assign({ name: "InvalidRestoreTimeException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ItemCollectionSizeLimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ItemCollectionSizeLimitExceededException(body, context);
        contents = __assign({ name: "ItemCollectionSizeLimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0LimitExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0LimitExceededException(body, context);
        contents = __assign({ name: "LimitExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0PointInTimeRecoveryUnavailableExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0PointInTimeRecoveryUnavailableException(body, context);
        contents = __assign({ name: "PointInTimeRecoveryUnavailableException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ProvisionedThroughputExceededExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ProvisionedThroughputExceededException(body, context);
        contents = __assign({ name: "ProvisionedThroughputExceededException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ReplicaAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ReplicaAlreadyExistsException(body, context);
        contents = __assign({ name: "ReplicaAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ReplicaNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ReplicaNotFoundException(body, context);
        contents = __assign({ name: "ReplicaNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0RequestLimitExceededResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0RequestLimitExceeded(body, context);
        contents = __assign({ name: "RequestLimitExceeded", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ResourceInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceInUseException(body, context);
        contents = __assign({ name: "ResourceInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0ResourceNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0ResourceNotFoundException(body, context);
        contents = __assign({ name: "ResourceNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TableAlreadyExistsExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TableAlreadyExistsException(body, context);
        contents = __assign({ name: "TableAlreadyExistsException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TableInUseExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TableInUseException(body, context);
        contents = __assign({ name: "TableInUseException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TableNotFoundExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TableNotFoundException(body, context);
        contents = __assign({ name: "TableNotFoundException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TransactionCanceledExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TransactionCanceledException(body, context);
        contents = __assign({ name: "TransactionCanceledException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TransactionConflictExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TransactionConflictException(body, context);
        contents = __assign({ name: "TransactionConflictException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var deserializeAws_json1_0TransactionInProgressExceptionResponse = function (parsedOutput, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, deserialized, contents;
    return __generator(this, function (_a) {
        body = parsedOutput.body;
        deserialized = deserializeAws_json1_0TransactionInProgressException(body, context);
        contents = __assign({ name: "TransactionInProgressException", $fault: "client", $metadata: deserializeMetadata(parsedOutput) }, deserialized);
        return [2 /*return*/, contents];
    });
}); };
var serializeAws_json1_0AttributeDefinition = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.AttributeType !== undefined && input.AttributeType !== null && { AttributeType: input.AttributeType }));
};
var serializeAws_json1_0AttributeDefinitions = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeDefinition(entry, context);
    });
};
var serializeAws_json1_0AttributeNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0AttributeUpdates = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0AttributeValueUpdate(value, context), _b));
    }, {});
};
var serializeAws_json1_0AttributeValue = function (input, context) {
    return AttributeValue.visit(input, {
        B: function (value) { return ({ B: context.base64Encoder(value) }); },
        BOOL: function (value) { return ({ BOOL: value }); },
        BS: function (value) { return ({ BS: serializeAws_json1_0BinarySetAttributeValue(value, context) }); },
        L: function (value) { return ({ L: serializeAws_json1_0ListAttributeValue(value, context) }); },
        M: function (value) { return ({ M: serializeAws_json1_0MapAttributeValue(value, context) }); },
        N: function (value) { return ({ N: value }); },
        NS: function (value) { return ({ NS: serializeAws_json1_0NumberSetAttributeValue(value, context) }); },
        NULL: function (value) { return ({ NULL: value }); },
        S: function (value) { return ({ S: value }); },
        SS: function (value) { return ({ SS: serializeAws_json1_0StringSetAttributeValue(value, context) }); },
        _: function (name, value) { return ({ name: value }); },
    });
};
var serializeAws_json1_0AttributeValueList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeValue(entry, context);
    });
};
var serializeAws_json1_0AttributeValueUpdate = function (input, context) {
    return __assign(__assign({}, (input.Action !== undefined && input.Action !== null && { Action: input.Action })), (input.Value !== undefined &&
        input.Value !== null && { Value: serializeAws_json1_0AttributeValue(input.Value, context) }));
};
var serializeAws_json1_0AutoScalingPolicyUpdate = function (input, context) {
    return __assign(__assign({}, (input.PolicyName !== undefined && input.PolicyName !== null && { PolicyName: input.PolicyName })), (input.TargetTrackingScalingPolicyConfiguration !== undefined &&
        input.TargetTrackingScalingPolicyConfiguration !== null && {
        TargetTrackingScalingPolicyConfiguration: serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(input.TargetTrackingScalingPolicyConfiguration, context),
    }));
};
var serializeAws_json1_0AutoScalingSettingsUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AutoScalingDisabled !== undefined &&
        input.AutoScalingDisabled !== null && { AutoScalingDisabled: input.AutoScalingDisabled })), (input.AutoScalingRoleArn !== undefined &&
        input.AutoScalingRoleArn !== null && { AutoScalingRoleArn: input.AutoScalingRoleArn })), (input.MaximumUnits !== undefined && input.MaximumUnits !== null && { MaximumUnits: input.MaximumUnits })), (input.MinimumUnits !== undefined && input.MinimumUnits !== null && { MinimumUnits: input.MinimumUnits })), (input.ScalingPolicyUpdate !== undefined &&
        input.ScalingPolicyUpdate !== null && {
        ScalingPolicyUpdate: serializeAws_json1_0AutoScalingPolicyUpdate(input.ScalingPolicyUpdate, context),
    }));
};
var serializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.DisableScaleIn !== undefined &&
        input.DisableScaleIn !== null && { DisableScaleIn: input.DisableScaleIn })), (input.ScaleInCooldown !== undefined &&
        input.ScaleInCooldown !== null && { ScaleInCooldown: input.ScaleInCooldown })), (input.ScaleOutCooldown !== undefined &&
        input.ScaleOutCooldown !== null && { ScaleOutCooldown: input.ScaleOutCooldown })), (input.TargetValue !== undefined && input.TargetValue !== null && { TargetValue: input.TargetValue }));
};
var serializeAws_json1_0BatchExecuteStatementInput = function (input, context) {
    return __assign({}, (input.Statements !== undefined &&
        input.Statements !== null && { Statements: serializeAws_json1_0PartiQLBatchRequest(input.Statements, context) }));
};
var serializeAws_json1_0BatchGetItemInput = function (input, context) {
    return __assign(__assign({}, (input.RequestItems !== undefined &&
        input.RequestItems !== null && {
        RequestItems: serializeAws_json1_0BatchGetRequestMap(input.RequestItems, context),
    })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity }));
};
var serializeAws_json1_0BatchGetRequestMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0KeysAndAttributes(value, context), _b));
    }, {});
};
var serializeAws_json1_0BatchStatementRequest = function (input, context) {
    return __assign(__assign(__assign({}, (input.ConsistentRead !== undefined &&
        input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead })), (input.Parameters !== undefined &&
        input.Parameters !== null && {
        Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
    })), (input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }));
};
var serializeAws_json1_0BatchWriteItemInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.RequestItems !== undefined &&
        input.RequestItems !== null && {
        RequestItems: serializeAws_json1_0BatchWriteItemRequestMap(input.RequestItems, context),
    })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ReturnItemCollectionMetrics !== undefined &&
        input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics }));
};
var serializeAws_json1_0BatchWriteItemRequestMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0WriteRequests(value, context), _b));
    }, {});
};
var serializeAws_json1_0BinarySetAttributeValue = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return context.base64Encoder(entry);
    });
};
var serializeAws_json1_0Condition = function (input, context) {
    return __assign(__assign({}, (input.AttributeValueList !== undefined &&
        input.AttributeValueList !== null && {
        AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context),
    })), (input.ComparisonOperator !== undefined &&
        input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }));
};
var serializeAws_json1_0ConditionCheck = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ReturnValuesOnConditionCheckFailure !== undefined &&
        input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0CreateBackupInput = function (input, context) {
    return __assign(__assign({}, (input.BackupName !== undefined && input.BackupName !== null && { BackupName: input.BackupName })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0CreateGlobalSecondaryIndexAction = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) })), (input.Projection !== undefined &&
        input.Projection !== null && { Projection: serializeAws_json1_0Projection(input.Projection, context) })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }));
};
var serializeAws_json1_0CreateGlobalTableInput = function (input, context) {
    return __assign(__assign({}, (input.GlobalTableName !== undefined &&
        input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName })), (input.ReplicationGroup !== undefined &&
        input.ReplicationGroup !== null && {
        ReplicationGroup: serializeAws_json1_0ReplicaList(input.ReplicationGroup, context),
    }));
};
var serializeAws_json1_0CreateReplicaAction = function (input, context) {
    return __assign({}, (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0CreateReplicationGroupMemberAction = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GlobalSecondaryIndexes !== undefined &&
        input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    })), (input.KMSMasterKeyId !== undefined &&
        input.KMSMasterKeyId !== null && { KMSMasterKeyId: input.KMSMasterKeyId })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    })), (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0CreateTableInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeDefinitions !== undefined &&
        input.AttributeDefinitions !== null && {
        AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
    })), (input.BillingMode !== undefined && input.BillingMode !== null && { BillingMode: input.BillingMode })), (input.GlobalSecondaryIndexes !== undefined &&
        input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) })), (input.LocalSecondaryIndexes !== undefined &&
        input.LocalSecondaryIndexes !== null && {
        LocalSecondaryIndexes: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexes, context),
    })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    })), (input.SSESpecification !== undefined &&
        input.SSESpecification !== null && {
        SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
    })), (input.StreamSpecification !== undefined &&
        input.StreamSpecification !== null && {
        StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context),
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }));
};
var serializeAws_json1_0Delete = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ReturnValuesOnConditionCheckFailure !== undefined &&
        input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DeleteBackupInput = function (input, context) {
    return __assign({}, (input.BackupArn !== undefined && input.BackupArn !== null && { BackupArn: input.BackupArn }));
};
var serializeAws_json1_0DeleteGlobalSecondaryIndexAction = function (input, context) {
    return __assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName }));
};
var serializeAws_json1_0DeleteItemInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ConditionalOperator !== undefined &&
        input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator })), (input.Expected !== undefined &&
        input.Expected !== null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ReturnItemCollectionMetrics !== undefined &&
        input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics })), (input.ReturnValues !== undefined && input.ReturnValues !== null && { ReturnValues: input.ReturnValues })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DeleteReplicaAction = function (input, context) {
    return __assign({}, (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0DeleteReplicationGroupMemberAction = function (input, context) {
    return __assign({}, (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0DeleteRequest = function (input, context) {
    return __assign({}, (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) }));
};
var serializeAws_json1_0DeleteTableInput = function (input, context) {
    return __assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DescribeBackupInput = function (input, context) {
    return __assign({}, (input.BackupArn !== undefined && input.BackupArn !== null && { BackupArn: input.BackupArn }));
};
var serializeAws_json1_0DescribeContinuousBackupsInput = function (input, context) {
    return __assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DescribeContributorInsightsInput = function (input, context) {
    return __assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DescribeEndpointsRequest = function (input, context) {
    return {};
};
var serializeAws_json1_0DescribeExportInput = function (input, context) {
    return __assign({}, (input.ExportArn !== undefined && input.ExportArn !== null && { ExportArn: input.ExportArn }));
};
var serializeAws_json1_0DescribeGlobalTableInput = function (input, context) {
    return __assign({}, (input.GlobalTableName !== undefined &&
        input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }));
};
var serializeAws_json1_0DescribeGlobalTableSettingsInput = function (input, context) {
    return __assign({}, (input.GlobalTableName !== undefined &&
        input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName }));
};
var serializeAws_json1_0DescribeKinesisStreamingDestinationInput = function (input, context) {
    return __assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DescribeLimitsInput = function (input, context) {
    return {};
};
var serializeAws_json1_0DescribeTableInput = function (input, context) {
    return __assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DescribeTableReplicaAutoScalingInput = function (input, context) {
    return __assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0DescribeTimeToLiveInput = function (input, context) {
    return __assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0ExecuteStatementInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConsistentRead !== undefined &&
        input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.Parameters !== undefined &&
        input.Parameters !== null && {
        Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
    })), (input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }));
};
var serializeAws_json1_0ExecuteTransactionInput = function (input, context) {
    var _a;
    return __assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.TransactStatements !== undefined &&
        input.TransactStatements !== null && {
        TransactStatements: serializeAws_json1_0ParameterizedStatements(input.TransactStatements, context),
    }));
};
var serializeAws_json1_0ExpectedAttributeMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0ExpectedAttributeValue(value, context), _b));
    }, {});
};
var serializeAws_json1_0ExpectedAttributeValue = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.AttributeValueList !== undefined &&
        input.AttributeValueList !== null && {
        AttributeValueList: serializeAws_json1_0AttributeValueList(input.AttributeValueList, context),
    })), (input.ComparisonOperator !== undefined &&
        input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator })), (input.Exists !== undefined && input.Exists !== null && { Exists: input.Exists })), (input.Value !== undefined &&
        input.Value !== null && { Value: serializeAws_json1_0AttributeValue(input.Value, context) }));
};
var serializeAws_json1_0ExportTableToPointInTimeInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ ClientToken: (_a = input.ClientToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.ExportFormat !== undefined && input.ExportFormat !== null && { ExportFormat: input.ExportFormat })), (input.ExportTime !== undefined &&
        input.ExportTime !== null && { ExportTime: Math.round(input.ExportTime.getTime() / 1000) })), (input.S3Bucket !== undefined && input.S3Bucket !== null && { S3Bucket: input.S3Bucket })), (input.S3BucketOwner !== undefined && input.S3BucketOwner !== null && { S3BucketOwner: input.S3BucketOwner })), (input.S3Prefix !== undefined && input.S3Prefix !== null && { S3Prefix: input.S3Prefix })), (input.S3SseAlgorithm !== undefined &&
        input.S3SseAlgorithm !== null && { S3SseAlgorithm: input.S3SseAlgorithm })), (input.S3SseKmsKeyId !== undefined && input.S3SseKmsKeyId !== null && { S3SseKmsKeyId: input.S3SseKmsKeyId })), (input.TableArn !== undefined && input.TableArn !== null && { TableArn: input.TableArn }));
};
var serializeAws_json1_0ExpressionAttributeNameMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var serializeAws_json1_0ExpressionAttributeValueMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var serializeAws_json1_0FilterConditionMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0Condition(value, context), _b));
    }, {});
};
var serializeAws_json1_0Get = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ProjectionExpression !== undefined &&
        input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0GetItemInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributesToGet !== undefined &&
        input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    })), (input.ConsistentRead !== undefined &&
        input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ProjectionExpression !== undefined &&
        input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0GlobalSecondaryIndex = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) })), (input.Projection !== undefined &&
        input.Projection !== null && { Projection: serializeAws_json1_0Projection(input.Projection, context) })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }));
};
var serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate = function (input, context) {
    return __assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined &&
        input.ProvisionedWriteCapacityAutoScalingUpdate !== null && {
        ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context),
    }));
};
var serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
var serializeAws_json1_0GlobalSecondaryIndexList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalSecondaryIndex(entry, context);
    });
};
var serializeAws_json1_0GlobalSecondaryIndexUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.Create !== undefined &&
        input.Create !== null && { Create: serializeAws_json1_0CreateGlobalSecondaryIndexAction(input.Create, context) })), (input.Delete !== undefined &&
        input.Delete !== null && { Delete: serializeAws_json1_0DeleteGlobalSecondaryIndexAction(input.Delete, context) })), (input.Update !== undefined &&
        input.Update !== null && { Update: serializeAws_json1_0UpdateGlobalSecondaryIndexAction(input.Update, context) }));
};
var serializeAws_json1_0GlobalSecondaryIndexUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalSecondaryIndexUpdate(entry, context);
    });
};
var serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== undefined &&
        input.ProvisionedWriteCapacityAutoScalingSettingsUpdate !== null && {
        ProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingSettingsUpdate, context),
    })), (input.ProvisionedWriteCapacityUnits !== undefined &&
        input.ProvisionedWriteCapacityUnits !== null && {
        ProvisionedWriteCapacityUnits: input.ProvisionedWriteCapacityUnits,
    }));
};
var serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
var serializeAws_json1_0Key = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var serializeAws_json1_0KeyConditions = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0Condition(value, context), _b));
    }, {});
};
var serializeAws_json1_0KeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Key(entry, context);
    });
};
var serializeAws_json1_0KeysAndAttributes = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign({}, (input.AttributesToGet !== undefined &&
        input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    })), (input.ConsistentRead !== undefined &&
        input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.Keys !== undefined && input.Keys !== null && { Keys: serializeAws_json1_0KeyList(input.Keys, context) })), (input.ProjectionExpression !== undefined &&
        input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression }));
};
var serializeAws_json1_0KeySchema = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0KeySchemaElement(entry, context);
    });
};
var serializeAws_json1_0KeySchemaElement = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.KeyType !== undefined && input.KeyType !== null && { KeyType: input.KeyType }));
};
var serializeAws_json1_0KinesisStreamingDestinationInput = function (input, context) {
    return __assign(__assign({}, (input.StreamArn !== undefined && input.StreamArn !== null && { StreamArn: input.StreamArn })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0ListAttributeValue = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeValue(entry, context);
    });
};
var serializeAws_json1_0ListBackupsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.BackupType !== undefined && input.BackupType !== null && { BackupType: input.BackupType })), (input.ExclusiveStartBackupArn !== undefined &&
        input.ExclusiveStartBackupArn !== null && { ExclusiveStartBackupArn: input.ExclusiveStartBackupArn })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.TimeRangeLowerBound !== undefined &&
        input.TimeRangeLowerBound !== null && {
        TimeRangeLowerBound: Math.round(input.TimeRangeLowerBound.getTime() / 1000),
    })), (input.TimeRangeUpperBound !== undefined &&
        input.TimeRangeUpperBound !== null && {
        TimeRangeUpperBound: Math.round(input.TimeRangeUpperBound.getTime() / 1000),
    }));
};
var serializeAws_json1_0ListContributorInsightsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0ListExportsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults })), (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.TableArn !== undefined && input.TableArn !== null && { TableArn: input.TableArn }));
};
var serializeAws_json1_0ListGlobalTablesInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.ExclusiveStartGlobalTableName !== undefined &&
        input.ExclusiveStartGlobalTableName !== null && {
        ExclusiveStartGlobalTableName: input.ExclusiveStartGlobalTableName,
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0ListTablesInput = function (input, context) {
    return __assign(__assign({}, (input.ExclusiveStartTableName !== undefined &&
        input.ExclusiveStartTableName !== null && { ExclusiveStartTableName: input.ExclusiveStartTableName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }));
};
var serializeAws_json1_0ListTagsOfResourceInput = function (input, context) {
    return __assign(__assign({}, (input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken })), (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }));
};
var serializeAws_json1_0LocalSecondaryIndex = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.KeySchema !== undefined &&
        input.KeySchema !== null && { KeySchema: serializeAws_json1_0KeySchema(input.KeySchema, context) })), (input.Projection !== undefined &&
        input.Projection !== null && { Projection: serializeAws_json1_0Projection(input.Projection, context) }));
};
var serializeAws_json1_0LocalSecondaryIndexList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0LocalSecondaryIndex(entry, context);
    });
};
var serializeAws_json1_0MapAttributeValue = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var serializeAws_json1_0NonKeyAttributeNameList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0NumberSetAttributeValue = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0ParameterizedStatement = function (input, context) {
    return __assign(__assign({}, (input.Parameters !== undefined &&
        input.Parameters !== null && {
        Parameters: serializeAws_json1_0PreparedStatementParameters(input.Parameters, context),
    })), (input.Statement !== undefined && input.Statement !== null && { Statement: input.Statement }));
};
var serializeAws_json1_0ParameterizedStatements = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ParameterizedStatement(entry, context);
    });
};
var serializeAws_json1_0PartiQLBatchRequest = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0BatchStatementRequest(entry, context);
    });
};
var serializeAws_json1_0PointInTimeRecoverySpecification = function (input, context) {
    return __assign({}, (input.PointInTimeRecoveryEnabled !== undefined &&
        input.PointInTimeRecoveryEnabled !== null && { PointInTimeRecoveryEnabled: input.PointInTimeRecoveryEnabled }));
};
var serializeAws_json1_0PreparedStatementParameters = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0AttributeValue(entry, context);
    });
};
var serializeAws_json1_0Projection = function (input, context) {
    return __assign(__assign({}, (input.NonKeyAttributes !== undefined &&
        input.NonKeyAttributes !== null && {
        NonKeyAttributes: serializeAws_json1_0NonKeyAttributeNameList(input.NonKeyAttributes, context),
    })), (input.ProjectionType !== undefined &&
        input.ProjectionType !== null && { ProjectionType: input.ProjectionType }));
};
var serializeAws_json1_0ProvisionedThroughput = function (input, context) {
    return __assign(__assign({}, (input.ReadCapacityUnits !== undefined &&
        input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits })), (input.WriteCapacityUnits !== undefined &&
        input.WriteCapacityUnits !== null && { WriteCapacityUnits: input.WriteCapacityUnits }));
};
var serializeAws_json1_0ProvisionedThroughputOverride = function (input, context) {
    return __assign({}, (input.ReadCapacityUnits !== undefined &&
        input.ReadCapacityUnits !== null && { ReadCapacityUnits: input.ReadCapacityUnits }));
};
var serializeAws_json1_0Put = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Item !== undefined &&
        input.Item !== null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) })), (input.ReturnValuesOnConditionCheckFailure !== undefined &&
        input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0PutItemInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ConditionalOperator !== undefined &&
        input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator })), (input.Expected !== undefined &&
        input.Expected !== null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Item !== undefined &&
        input.Item !== null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ReturnItemCollectionMetrics !== undefined &&
        input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics })), (input.ReturnValues !== undefined && input.ReturnValues !== null && { ReturnValues: input.ReturnValues })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0PutItemInputAttributeMap = function (input, context) {
    return Object.entries(input).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = serializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var serializeAws_json1_0PutRequest = function (input, context) {
    return __assign({}, (input.Item !== undefined &&
        input.Item !== null && { Item: serializeAws_json1_0PutItemInputAttributeMap(input.Item, context) }));
};
var serializeAws_json1_0QueryInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributesToGet !== undefined &&
        input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    })), (input.ConditionalOperator !== undefined &&
        input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator })), (input.ConsistentRead !== undefined &&
        input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead })), (input.ExclusiveStartKey !== undefined &&
        input.ExclusiveStartKey !== null && {
        ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context),
    })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.FilterExpression !== undefined &&
        input.FilterExpression !== null && { FilterExpression: input.FilterExpression })), (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.KeyConditionExpression !== undefined &&
        input.KeyConditionExpression !== null && { KeyConditionExpression: input.KeyConditionExpression })), (input.KeyConditions !== undefined &&
        input.KeyConditions !== null && {
        KeyConditions: serializeAws_json1_0KeyConditions(input.KeyConditions, context),
    })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.ProjectionExpression !== undefined &&
        input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression })), (input.QueryFilter !== undefined &&
        input.QueryFilter !== null && {
        QueryFilter: serializeAws_json1_0FilterConditionMap(input.QueryFilter, context),
    })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ScanIndexForward !== undefined &&
        input.ScanIndexForward !== null && { ScanIndexForward: input.ScanIndexForward })), (input.Select !== undefined && input.Select !== null && { Select: input.Select })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0Replica = function (input, context) {
    return __assign({}, (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0ReplicaAutoScalingUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName })), (input.ReplicaGlobalSecondaryIndexUpdates !== undefined &&
        input.ReplicaGlobalSecondaryIndexUpdates !== null && {
        ReplicaGlobalSecondaryIndexUpdates: serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList(input.ReplicaGlobalSecondaryIndexUpdates, context),
    })), (input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== undefined &&
        input.ReplicaProvisionedReadCapacityAutoScalingUpdate !== null && {
        ReplicaProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingUpdate, context),
    }));
};
var serializeAws_json1_0ReplicaAutoScalingUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaAutoScalingUpdate(entry, context);
    });
};
var serializeAws_json1_0ReplicaGlobalSecondaryIndex = function (input, context) {
    return __assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    }));
};
var serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate = function (input, context) {
    return __assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedReadCapacityAutoScalingUpdate !== undefined &&
        input.ProvisionedReadCapacityAutoScalingUpdate !== null && {
        ProvisionedReadCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingUpdate, context),
    }));
};
var serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
var serializeAws_json1_0ReplicaGlobalSecondaryIndexList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaGlobalSecondaryIndex(entry, context);
    });
};
var serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined &&
        input.ProvisionedReadCapacityAutoScalingSettingsUpdate !== null && {
        ProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedReadCapacityAutoScalingSettingsUpdate, context),
    })), (input.ProvisionedReadCapacityUnits !== undefined &&
        input.ProvisionedReadCapacityUnits !== null && {
        ProvisionedReadCapacityUnits: input.ProvisionedReadCapacityUnits,
    }));
};
var serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
var serializeAws_json1_0ReplicaList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Replica(entry, context);
    });
};
var serializeAws_json1_0ReplicaSettingsUpdate = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName })), (input.ReplicaGlobalSecondaryIndexSettingsUpdate !== undefined &&
        input.ReplicaGlobalSecondaryIndexSettingsUpdate !== null && {
        ReplicaGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsUpdateList(input.ReplicaGlobalSecondaryIndexSettingsUpdate, context),
    })), (input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== undefined &&
        input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate !== null && {
        ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate, context),
    })), (input.ReplicaProvisionedReadCapacityUnits !== undefined &&
        input.ReplicaProvisionedReadCapacityUnits !== null && {
        ReplicaProvisionedReadCapacityUnits: input.ReplicaProvisionedReadCapacityUnits,
    }));
};
var serializeAws_json1_0ReplicaSettingsUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaSettingsUpdate(entry, context);
    });
};
var serializeAws_json1_0ReplicationGroupUpdate = function (input, context) {
    return __assign(__assign(__assign({}, (input.Create !== undefined &&
        input.Create !== null && {
        Create: serializeAws_json1_0CreateReplicationGroupMemberAction(input.Create, context),
    })), (input.Delete !== undefined &&
        input.Delete !== null && {
        Delete: serializeAws_json1_0DeleteReplicationGroupMemberAction(input.Delete, context),
    })), (input.Update !== undefined &&
        input.Update !== null && {
        Update: serializeAws_json1_0UpdateReplicationGroupMemberAction(input.Update, context),
    }));
};
var serializeAws_json1_0ReplicationGroupUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicationGroupUpdate(entry, context);
    });
};
var serializeAws_json1_0ReplicaUpdate = function (input, context) {
    return __assign(__assign({}, (input.Create !== undefined &&
        input.Create !== null && { Create: serializeAws_json1_0CreateReplicaAction(input.Create, context) })), (input.Delete !== undefined &&
        input.Delete !== null && { Delete: serializeAws_json1_0DeleteReplicaAction(input.Delete, context) }));
};
var serializeAws_json1_0ReplicaUpdateList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0ReplicaUpdate(entry, context);
    });
};
var serializeAws_json1_0RestoreTableFromBackupInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BackupArn !== undefined && input.BackupArn !== null && { BackupArn: input.BackupArn })), (input.BillingModeOverride !== undefined &&
        input.BillingModeOverride !== null && { BillingModeOverride: input.BillingModeOverride })), (input.GlobalSecondaryIndexOverride !== undefined &&
        input.GlobalSecondaryIndexOverride !== null && {
        GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context),
    })), (input.LocalSecondaryIndexOverride !== undefined &&
        input.LocalSecondaryIndexOverride !== null && {
        LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context),
    })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context),
    })), (input.SSESpecificationOverride !== undefined &&
        input.SSESpecificationOverride !== null && {
        SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context),
    })), (input.TargetTableName !== undefined &&
        input.TargetTableName !== null && { TargetTableName: input.TargetTableName }));
};
var serializeAws_json1_0RestoreTableToPointInTimeInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.BillingModeOverride !== undefined &&
        input.BillingModeOverride !== null && { BillingModeOverride: input.BillingModeOverride })), (input.GlobalSecondaryIndexOverride !== undefined &&
        input.GlobalSecondaryIndexOverride !== null && {
        GlobalSecondaryIndexOverride: serializeAws_json1_0GlobalSecondaryIndexList(input.GlobalSecondaryIndexOverride, context),
    })), (input.LocalSecondaryIndexOverride !== undefined &&
        input.LocalSecondaryIndexOverride !== null && {
        LocalSecondaryIndexOverride: serializeAws_json1_0LocalSecondaryIndexList(input.LocalSecondaryIndexOverride, context),
    })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughputOverride, context),
    })), (input.RestoreDateTime !== undefined &&
        input.RestoreDateTime !== null && { RestoreDateTime: Math.round(input.RestoreDateTime.getTime() / 1000) })), (input.SSESpecificationOverride !== undefined &&
        input.SSESpecificationOverride !== null && {
        SSESpecificationOverride: serializeAws_json1_0SSESpecification(input.SSESpecificationOverride, context),
    })), (input.SourceTableArn !== undefined &&
        input.SourceTableArn !== null && { SourceTableArn: input.SourceTableArn })), (input.SourceTableName !== undefined &&
        input.SourceTableName !== null && { SourceTableName: input.SourceTableName })), (input.TargetTableName !== undefined &&
        input.TargetTableName !== null && { TargetTableName: input.TargetTableName })), (input.UseLatestRestorableTime !== undefined &&
        input.UseLatestRestorableTime !== null && { UseLatestRestorableTime: input.UseLatestRestorableTime }));
};
var serializeAws_json1_0ScanInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributesToGet !== undefined &&
        input.AttributesToGet !== null && {
        AttributesToGet: serializeAws_json1_0AttributeNameList(input.AttributesToGet, context),
    })), (input.ConditionalOperator !== undefined &&
        input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator })), (input.ConsistentRead !== undefined &&
        input.ConsistentRead !== null && { ConsistentRead: input.ConsistentRead })), (input.ExclusiveStartKey !== undefined &&
        input.ExclusiveStartKey !== null && {
        ExclusiveStartKey: serializeAws_json1_0Key(input.ExclusiveStartKey, context),
    })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.FilterExpression !== undefined &&
        input.FilterExpression !== null && { FilterExpression: input.FilterExpression })), (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit })), (input.ProjectionExpression !== undefined &&
        input.ProjectionExpression !== null && { ProjectionExpression: input.ProjectionExpression })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ScanFilter !== undefined &&
        input.ScanFilter !== null && { ScanFilter: serializeAws_json1_0FilterConditionMap(input.ScanFilter, context) })), (input.Segment !== undefined && input.Segment !== null && { Segment: input.Segment })), (input.Select !== undefined && input.Select !== null && { Select: input.Select })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.TotalSegments !== undefined && input.TotalSegments !== null && { TotalSegments: input.TotalSegments }));
};
var serializeAws_json1_0SSESpecification = function (input, context) {
    return __assign(__assign(__assign({}, (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled })), (input.KMSMasterKeyId !== undefined &&
        input.KMSMasterKeyId !== null && { KMSMasterKeyId: input.KMSMasterKeyId })), (input.SSEType !== undefined && input.SSEType !== null && { SSEType: input.SSEType }));
};
var serializeAws_json1_0StreamSpecification = function (input, context) {
    return __assign(__assign({}, (input.StreamEnabled !== undefined && input.StreamEnabled !== null && { StreamEnabled: input.StreamEnabled })), (input.StreamViewType !== undefined &&
        input.StreamViewType !== null && { StreamViewType: input.StreamViewType }));
};
var serializeAws_json1_0StringSetAttributeValue = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0Tag = function (input, context) {
    return __assign(__assign({}, (input.Key !== undefined && input.Key !== null && { Key: input.Key })), (input.Value !== undefined && input.Value !== null && { Value: input.Value }));
};
var serializeAws_json1_0TagKeyList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var serializeAws_json1_0TagList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0Tag(entry, context);
    });
};
var serializeAws_json1_0TagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_json1_0TagList(input.Tags, context) }));
};
var serializeAws_json1_0TimeToLiveSpecification = function (input, context) {
    return __assign(__assign({}, (input.AttributeName !== undefined && input.AttributeName !== null && { AttributeName: input.AttributeName })), (input.Enabled !== undefined && input.Enabled !== null && { Enabled: input.Enabled }));
};
var serializeAws_json1_0TransactGetItem = function (input, context) {
    return __assign({}, (input.Get !== undefined && input.Get !== null && { Get: serializeAws_json1_0Get(input.Get, context) }));
};
var serializeAws_json1_0TransactGetItemList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0TransactGetItem(entry, context);
    });
};
var serializeAws_json1_0TransactGetItemsInput = function (input, context) {
    return __assign(__assign({}, (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.TransactItems !== undefined &&
        input.TransactItems !== null && {
        TransactItems: serializeAws_json1_0TransactGetItemList(input.TransactItems, context),
    }));
};
var serializeAws_json1_0TransactWriteItem = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.ConditionCheck !== undefined &&
        input.ConditionCheck !== null && {
        ConditionCheck: serializeAws_json1_0ConditionCheck(input.ConditionCheck, context),
    })), (input.Delete !== undefined &&
        input.Delete !== null && { Delete: serializeAws_json1_0Delete(input.Delete, context) })), (input.Put !== undefined && input.Put !== null && { Put: serializeAws_json1_0Put(input.Put, context) })), (input.Update !== undefined &&
        input.Update !== null && { Update: serializeAws_json1_0Update(input.Update, context) }));
};
var serializeAws_json1_0TransactWriteItemList = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0TransactWriteItem(entry, context);
    });
};
var serializeAws_json1_0TransactWriteItemsInput = function (input, context) {
    var _a;
    return __assign(__assign(__assign({ ClientRequestToken: (_a = input.ClientRequestToken) !== null && _a !== void 0 ? _a : generateIdempotencyToken() }, (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ReturnItemCollectionMetrics !== undefined &&
        input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics })), (input.TransactItems !== undefined &&
        input.TransactItems !== null && {
        TransactItems: serializeAws_json1_0TransactWriteItemList(input.TransactItems, context),
    }));
};
var serializeAws_json1_0UntagResourceInput = function (input, context) {
    return __assign(__assign({}, (input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn })), (input.TagKeys !== undefined &&
        input.TagKeys !== null && { TagKeys: serializeAws_json1_0TagKeyList(input.TagKeys, context) }));
};
var serializeAws_json1_0Update = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ReturnValuesOnConditionCheckFailure !== undefined &&
        input.ReturnValuesOnConditionCheckFailure !== null && {
        ReturnValuesOnConditionCheckFailure: input.ReturnValuesOnConditionCheckFailure,
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.UpdateExpression !== undefined &&
        input.UpdateExpression !== null && { UpdateExpression: input.UpdateExpression }));
};
var serializeAws_json1_0UpdateContinuousBackupsInput = function (input, context) {
    return __assign(__assign({}, (input.PointInTimeRecoverySpecification !== undefined &&
        input.PointInTimeRecoverySpecification !== null && {
        PointInTimeRecoverySpecification: serializeAws_json1_0PointInTimeRecoverySpecification(input.PointInTimeRecoverySpecification, context),
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0UpdateContributorInsightsInput = function (input, context) {
    return __assign(__assign(__assign({}, (input.ContributorInsightsAction !== undefined &&
        input.ContributorInsightsAction !== null && { ContributorInsightsAction: input.ContributorInsightsAction })), (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0UpdateGlobalSecondaryIndexAction = function (input, context) {
    return __assign(__assign({}, (input.IndexName !== undefined && input.IndexName !== null && { IndexName: input.IndexName })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    }));
};
var serializeAws_json1_0UpdateGlobalTableInput = function (input, context) {
    return __assign(__assign({}, (input.GlobalTableName !== undefined &&
        input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName })), (input.ReplicaUpdates !== undefined &&
        input.ReplicaUpdates !== null && {
        ReplicaUpdates: serializeAws_json1_0ReplicaUpdateList(input.ReplicaUpdates, context),
    }));
};
var serializeAws_json1_0UpdateGlobalTableSettingsInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign({}, (input.GlobalTableBillingMode !== undefined &&
        input.GlobalTableBillingMode !== null && { GlobalTableBillingMode: input.GlobalTableBillingMode })), (input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== undefined &&
        input.GlobalTableGlobalSecondaryIndexSettingsUpdate !== null && {
        GlobalTableGlobalSecondaryIndexSettingsUpdate: serializeAws_json1_0GlobalTableGlobalSecondaryIndexSettingsUpdateList(input.GlobalTableGlobalSecondaryIndexSettingsUpdate, context),
    })), (input.GlobalTableName !== undefined &&
        input.GlobalTableName !== null && { GlobalTableName: input.GlobalTableName })), (input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !== undefined &&
        input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate !== null && {
        GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate, context),
    })), (input.GlobalTableProvisionedWriteCapacityUnits !== undefined &&
        input.GlobalTableProvisionedWriteCapacityUnits !== null && {
        GlobalTableProvisionedWriteCapacityUnits: input.GlobalTableProvisionedWriteCapacityUnits,
    })), (input.ReplicaSettingsUpdate !== undefined &&
        input.ReplicaSettingsUpdate !== null && {
        ReplicaSettingsUpdate: serializeAws_json1_0ReplicaSettingsUpdateList(input.ReplicaSettingsUpdate, context),
    }));
};
var serializeAws_json1_0UpdateItemInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeUpdates !== undefined &&
        input.AttributeUpdates !== null && {
        AttributeUpdates: serializeAws_json1_0AttributeUpdates(input.AttributeUpdates, context),
    })), (input.ConditionExpression !== undefined &&
        input.ConditionExpression !== null && { ConditionExpression: input.ConditionExpression })), (input.ConditionalOperator !== undefined &&
        input.ConditionalOperator !== null && { ConditionalOperator: input.ConditionalOperator })), (input.Expected !== undefined &&
        input.Expected !== null && { Expected: serializeAws_json1_0ExpectedAttributeMap(input.Expected, context) })), (input.ExpressionAttributeNames !== undefined &&
        input.ExpressionAttributeNames !== null && {
        ExpressionAttributeNames: serializeAws_json1_0ExpressionAttributeNameMap(input.ExpressionAttributeNames, context),
    })), (input.ExpressionAttributeValues !== undefined &&
        input.ExpressionAttributeValues !== null && {
        ExpressionAttributeValues: serializeAws_json1_0ExpressionAttributeValueMap(input.ExpressionAttributeValues, context),
    })), (input.Key !== undefined && input.Key !== null && { Key: serializeAws_json1_0Key(input.Key, context) })), (input.ReturnConsumedCapacity !== undefined &&
        input.ReturnConsumedCapacity !== null && { ReturnConsumedCapacity: input.ReturnConsumedCapacity })), (input.ReturnItemCollectionMetrics !== undefined &&
        input.ReturnItemCollectionMetrics !== null && { ReturnItemCollectionMetrics: input.ReturnItemCollectionMetrics })), (input.ReturnValues !== undefined && input.ReturnValues !== null && { ReturnValues: input.ReturnValues })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.UpdateExpression !== undefined &&
        input.UpdateExpression !== null && { UpdateExpression: input.UpdateExpression }));
};
var serializeAws_json1_0UpdateReplicationGroupMemberAction = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GlobalSecondaryIndexes !== undefined &&
        input.GlobalSecondaryIndexes !== null && {
        GlobalSecondaryIndexes: serializeAws_json1_0ReplicaGlobalSecondaryIndexList(input.GlobalSecondaryIndexes, context),
    })), (input.KMSMasterKeyId !== undefined &&
        input.KMSMasterKeyId !== null && { KMSMasterKeyId: input.KMSMasterKeyId })), (input.ProvisionedThroughputOverride !== undefined &&
        input.ProvisionedThroughputOverride !== null && {
        ProvisionedThroughputOverride: serializeAws_json1_0ProvisionedThroughputOverride(input.ProvisionedThroughputOverride, context),
    })), (input.RegionName !== undefined && input.RegionName !== null && { RegionName: input.RegionName }));
};
var serializeAws_json1_0UpdateTableInput = function (input, context) {
    return __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (input.AttributeDefinitions !== undefined &&
        input.AttributeDefinitions !== null && {
        AttributeDefinitions: serializeAws_json1_0AttributeDefinitions(input.AttributeDefinitions, context),
    })), (input.BillingMode !== undefined && input.BillingMode !== null && { BillingMode: input.BillingMode })), (input.GlobalSecondaryIndexUpdates !== undefined &&
        input.GlobalSecondaryIndexUpdates !== null && {
        GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexUpdateList(input.GlobalSecondaryIndexUpdates, context),
    })), (input.ProvisionedThroughput !== undefined &&
        input.ProvisionedThroughput !== null && {
        ProvisionedThroughput: serializeAws_json1_0ProvisionedThroughput(input.ProvisionedThroughput, context),
    })), (input.ReplicaUpdates !== undefined &&
        input.ReplicaUpdates !== null && {
        ReplicaUpdates: serializeAws_json1_0ReplicationGroupUpdateList(input.ReplicaUpdates, context),
    })), (input.SSESpecification !== undefined &&
        input.SSESpecification !== null && {
        SSESpecification: serializeAws_json1_0SSESpecification(input.SSESpecification, context),
    })), (input.StreamSpecification !== undefined &&
        input.StreamSpecification !== null && {
        StreamSpecification: serializeAws_json1_0StreamSpecification(input.StreamSpecification, context),
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0UpdateTableReplicaAutoScalingInput = function (input, context) {
    return __assign(__assign(__assign(__assign({}, (input.GlobalSecondaryIndexUpdates !== undefined &&
        input.GlobalSecondaryIndexUpdates !== null && {
        GlobalSecondaryIndexUpdates: serializeAws_json1_0GlobalSecondaryIndexAutoScalingUpdateList(input.GlobalSecondaryIndexUpdates, context),
    })), (input.ProvisionedWriteCapacityAutoScalingUpdate !== undefined &&
        input.ProvisionedWriteCapacityAutoScalingUpdate !== null && {
        ProvisionedWriteCapacityAutoScalingUpdate: serializeAws_json1_0AutoScalingSettingsUpdate(input.ProvisionedWriteCapacityAutoScalingUpdate, context),
    })), (input.ReplicaUpdates !== undefined &&
        input.ReplicaUpdates !== null && {
        ReplicaUpdates: serializeAws_json1_0ReplicaAutoScalingUpdateList(input.ReplicaUpdates, context),
    })), (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }));
};
var serializeAws_json1_0UpdateTimeToLiveInput = function (input, context) {
    return __assign(__assign({}, (input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName })), (input.TimeToLiveSpecification !== undefined &&
        input.TimeToLiveSpecification !== null && {
        TimeToLiveSpecification: serializeAws_json1_0TimeToLiveSpecification(input.TimeToLiveSpecification, context),
    }));
};
var serializeAws_json1_0WriteRequest = function (input, context) {
    return __assign(__assign({}, (input.DeleteRequest !== undefined &&
        input.DeleteRequest !== null && {
        DeleteRequest: serializeAws_json1_0DeleteRequest(input.DeleteRequest, context),
    })), (input.PutRequest !== undefined &&
        input.PutRequest !== null && { PutRequest: serializeAws_json1_0PutRequest(input.PutRequest, context) }));
};
var serializeAws_json1_0WriteRequests = function (input, context) {
    return input
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return serializeAws_json1_0WriteRequest(entry, context);
    });
};
var deserializeAws_json1_0ArchivalSummary = function (output, context) {
    return {
        ArchivalBackupArn: output.ArchivalBackupArn !== undefined && output.ArchivalBackupArn !== null
            ? output.ArchivalBackupArn
            : undefined,
        ArchivalDateTime: output.ArchivalDateTime !== undefined && output.ArchivalDateTime !== null
            ? new Date(Math.round(output.ArchivalDateTime * 1000))
            : undefined,
        ArchivalReason: output.ArchivalReason !== undefined && output.ArchivalReason !== null ? output.ArchivalReason : undefined,
    };
};
var deserializeAws_json1_0AttributeDefinition = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        AttributeType: output.AttributeType !== undefined && output.AttributeType !== null ? output.AttributeType : undefined,
    };
};
var deserializeAws_json1_0AttributeDefinitions = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeDefinition(entry, context);
    });
};
var deserializeAws_json1_0AttributeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0AttributeNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0AttributeValue = function (output, context) {
    if (output.B !== undefined && output.B !== null) {
        return {
            B: context.base64Decoder(output.B),
        };
    }
    if (output.BOOL !== undefined && output.BOOL !== null) {
        return {
            BOOL: output.BOOL,
        };
    }
    if (output.BS !== undefined && output.BS !== null) {
        return {
            BS: deserializeAws_json1_0BinarySetAttributeValue(output.BS, context),
        };
    }
    if (output.L !== undefined && output.L !== null) {
        return {
            L: deserializeAws_json1_0ListAttributeValue(output.L, context),
        };
    }
    if (output.M !== undefined && output.M !== null) {
        return {
            M: deserializeAws_json1_0MapAttributeValue(output.M, context),
        };
    }
    if (output.N !== undefined && output.N !== null) {
        return {
            N: output.N,
        };
    }
    if (output.NS !== undefined && output.NS !== null) {
        return {
            NS: deserializeAws_json1_0NumberSetAttributeValue(output.NS, context),
        };
    }
    if (output.NULL !== undefined && output.NULL !== null) {
        return {
            NULL: output.NULL,
        };
    }
    if (output.S !== undefined && output.S !== null) {
        return {
            S: output.S,
        };
    }
    if (output.SS !== undefined && output.SS !== null) {
        return {
            SS: deserializeAws_json1_0StringSetAttributeValue(output.SS, context),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
var deserializeAws_json1_0AutoScalingPolicyDescription = function (output, context) {
    return {
        PolicyName: output.PolicyName !== undefined && output.PolicyName !== null ? output.PolicyName : undefined,
        TargetTrackingScalingPolicyConfiguration: output.TargetTrackingScalingPolicyConfiguration !== undefined &&
            output.TargetTrackingScalingPolicyConfiguration !== null
            ? deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription(output.TargetTrackingScalingPolicyConfiguration, context)
            : undefined,
    };
};
var deserializeAws_json1_0AutoScalingPolicyDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AutoScalingPolicyDescription(entry, context);
    });
};
var deserializeAws_json1_0AutoScalingSettingsDescription = function (output, context) {
    return {
        AutoScalingDisabled: output.AutoScalingDisabled !== undefined && output.AutoScalingDisabled !== null
            ? output.AutoScalingDisabled
            : undefined,
        AutoScalingRoleArn: output.AutoScalingRoleArn !== undefined && output.AutoScalingRoleArn !== null
            ? output.AutoScalingRoleArn
            : undefined,
        MaximumUnits: output.MaximumUnits !== undefined && output.MaximumUnits !== null ? output.MaximumUnits : undefined,
        MinimumUnits: output.MinimumUnits !== undefined && output.MinimumUnits !== null ? output.MinimumUnits : undefined,
        ScalingPolicies: output.ScalingPolicies !== undefined && output.ScalingPolicies !== null
            ? deserializeAws_json1_0AutoScalingPolicyDescriptionList(output.ScalingPolicies, context)
            : undefined,
    };
};
var deserializeAws_json1_0AutoScalingTargetTrackingScalingPolicyConfigurationDescription = function (output, context) {
    return {
        DisableScaleIn: output.DisableScaleIn !== undefined && output.DisableScaleIn !== null ? output.DisableScaleIn : undefined,
        ScaleInCooldown: output.ScaleInCooldown !== undefined && output.ScaleInCooldown !== null ? output.ScaleInCooldown : undefined,
        ScaleOutCooldown: output.ScaleOutCooldown !== undefined && output.ScaleOutCooldown !== null ? output.ScaleOutCooldown : undefined,
        TargetValue: output.TargetValue !== undefined && output.TargetValue !== null ? output.TargetValue : undefined,
    };
};
var deserializeAws_json1_0BackupDescription = function (output, context) {
    return {
        BackupDetails: output.BackupDetails !== undefined && output.BackupDetails !== null
            ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context)
            : undefined,
        SourceTableDetails: output.SourceTableDetails !== undefined && output.SourceTableDetails !== null
            ? deserializeAws_json1_0SourceTableDetails(output.SourceTableDetails, context)
            : undefined,
        SourceTableFeatureDetails: output.SourceTableFeatureDetails !== undefined && output.SourceTableFeatureDetails !== null
            ? deserializeAws_json1_0SourceTableFeatureDetails(output.SourceTableFeatureDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_0BackupDetails = function (output, context) {
    return {
        BackupArn: output.BackupArn !== undefined && output.BackupArn !== null ? output.BackupArn : undefined,
        BackupCreationDateTime: output.BackupCreationDateTime !== undefined && output.BackupCreationDateTime !== null
            ? new Date(Math.round(output.BackupCreationDateTime * 1000))
            : undefined,
        BackupExpiryDateTime: output.BackupExpiryDateTime !== undefined && output.BackupExpiryDateTime !== null
            ? new Date(Math.round(output.BackupExpiryDateTime * 1000))
            : undefined,
        BackupName: output.BackupName !== undefined && output.BackupName !== null ? output.BackupName : undefined,
        BackupSizeBytes: output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null ? output.BackupSizeBytes : undefined,
        BackupStatus: output.BackupStatus !== undefined && output.BackupStatus !== null ? output.BackupStatus : undefined,
        BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
    };
};
var deserializeAws_json1_0BackupInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0BackupNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0BackupSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0BackupSummary(entry, context);
    });
};
var deserializeAws_json1_0BackupSummary = function (output, context) {
    return {
        BackupArn: output.BackupArn !== undefined && output.BackupArn !== null ? output.BackupArn : undefined,
        BackupCreationDateTime: output.BackupCreationDateTime !== undefined && output.BackupCreationDateTime !== null
            ? new Date(Math.round(output.BackupCreationDateTime * 1000))
            : undefined,
        BackupExpiryDateTime: output.BackupExpiryDateTime !== undefined && output.BackupExpiryDateTime !== null
            ? new Date(Math.round(output.BackupExpiryDateTime * 1000))
            : undefined,
        BackupName: output.BackupName !== undefined && output.BackupName !== null ? output.BackupName : undefined,
        BackupSizeBytes: output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null ? output.BackupSizeBytes : undefined,
        BackupStatus: output.BackupStatus !== undefined && output.BackupStatus !== null ? output.BackupStatus : undefined,
        BackupType: output.BackupType !== undefined && output.BackupType !== null ? output.BackupType : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0BatchExecuteStatementOutput = function (output, context) {
    return {
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0PartiQLBatchResponse(output.Responses, context)
            : undefined,
    };
};
var deserializeAws_json1_0BatchGetItemOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0BatchGetResponseMap(output.Responses, context)
            : undefined,
        UnprocessedKeys: output.UnprocessedKeys !== undefined && output.UnprocessedKeys !== null
            ? deserializeAws_json1_0BatchGetRequestMap(output.UnprocessedKeys, context)
            : undefined,
    };
};
var deserializeAws_json1_0BatchGetRequestMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0KeysAndAttributes(value, context), _b));
    }, {});
};
var deserializeAws_json1_0BatchGetResponseMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0ItemList(value, context), _b));
    }, {});
};
var deserializeAws_json1_0BatchStatementError = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0BatchStatementResponse = function (output, context) {
    return {
        Error: output.Error !== undefined && output.Error !== null
            ? deserializeAws_json1_0BatchStatementError(output.Error, context)
            : undefined,
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0BatchWriteItemOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
            : undefined,
        UnprocessedItems: output.UnprocessedItems !== undefined && output.UnprocessedItems !== null
            ? deserializeAws_json1_0BatchWriteItemRequestMap(output.UnprocessedItems, context)
            : undefined,
    };
};
var deserializeAws_json1_0BatchWriteItemRequestMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0WriteRequests(value, context), _b));
    }, {});
};
var deserializeAws_json1_0BillingModeSummary = function (output, context) {
    return {
        BillingMode: output.BillingMode !== undefined && output.BillingMode !== null ? output.BillingMode : undefined,
        LastUpdateToPayPerRequestDateTime: output.LastUpdateToPayPerRequestDateTime !== undefined && output.LastUpdateToPayPerRequestDateTime !== null
            ? new Date(Math.round(output.LastUpdateToPayPerRequestDateTime * 1000))
            : undefined,
    };
};
var deserializeAws_json1_0BinarySetAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return context.base64Decoder(entry);
    });
};
var deserializeAws_json1_0CancellationReason = function (output, context) {
    return {
        Code: output.Code !== undefined && output.Code !== null ? output.Code : undefined,
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0CancellationReasonList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0CancellationReason(entry, context);
    });
};
var deserializeAws_json1_0Capacity = function (output, context) {
    return {
        CapacityUnits: output.CapacityUnits !== undefined && output.CapacityUnits !== null ? output.CapacityUnits : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0ConditionalCheckFailedException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ConsumedCapacity = function (output, context) {
    return {
        CapacityUnits: output.CapacityUnits !== undefined && output.CapacityUnits !== null ? output.CapacityUnits : undefined,
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.GlobalSecondaryIndexes, context)
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_json1_0SecondaryIndexesCapacityMap(output.LocalSecondaryIndexes, context)
            : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0Capacity(output.Table, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0ConsumedCapacityMultiple = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ConsumedCapacity(entry, context);
    });
};
var deserializeAws_json1_0ContinuousBackupsDescription = function (output, context) {
    return {
        ContinuousBackupsStatus: output.ContinuousBackupsStatus !== undefined && output.ContinuousBackupsStatus !== null
            ? output.ContinuousBackupsStatus
            : undefined,
        PointInTimeRecoveryDescription: output.PointInTimeRecoveryDescription !== undefined && output.PointInTimeRecoveryDescription !== null
            ? deserializeAws_json1_0PointInTimeRecoveryDescription(output.PointInTimeRecoveryDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0ContinuousBackupsUnavailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ContributorInsightsRuleList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0ContributorInsightsSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ContributorInsightsSummary(entry, context);
    });
};
var deserializeAws_json1_0ContributorInsightsSummary = function (output, context) {
    return {
        ContributorInsightsStatus: output.ContributorInsightsStatus !== undefined && output.ContributorInsightsStatus !== null
            ? output.ContributorInsightsStatus
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0CreateBackupOutput = function (output, context) {
    return {
        BackupDetails: output.BackupDetails !== undefined && output.BackupDetails !== null
            ? deserializeAws_json1_0BackupDetails(output.BackupDetails, context)
            : undefined,
    };
};
var deserializeAws_json1_0CreateGlobalTableOutput = function (output, context) {
    return {
        GlobalTableDescription: output.GlobalTableDescription !== undefined && output.GlobalTableDescription !== null
            ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0CreateTableOutput = function (output, context) {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DeleteBackupOutput = function (output, context) {
    return {
        BackupDescription: output.BackupDescription !== undefined && output.BackupDescription !== null
            ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DeleteItemOutput = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
            : undefined,
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0DeleteRequest = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? deserializeAws_json1_0Key(output.Key, context) : undefined,
    };
};
var deserializeAws_json1_0DeleteTableOutput = function (output, context) {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeBackupOutput = function (output, context) {
    return {
        BackupDescription: output.BackupDescription !== undefined && output.BackupDescription !== null
            ? deserializeAws_json1_0BackupDescription(output.BackupDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeContinuousBackupsOutput = function (output, context) {
    return {
        ContinuousBackupsDescription: output.ContinuousBackupsDescription !== undefined && output.ContinuousBackupsDescription !== null
            ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeContributorInsightsOutput = function (output, context) {
    return {
        ContributorInsightsRuleList: output.ContributorInsightsRuleList !== undefined && output.ContributorInsightsRuleList !== null
            ? deserializeAws_json1_0ContributorInsightsRuleList(output.ContributorInsightsRuleList, context)
            : undefined,
        ContributorInsightsStatus: output.ContributorInsightsStatus !== undefined && output.ContributorInsightsStatus !== null
            ? output.ContributorInsightsStatus
            : undefined,
        FailureException: output.FailureException !== undefined && output.FailureException !== null
            ? deserializeAws_json1_0FailureException(output.FailureException, context)
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        LastUpdateDateTime: output.LastUpdateDateTime !== undefined && output.LastUpdateDateTime !== null
            ? new Date(Math.round(output.LastUpdateDateTime * 1000))
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0DescribeEndpointsResponse = function (output, context) {
    return {
        Endpoints: output.Endpoints !== undefined && output.Endpoints !== null
            ? deserializeAws_json1_0Endpoints(output.Endpoints, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeExportOutput = function (output, context) {
    return {
        ExportDescription: output.ExportDescription !== undefined && output.ExportDescription !== null
            ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeGlobalTableOutput = function (output, context) {
    return {
        GlobalTableDescription: output.GlobalTableDescription !== undefined && output.GlobalTableDescription !== null
            ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeGlobalTableSettingsOutput = function (output, context) {
    return {
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        ReplicaSettings: output.ReplicaSettings !== undefined && output.ReplicaSettings !== null
            ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeKinesisStreamingDestinationOutput = function (output, context) {
    return {
        KinesisDataStreamDestinations: output.KinesisDataStreamDestinations !== undefined && output.KinesisDataStreamDestinations !== null
            ? deserializeAws_json1_0KinesisDataStreamDestinations(output.KinesisDataStreamDestinations, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0DescribeLimitsOutput = function (output, context) {
    return {
        AccountMaxReadCapacityUnits: output.AccountMaxReadCapacityUnits !== undefined && output.AccountMaxReadCapacityUnits !== null
            ? output.AccountMaxReadCapacityUnits
            : undefined,
        AccountMaxWriteCapacityUnits: output.AccountMaxWriteCapacityUnits !== undefined && output.AccountMaxWriteCapacityUnits !== null
            ? output.AccountMaxWriteCapacityUnits
            : undefined,
        TableMaxReadCapacityUnits: output.TableMaxReadCapacityUnits !== undefined && output.TableMaxReadCapacityUnits !== null
            ? output.TableMaxReadCapacityUnits
            : undefined,
        TableMaxWriteCapacityUnits: output.TableMaxWriteCapacityUnits !== undefined && output.TableMaxWriteCapacityUnits !== null
            ? output.TableMaxWriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0DescribeTableOutput = function (output, context) {
    return {
        Table: output.Table !== undefined && output.Table !== null
            ? deserializeAws_json1_0TableDescription(output.Table, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeTableReplicaAutoScalingOutput = function (output, context) {
    return {
        TableAutoScalingDescription: output.TableAutoScalingDescription !== undefined && output.TableAutoScalingDescription !== null
            ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DescribeTimeToLiveOutput = function (output, context) {
    return {
        TimeToLiveDescription: output.TimeToLiveDescription !== undefined && output.TimeToLiveDescription !== null
            ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0DuplicateItemException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0Endpoint = function (output, context) {
    return {
        Address: output.Address !== undefined && output.Address !== null ? output.Address : undefined,
        CachePeriodInMinutes: output.CachePeriodInMinutes !== undefined && output.CachePeriodInMinutes !== null
            ? output.CachePeriodInMinutes
            : undefined,
    };
};
var deserializeAws_json1_0Endpoints = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Endpoint(entry, context);
    });
};
var deserializeAws_json1_0ExecuteStatementOutput = function (output, context) {
    return {
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_json1_0ItemList(output.Items, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_0ExecuteTransactionOutput = function (output, context) {
    return {
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0ItemResponseList(output.Responses, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExportConflictException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ExportDescription = function (output, context) {
    return {
        BilledSizeBytes: output.BilledSizeBytes !== undefined && output.BilledSizeBytes !== null ? output.BilledSizeBytes : undefined,
        ClientToken: output.ClientToken !== undefined && output.ClientToken !== null ? output.ClientToken : undefined,
        EndTime: output.EndTime !== undefined && output.EndTime !== null ? new Date(Math.round(output.EndTime * 1000)) : undefined,
        ExportArn: output.ExportArn !== undefined && output.ExportArn !== null ? output.ExportArn : undefined,
        ExportFormat: output.ExportFormat !== undefined && output.ExportFormat !== null ? output.ExportFormat : undefined,
        ExportManifest: output.ExportManifest !== undefined && output.ExportManifest !== null ? output.ExportManifest : undefined,
        ExportStatus: output.ExportStatus !== undefined && output.ExportStatus !== null ? output.ExportStatus : undefined,
        ExportTime: output.ExportTime !== undefined && output.ExportTime !== null
            ? new Date(Math.round(output.ExportTime * 1000))
            : undefined,
        FailureCode: output.FailureCode !== undefined && output.FailureCode !== null ? output.FailureCode : undefined,
        FailureMessage: output.FailureMessage !== undefined && output.FailureMessage !== null ? output.FailureMessage : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        S3Bucket: output.S3Bucket !== undefined && output.S3Bucket !== null ? output.S3Bucket : undefined,
        S3BucketOwner: output.S3BucketOwner !== undefined && output.S3BucketOwner !== null ? output.S3BucketOwner : undefined,
        S3Prefix: output.S3Prefix !== undefined && output.S3Prefix !== null ? output.S3Prefix : undefined,
        S3SseAlgorithm: output.S3SseAlgorithm !== undefined && output.S3SseAlgorithm !== null ? output.S3SseAlgorithm : undefined,
        S3SseKmsKeyId: output.S3SseKmsKeyId !== undefined && output.S3SseKmsKeyId !== null ? output.S3SseKmsKeyId : undefined,
        StartTime: output.StartTime !== undefined && output.StartTime !== null
            ? new Date(Math.round(output.StartTime * 1000))
            : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
    };
};
var deserializeAws_json1_0ExportNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ExportSummaries = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ExportSummary(entry, context);
    });
};
var deserializeAws_json1_0ExportSummary = function (output, context) {
    return {
        ExportArn: output.ExportArn !== undefined && output.ExportArn !== null ? output.ExportArn : undefined,
        ExportStatus: output.ExportStatus !== undefined && output.ExportStatus !== null ? output.ExportStatus : undefined,
    };
};
var deserializeAws_json1_0ExportTableToPointInTimeOutput = function (output, context) {
    return {
        ExportDescription: output.ExportDescription !== undefined && output.ExportDescription !== null
            ? deserializeAws_json1_0ExportDescription(output.ExportDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0ExpressionAttributeNameMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = value, _b));
    }, {});
};
var deserializeAws_json1_0FailureException = function (output, context) {
    return {
        ExceptionDescription: output.ExceptionDescription !== undefined && output.ExceptionDescription !== null
            ? output.ExceptionDescription
            : undefined,
        ExceptionName: output.ExceptionName !== undefined && output.ExceptionName !== null ? output.ExceptionName : undefined,
    };
};
var deserializeAws_json1_0GetItemOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
    };
};
var deserializeAws_json1_0GlobalSecondaryIndexDescription = function (output, context) {
    return {
        Backfilling: output.Backfilling !== undefined && output.Backfilling !== null ? output.Backfilling : undefined,
        IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexSizeBytes: output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null ? output.IndexSizeBytes : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
            : undefined,
    };
};
var deserializeAws_json1_0GlobalSecondaryIndexDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GlobalSecondaryIndexDescription(entry, context);
    });
};
var deserializeAws_json1_0GlobalSecondaryIndexes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GlobalSecondaryIndexInfo(entry, context);
    });
};
var deserializeAws_json1_0GlobalSecondaryIndexInfo = function (output, context) {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
            : undefined,
    };
};
var deserializeAws_json1_0GlobalTable = function (output, context) {
    return {
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        ReplicationGroup: output.ReplicationGroup !== undefined && output.ReplicationGroup !== null
            ? deserializeAws_json1_0ReplicaList(output.ReplicationGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_0GlobalTableAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0GlobalTableDescription = function (output, context) {
    return {
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        GlobalTableArn: output.GlobalTableArn !== undefined && output.GlobalTableArn !== null ? output.GlobalTableArn : undefined,
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        GlobalTableStatus: output.GlobalTableStatus !== undefined && output.GlobalTableStatus !== null
            ? output.GlobalTableStatus
            : undefined,
        ReplicationGroup: output.ReplicationGroup !== undefined && output.ReplicationGroup !== null
            ? deserializeAws_json1_0ReplicaDescriptionList(output.ReplicationGroup, context)
            : undefined,
    };
};
var deserializeAws_json1_0GlobalTableList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0GlobalTable(entry, context);
    });
};
var deserializeAws_json1_0GlobalTableNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0IdempotentParameterMismatchException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0IndexNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InternalServerError = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidEndpointException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0InvalidExportTimeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0InvalidRestoreTimeException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ItemCollectionKeyAttributeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0ItemCollectionMetrics = function (output, context) {
    return {
        ItemCollectionKey: output.ItemCollectionKey !== undefined && output.ItemCollectionKey !== null
            ? deserializeAws_json1_0ItemCollectionKeyAttributeMap(output.ItemCollectionKey, context)
            : undefined,
        SizeEstimateRangeGB: output.SizeEstimateRangeGB !== undefined && output.SizeEstimateRangeGB !== null
            ? deserializeAws_json1_0ItemCollectionSizeEstimateRange(output.SizeEstimateRangeGB, context)
            : undefined,
    };
};
var deserializeAws_json1_0ItemCollectionMetricsMultiple = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ItemCollectionMetrics(entry, context);
    });
};
var deserializeAws_json1_0ItemCollectionMetricsPerTable = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0ItemCollectionMetricsMultiple(value, context), _b));
    }, {});
};
var deserializeAws_json1_0ItemCollectionSizeEstimateRange = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0ItemCollectionSizeLimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ItemList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeMap(entry, context);
    });
};
var deserializeAws_json1_0ItemResponse = function (output, context) {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0AttributeMap(output.Item, context)
            : undefined,
    };
};
var deserializeAws_json1_0ItemResponseList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ItemResponse(entry, context);
    });
};
var deserializeAws_json1_0Key = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0KeyList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Key(entry, context);
    });
};
var deserializeAws_json1_0KeysAndAttributes = function (output, context) {
    return {
        AttributesToGet: output.AttributesToGet !== undefined && output.AttributesToGet !== null
            ? deserializeAws_json1_0AttributeNameList(output.AttributesToGet, context)
            : undefined,
        ConsistentRead: output.ConsistentRead !== undefined && output.ConsistentRead !== null ? output.ConsistentRead : undefined,
        ExpressionAttributeNames: output.ExpressionAttributeNames !== undefined && output.ExpressionAttributeNames !== null
            ? deserializeAws_json1_0ExpressionAttributeNameMap(output.ExpressionAttributeNames, context)
            : undefined,
        Keys: output.Keys !== undefined && output.Keys !== null
            ? deserializeAws_json1_0KeyList(output.Keys, context)
            : undefined,
        ProjectionExpression: output.ProjectionExpression !== undefined && output.ProjectionExpression !== null
            ? output.ProjectionExpression
            : undefined,
    };
};
var deserializeAws_json1_0KeySchema = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0KeySchemaElement(entry, context);
    });
};
var deserializeAws_json1_0KeySchemaElement = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        KeyType: output.KeyType !== undefined && output.KeyType !== null ? output.KeyType : undefined,
    };
};
var deserializeAws_json1_0KinesisDataStreamDestination = function (output, context) {
    return {
        DestinationStatus: output.DestinationStatus !== undefined && output.DestinationStatus !== null
            ? output.DestinationStatus
            : undefined,
        DestinationStatusDescription: output.DestinationStatusDescription !== undefined && output.DestinationStatusDescription !== null
            ? output.DestinationStatusDescription
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
    };
};
var deserializeAws_json1_0KinesisDataStreamDestinations = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0KinesisDataStreamDestination(entry, context);
    });
};
var deserializeAws_json1_0KinesisStreamingDestinationOutput = function (output, context) {
    return {
        DestinationStatus: output.DestinationStatus !== undefined && output.DestinationStatus !== null
            ? output.DestinationStatus
            : undefined,
        StreamArn: output.StreamArn !== undefined && output.StreamArn !== null ? output.StreamArn : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0LimitExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ListAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0AttributeValue(entry, context);
    });
};
var deserializeAws_json1_0ListBackupsOutput = function (output, context) {
    return {
        BackupSummaries: output.BackupSummaries !== undefined && output.BackupSummaries !== null
            ? deserializeAws_json1_0BackupSummaries(output.BackupSummaries, context)
            : undefined,
        LastEvaluatedBackupArn: output.LastEvaluatedBackupArn !== undefined && output.LastEvaluatedBackupArn !== null
            ? output.LastEvaluatedBackupArn
            : undefined,
    };
};
var deserializeAws_json1_0ListContributorInsightsOutput = function (output, context) {
    return {
        ContributorInsightsSummaries: output.ContributorInsightsSummaries !== undefined && output.ContributorInsightsSummaries !== null
            ? deserializeAws_json1_0ContributorInsightsSummaries(output.ContributorInsightsSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_0ListExportsOutput = function (output, context) {
    return {
        ExportSummaries: output.ExportSummaries !== undefined && output.ExportSummaries !== null
            ? deserializeAws_json1_0ExportSummaries(output.ExportSummaries, context)
            : undefined,
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
    };
};
var deserializeAws_json1_0ListGlobalTablesOutput = function (output, context) {
    return {
        GlobalTables: output.GlobalTables !== undefined && output.GlobalTables !== null
            ? deserializeAws_json1_0GlobalTableList(output.GlobalTables, context)
            : undefined,
        LastEvaluatedGlobalTableName: output.LastEvaluatedGlobalTableName !== undefined && output.LastEvaluatedGlobalTableName !== null
            ? output.LastEvaluatedGlobalTableName
            : undefined,
    };
};
var deserializeAws_json1_0ListTablesOutput = function (output, context) {
    return {
        LastEvaluatedTableName: output.LastEvaluatedTableName !== undefined && output.LastEvaluatedTableName !== null
            ? output.LastEvaluatedTableName
            : undefined,
        TableNames: output.TableNames !== undefined && output.TableNames !== null
            ? deserializeAws_json1_0TableNameList(output.TableNames, context)
            : undefined,
    };
};
var deserializeAws_json1_0ListTagsOfResourceOutput = function (output, context) {
    return {
        NextToken: output.NextToken !== undefined && output.NextToken !== null ? output.NextToken : undefined,
        Tags: output.Tags !== undefined && output.Tags !== null
            ? deserializeAws_json1_0TagList(output.Tags, context)
            : undefined,
    };
};
var deserializeAws_json1_0LocalSecondaryIndexDescription = function (output, context) {
    return {
        IndexArn: output.IndexArn !== undefined && output.IndexArn !== null ? output.IndexArn : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexSizeBytes: output.IndexSizeBytes !== undefined && output.IndexSizeBytes !== null ? output.IndexSizeBytes : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
    };
};
var deserializeAws_json1_0LocalSecondaryIndexDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LocalSecondaryIndexDescription(entry, context);
    });
};
var deserializeAws_json1_0LocalSecondaryIndexes = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0LocalSecondaryIndexInfo(entry, context);
    });
};
var deserializeAws_json1_0LocalSecondaryIndexInfo = function (output, context) {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        Projection: output.Projection !== undefined && output.Projection !== null
            ? deserializeAws_json1_0Projection(output.Projection, context)
            : undefined,
    };
};
var deserializeAws_json1_0MapAttributeValue = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0NonKeyAttributeNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0NumberSetAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0PartiQLBatchResponse = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0BatchStatementResponse(entry, context);
    });
};
var deserializeAws_json1_0PointInTimeRecoveryDescription = function (output, context) {
    return {
        EarliestRestorableDateTime: output.EarliestRestorableDateTime !== undefined && output.EarliestRestorableDateTime !== null
            ? new Date(Math.round(output.EarliestRestorableDateTime * 1000))
            : undefined,
        LatestRestorableDateTime: output.LatestRestorableDateTime !== undefined && output.LatestRestorableDateTime !== null
            ? new Date(Math.round(output.LatestRestorableDateTime * 1000))
            : undefined,
        PointInTimeRecoveryStatus: output.PointInTimeRecoveryStatus !== undefined && output.PointInTimeRecoveryStatus !== null
            ? output.PointInTimeRecoveryStatus
            : undefined,
    };
};
var deserializeAws_json1_0PointInTimeRecoveryUnavailableException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0Projection = function (output, context) {
    return {
        NonKeyAttributes: output.NonKeyAttributes !== undefined && output.NonKeyAttributes !== null
            ? deserializeAws_json1_0NonKeyAttributeNameList(output.NonKeyAttributes, context)
            : undefined,
        ProjectionType: output.ProjectionType !== undefined && output.ProjectionType !== null ? output.ProjectionType : undefined,
    };
};
var deserializeAws_json1_0ProvisionedThroughput = function (output, context) {
    return {
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0ProvisionedThroughputDescription = function (output, context) {
    return {
        LastDecreaseDateTime: output.LastDecreaseDateTime !== undefined && output.LastDecreaseDateTime !== null
            ? new Date(Math.round(output.LastDecreaseDateTime * 1000))
            : undefined,
        LastIncreaseDateTime: output.LastIncreaseDateTime !== undefined && output.LastIncreaseDateTime !== null
            ? new Date(Math.round(output.LastIncreaseDateTime * 1000))
            : undefined,
        NumberOfDecreasesToday: output.NumberOfDecreasesToday !== undefined && output.NumberOfDecreasesToday !== null
            ? output.NumberOfDecreasesToday
            : undefined,
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
        WriteCapacityUnits: output.WriteCapacityUnits !== undefined && output.WriteCapacityUnits !== null
            ? output.WriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0ProvisionedThroughputExceededException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ProvisionedThroughputOverride = function (output, context) {
    return {
        ReadCapacityUnits: output.ReadCapacityUnits !== undefined && output.ReadCapacityUnits !== null
            ? output.ReadCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0PutItemInputAttributeMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0AttributeValue(value, context), _b));
    }, {});
};
var deserializeAws_json1_0PutItemOutput = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
            : undefined,
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0PutRequest = function (output, context) {
    return {
        Item: output.Item !== undefined && output.Item !== null
            ? deserializeAws_json1_0PutItemInputAttributeMap(output.Item, context)
            : undefined,
    };
};
var deserializeAws_json1_0QueryOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_json1_0ItemList(output.Items, context)
            : undefined,
        LastEvaluatedKey: output.LastEvaluatedKey !== undefined && output.LastEvaluatedKey !== null
            ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context)
            : undefined,
        ScannedCount: output.ScannedCount !== undefined && output.ScannedCount !== null ? output.ScannedCount : undefined,
    };
};
var deserializeAws_json1_0Replica = function (output, context) {
    return {
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
    };
};
var deserializeAws_json1_0ReplicaAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ReplicaAutoScalingDescription = function (output, context) {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(output.GlobalSecondaryIndexes, context)
            : undefined,
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaProvisionedReadCapacityAutoScalingSettings: output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
    };
};
var deserializeAws_json1_0ReplicaAutoScalingDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaAutoScalingDescription(entry, context);
    });
};
var deserializeAws_json1_0ReplicaDescription = function (output, context) {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
            : undefined,
        KMSMasterKeyId: output.KMSMasterKeyId !== undefined && output.KMSMasterKeyId !== null ? output.KMSMasterKeyId : undefined,
        ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
            ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
            : undefined,
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaInaccessibleDateTime: output.ReplicaInaccessibleDateTime !== undefined && output.ReplicaInaccessibleDateTime !== null
            ? new Date(Math.round(output.ReplicaInaccessibleDateTime * 1000))
            : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
        ReplicaStatusDescription: output.ReplicaStatusDescription !== undefined && output.ReplicaStatusDescription !== null
            ? output.ReplicaStatusDescription
            : undefined,
        ReplicaStatusPercentProgress: output.ReplicaStatusPercentProgress !== undefined && output.ReplicaStatusPercentProgress !== null
            ? output.ReplicaStatusPercentProgress
            : undefined,
    };
};
var deserializeAws_json1_0ReplicaDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaDescription(entry, context);
    });
};
var deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription = function (output, context) {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ProvisionedReadCapacityAutoScalingSettings: output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ProvisionedWriteCapacityAutoScalingSettings: output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
    };
};
var deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
};
var deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription = function (output, context) {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        ProvisionedThroughputOverride: output.ProvisionedThroughputOverride !== undefined && output.ProvisionedThroughputOverride !== null
            ? deserializeAws_json1_0ProvisionedThroughputOverride(output.ProvisionedThroughputOverride, context)
            : undefined,
    };
};
var deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaGlobalSecondaryIndexDescription(entry, context);
    });
};
var deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription = function (output, context) {
    return {
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        IndexStatus: output.IndexStatus !== undefined && output.IndexStatus !== null ? output.IndexStatus : undefined,
        ProvisionedReadCapacityAutoScalingSettings: output.ProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ProvisionedReadCapacityUnits: output.ProvisionedReadCapacityUnits !== undefined && output.ProvisionedReadCapacityUnits !== null
            ? output.ProvisionedReadCapacityUnits
            : undefined,
        ProvisionedWriteCapacityAutoScalingSettings: output.ProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
        ProvisionedWriteCapacityUnits: output.ProvisionedWriteCapacityUnits !== undefined && output.ProvisionedWriteCapacityUnits !== null
            ? output.ProvisionedWriteCapacityUnits
            : undefined,
    };
};
var deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
};
var deserializeAws_json1_0ReplicaList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Replica(entry, context);
    });
};
var deserializeAws_json1_0ReplicaNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ReplicaSettingsDescription = function (output, context) {
    return {
        RegionName: output.RegionName !== undefined && output.RegionName !== null ? output.RegionName : undefined,
        ReplicaBillingModeSummary: output.ReplicaBillingModeSummary !== undefined && output.ReplicaBillingModeSummary !== null
            ? deserializeAws_json1_0BillingModeSummary(output.ReplicaBillingModeSummary, context)
            : undefined,
        ReplicaGlobalSecondaryIndexSettings: output.ReplicaGlobalSecondaryIndexSettings !== undefined && output.ReplicaGlobalSecondaryIndexSettings !== null
            ? deserializeAws_json1_0ReplicaGlobalSecondaryIndexSettingsDescriptionList(output.ReplicaGlobalSecondaryIndexSettings, context)
            : undefined,
        ReplicaProvisionedReadCapacityAutoScalingSettings: output.ReplicaProvisionedReadCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedReadCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedReadCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaProvisionedReadCapacityUnits: output.ReplicaProvisionedReadCapacityUnits !== undefined && output.ReplicaProvisionedReadCapacityUnits !== null
            ? output.ReplicaProvisionedReadCapacityUnits
            : undefined,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== undefined &&
            output.ReplicaProvisionedWriteCapacityAutoScalingSettings !== null
            ? deserializeAws_json1_0AutoScalingSettingsDescription(output.ReplicaProvisionedWriteCapacityAutoScalingSettings, context)
            : undefined,
        ReplicaProvisionedWriteCapacityUnits: output.ReplicaProvisionedWriteCapacityUnits !== undefined && output.ReplicaProvisionedWriteCapacityUnits !== null
            ? output.ReplicaProvisionedWriteCapacityUnits
            : undefined,
        ReplicaStatus: output.ReplicaStatus !== undefined && output.ReplicaStatus !== null ? output.ReplicaStatus : undefined,
    };
};
var deserializeAws_json1_0ReplicaSettingsDescriptionList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0ReplicaSettingsDescription(entry, context);
    });
};
var deserializeAws_json1_0RequestLimitExceeded = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ResourceInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0ResourceNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0RestoreSummary = function (output, context) {
    return {
        RestoreDateTime: output.RestoreDateTime !== undefined && output.RestoreDateTime !== null
            ? new Date(Math.round(output.RestoreDateTime * 1000))
            : undefined,
        RestoreInProgress: output.RestoreInProgress !== undefined && output.RestoreInProgress !== null
            ? output.RestoreInProgress
            : undefined,
        SourceBackupArn: output.SourceBackupArn !== undefined && output.SourceBackupArn !== null ? output.SourceBackupArn : undefined,
        SourceTableArn: output.SourceTableArn !== undefined && output.SourceTableArn !== null ? output.SourceTableArn : undefined,
    };
};
var deserializeAws_json1_0RestoreTableFromBackupOutput = function (output, context) {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0RestoreTableToPointInTimeOutput = function (output, context) {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0ScanOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        Count: output.Count !== undefined && output.Count !== null ? output.Count : undefined,
        Items: output.Items !== undefined && output.Items !== null
            ? deserializeAws_json1_0ItemList(output.Items, context)
            : undefined,
        LastEvaluatedKey: output.LastEvaluatedKey !== undefined && output.LastEvaluatedKey !== null
            ? deserializeAws_json1_0Key(output.LastEvaluatedKey, context)
            : undefined,
        ScannedCount: output.ScannedCount !== undefined && output.ScannedCount !== null ? output.ScannedCount : undefined,
    };
};
var deserializeAws_json1_0SecondaryIndexesCapacityMap = function (output, context) {
    return Object.entries(output).reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        if (value === null) {
            return acc;
        }
        return __assign(__assign({}, acc), (_b = {}, _b[key] = deserializeAws_json1_0Capacity(value, context), _b));
    }, {});
};
var deserializeAws_json1_0SourceTableDetails = function (output, context) {
    return {
        BillingMode: output.BillingMode !== undefined && output.BillingMode !== null ? output.BillingMode : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughput(output.ProvisionedThroughput, context)
            : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableCreationDateTime: output.TableCreationDateTime !== undefined && output.TableCreationDateTime !== null
            ? new Date(Math.round(output.TableCreationDateTime * 1000))
            : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableSizeBytes: output.TableSizeBytes !== undefined && output.TableSizeBytes !== null ? output.TableSizeBytes : undefined,
    };
};
var deserializeAws_json1_0SourceTableFeatureDetails = function (output, context) {
    return {
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0GlobalSecondaryIndexes(output.GlobalSecondaryIndexes, context)
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_json1_0LocalSecondaryIndexes(output.LocalSecondaryIndexes, context)
            : undefined,
        SSEDescription: output.SSEDescription !== undefined && output.SSEDescription !== null
            ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context)
            : undefined,
        StreamDescription: output.StreamDescription !== undefined && output.StreamDescription !== null
            ? deserializeAws_json1_0StreamSpecification(output.StreamDescription, context)
            : undefined,
        TimeToLiveDescription: output.TimeToLiveDescription !== undefined && output.TimeToLiveDescription !== null
            ? deserializeAws_json1_0TimeToLiveDescription(output.TimeToLiveDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0SSEDescription = function (output, context) {
    return {
        InaccessibleEncryptionDateTime: output.InaccessibleEncryptionDateTime !== undefined && output.InaccessibleEncryptionDateTime !== null
            ? new Date(Math.round(output.InaccessibleEncryptionDateTime * 1000))
            : undefined,
        KMSMasterKeyArn: output.KMSMasterKeyArn !== undefined && output.KMSMasterKeyArn !== null ? output.KMSMasterKeyArn : undefined,
        SSEType: output.SSEType !== undefined && output.SSEType !== null ? output.SSEType : undefined,
        Status: output.Status !== undefined && output.Status !== null ? output.Status : undefined,
    };
};
var deserializeAws_json1_0StreamSpecification = function (output, context) {
    return {
        StreamEnabled: output.StreamEnabled !== undefined && output.StreamEnabled !== null ? output.StreamEnabled : undefined,
        StreamViewType: output.StreamViewType !== undefined && output.StreamViewType !== null ? output.StreamViewType : undefined,
    };
};
var deserializeAws_json1_0StringSetAttributeValue = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0TableAlreadyExistsException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TableAutoScalingDescription = function (output, context) {
    return {
        Replicas: output.Replicas !== undefined && output.Replicas !== null
            ? deserializeAws_json1_0ReplicaAutoScalingDescriptionList(output.Replicas, context)
            : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
    };
};
var deserializeAws_json1_0TableDescription = function (output, context) {
    return {
        ArchivalSummary: output.ArchivalSummary !== undefined && output.ArchivalSummary !== null
            ? deserializeAws_json1_0ArchivalSummary(output.ArchivalSummary, context)
            : undefined,
        AttributeDefinitions: output.AttributeDefinitions !== undefined && output.AttributeDefinitions !== null
            ? deserializeAws_json1_0AttributeDefinitions(output.AttributeDefinitions, context)
            : undefined,
        BillingModeSummary: output.BillingModeSummary !== undefined && output.BillingModeSummary !== null
            ? deserializeAws_json1_0BillingModeSummary(output.BillingModeSummary, context)
            : undefined,
        CreationDateTime: output.CreationDateTime !== undefined && output.CreationDateTime !== null
            ? new Date(Math.round(output.CreationDateTime * 1000))
            : undefined,
        GlobalSecondaryIndexes: output.GlobalSecondaryIndexes !== undefined && output.GlobalSecondaryIndexes !== null
            ? deserializeAws_json1_0GlobalSecondaryIndexDescriptionList(output.GlobalSecondaryIndexes, context)
            : undefined,
        GlobalTableVersion: output.GlobalTableVersion !== undefined && output.GlobalTableVersion !== null
            ? output.GlobalTableVersion
            : undefined,
        ItemCount: output.ItemCount !== undefined && output.ItemCount !== null ? output.ItemCount : undefined,
        KeySchema: output.KeySchema !== undefined && output.KeySchema !== null
            ? deserializeAws_json1_0KeySchema(output.KeySchema, context)
            : undefined,
        LatestStreamArn: output.LatestStreamArn !== undefined && output.LatestStreamArn !== null ? output.LatestStreamArn : undefined,
        LatestStreamLabel: output.LatestStreamLabel !== undefined && output.LatestStreamLabel !== null
            ? output.LatestStreamLabel
            : undefined,
        LocalSecondaryIndexes: output.LocalSecondaryIndexes !== undefined && output.LocalSecondaryIndexes !== null
            ? deserializeAws_json1_0LocalSecondaryIndexDescriptionList(output.LocalSecondaryIndexes, context)
            : undefined,
        ProvisionedThroughput: output.ProvisionedThroughput !== undefined && output.ProvisionedThroughput !== null
            ? deserializeAws_json1_0ProvisionedThroughputDescription(output.ProvisionedThroughput, context)
            : undefined,
        Replicas: output.Replicas !== undefined && output.Replicas !== null
            ? deserializeAws_json1_0ReplicaDescriptionList(output.Replicas, context)
            : undefined,
        RestoreSummary: output.RestoreSummary !== undefined && output.RestoreSummary !== null
            ? deserializeAws_json1_0RestoreSummary(output.RestoreSummary, context)
            : undefined,
        SSEDescription: output.SSEDescription !== undefined && output.SSEDescription !== null
            ? deserializeAws_json1_0SSEDescription(output.SSEDescription, context)
            : undefined,
        StreamSpecification: output.StreamSpecification !== undefined && output.StreamSpecification !== null
            ? deserializeAws_json1_0StreamSpecification(output.StreamSpecification, context)
            : undefined,
        TableArn: output.TableArn !== undefined && output.TableArn !== null ? output.TableArn : undefined,
        TableId: output.TableId !== undefined && output.TableId !== null ? output.TableId : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
        TableSizeBytes: output.TableSizeBytes !== undefined && output.TableSizeBytes !== null ? output.TableSizeBytes : undefined,
        TableStatus: output.TableStatus !== undefined && output.TableStatus !== null ? output.TableStatus : undefined,
    };
};
var deserializeAws_json1_0TableInUseException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TableNameList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return entry;
    });
};
var deserializeAws_json1_0TableNotFoundException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0Tag = function (output, context) {
    return {
        Key: output.Key !== undefined && output.Key !== null ? output.Key : undefined,
        Value: output.Value !== undefined && output.Value !== null ? output.Value : undefined,
    };
};
var deserializeAws_json1_0TagList = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0Tag(entry, context);
    });
};
var deserializeAws_json1_0TimeToLiveDescription = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        TimeToLiveStatus: output.TimeToLiveStatus !== undefined && output.TimeToLiveStatus !== null ? output.TimeToLiveStatus : undefined,
    };
};
var deserializeAws_json1_0TimeToLiveSpecification = function (output, context) {
    return {
        AttributeName: output.AttributeName !== undefined && output.AttributeName !== null ? output.AttributeName : undefined,
        Enabled: output.Enabled !== undefined && output.Enabled !== null ? output.Enabled : undefined,
    };
};
var deserializeAws_json1_0TransactGetItemsOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        Responses: output.Responses !== undefined && output.Responses !== null
            ? deserializeAws_json1_0ItemResponseList(output.Responses, context)
            : undefined,
    };
};
var deserializeAws_json1_0TransactionCanceledException = function (output, context) {
    return {
        CancellationReasons: output.CancellationReasons !== undefined && output.CancellationReasons !== null
            ? deserializeAws_json1_0CancellationReasonList(output.CancellationReasons, context)
            : undefined,
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0TransactionConflictException = function (output, context) {
    return {
        message: output.message !== undefined && output.message !== null ? output.message : undefined,
    };
};
var deserializeAws_json1_0TransactionInProgressException = function (output, context) {
    return {
        Message: output.Message !== undefined && output.Message !== null ? output.Message : undefined,
    };
};
var deserializeAws_json1_0TransactWriteItemsOutput = function (output, context) {
    return {
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacityMultiple(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetricsPerTable(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateContinuousBackupsOutput = function (output, context) {
    return {
        ContinuousBackupsDescription: output.ContinuousBackupsDescription !== undefined && output.ContinuousBackupsDescription !== null
            ? deserializeAws_json1_0ContinuousBackupsDescription(output.ContinuousBackupsDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateContributorInsightsOutput = function (output, context) {
    return {
        ContributorInsightsStatus: output.ContributorInsightsStatus !== undefined && output.ContributorInsightsStatus !== null
            ? output.ContributorInsightsStatus
            : undefined,
        IndexName: output.IndexName !== undefined && output.IndexName !== null ? output.IndexName : undefined,
        TableName: output.TableName !== undefined && output.TableName !== null ? output.TableName : undefined,
    };
};
var deserializeAws_json1_0UpdateGlobalTableOutput = function (output, context) {
    return {
        GlobalTableDescription: output.GlobalTableDescription !== undefined && output.GlobalTableDescription !== null
            ? deserializeAws_json1_0GlobalTableDescription(output.GlobalTableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateGlobalTableSettingsOutput = function (output, context) {
    return {
        GlobalTableName: output.GlobalTableName !== undefined && output.GlobalTableName !== null ? output.GlobalTableName : undefined,
        ReplicaSettings: output.ReplicaSettings !== undefined && output.ReplicaSettings !== null
            ? deserializeAws_json1_0ReplicaSettingsDescriptionList(output.ReplicaSettings, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateItemOutput = function (output, context) {
    return {
        Attributes: output.Attributes !== undefined && output.Attributes !== null
            ? deserializeAws_json1_0AttributeMap(output.Attributes, context)
            : undefined,
        ConsumedCapacity: output.ConsumedCapacity !== undefined && output.ConsumedCapacity !== null
            ? deserializeAws_json1_0ConsumedCapacity(output.ConsumedCapacity, context)
            : undefined,
        ItemCollectionMetrics: output.ItemCollectionMetrics !== undefined && output.ItemCollectionMetrics !== null
            ? deserializeAws_json1_0ItemCollectionMetrics(output.ItemCollectionMetrics, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateTableOutput = function (output, context) {
    return {
        TableDescription: output.TableDescription !== undefined && output.TableDescription !== null
            ? deserializeAws_json1_0TableDescription(output.TableDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateTableReplicaAutoScalingOutput = function (output, context) {
    return {
        TableAutoScalingDescription: output.TableAutoScalingDescription !== undefined && output.TableAutoScalingDescription !== null
            ? deserializeAws_json1_0TableAutoScalingDescription(output.TableAutoScalingDescription, context)
            : undefined,
    };
};
var deserializeAws_json1_0UpdateTimeToLiveOutput = function (output, context) {
    return {
        TimeToLiveSpecification: output.TimeToLiveSpecification !== undefined && output.TimeToLiveSpecification !== null
            ? deserializeAws_json1_0TimeToLiveSpecification(output.TimeToLiveSpecification, context)
            : undefined,
    };
};
var deserializeAws_json1_0WriteRequest = function (output, context) {
    return {
        DeleteRequest: output.DeleteRequest !== undefined && output.DeleteRequest !== null
            ? deserializeAws_json1_0DeleteRequest(output.DeleteRequest, context)
            : undefined,
        PutRequest: output.PutRequest !== undefined && output.PutRequest !== null
            ? deserializeAws_json1_0PutRequest(output.PutRequest, context)
            : undefined,
    };
};
var deserializeAws_json1_0WriteRequests = function (output, context) {
    return (output || [])
        .filter(function (e) { return e != null; })
        .map(function (entry) {
        if (entry === null) {
            return null;
        }
        return deserializeAws_json1_0WriteRequest(entry, context);
    });
};
var deserializeMetadata = function (output) {
    var _a;
    return ({
        httpStatusCode: output.statusCode,
        requestId: (_a = output.headers["x-amzn-requestid"]) !== null && _a !== void 0 ? _a : output.headers["x-amzn-request-id"],
        extendedRequestId: output.headers["x-amz-id-2"],
        cfId: output.headers["x-amz-cf-id"],
    });
};
// Collect low-level response body stream to Uint8Array.
var collectBody = function (streamBody, context) {
    if (streamBody === void 0) { streamBody = new Uint8Array(); }
    if (streamBody instanceof Uint8Array) {
        return Promise.resolve(streamBody);
    }
    return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};
// Encode Uint8Array data into string with utf-8.
var collectBodyString = function (streamBody, context) {
    return collectBody(streamBody, context).then(function (body) { return context.utf8Encoder(body); });
};
var buildHttpRpcRequest = function (context, headers, path, resolvedHostname, body) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, hostname, _b, protocol, port, contents;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, context.endpoint()];
            case 1:
                _a = _c.sent(), hostname = _a.hostname, _b = _a.protocol, protocol = _b === void 0 ? "https" : _b, port = _a.port;
                contents = {
                    protocol: protocol,
                    hostname: hostname,
                    port: port,
                    method: "POST",
                    path: path,
                    headers: headers,
                };
                if (resolvedHostname !== undefined) {
                    contents.hostname = resolvedHostname;
                }
                if (body !== undefined) {
                    contents.body = body;
                }
                return [2 /*return*/, new __HttpRequest(contents)];
        }
    });
}); };
var parseBody = function (streamBody, context) {
    return collectBodyString(streamBody, context).then(function (encoded) {
        if (encoded.length) {
            return JSON.parse(encoded);
        }
        return {};
    });
};
/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
var loadRestJsonErrorCode = function (output, data) {
    var findKey = function (object, key) { return Object.keys(object).find(function (k) { return k.toLowerCase() === key.toLowerCase(); }); };
    var sanitizeErrorCode = function (rawValue) {
        var cleanValue = rawValue;
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    var headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
    return "";
};
//# sourceMappingURL=Aws_json1_0.js.map