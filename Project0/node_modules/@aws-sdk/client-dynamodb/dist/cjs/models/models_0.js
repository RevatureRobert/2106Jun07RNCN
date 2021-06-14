"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProvisionedThroughputOverride = exports.CreateGlobalTableInput = exports.Replica = exports.CreateGlobalSecondaryIndexAction = exports.TableNotFoundException = exports.TableInUseException = exports.LimitExceededException = exports.CreateBackupOutput = exports.CreateBackupInput = exports.ContributorInsightsSummary = exports.ContinuousBackupsUnavailableException = exports.ContinuousBackupsDescription = exports.PointInTimeRecoveryDescription = exports.ConditionalCheckFailedException = exports.BillingModeSummary = exports.ItemCollectionSizeLimitExceededException = exports.ResourceNotFoundException = exports.ProvisionedThroughputExceededException = exports.InvalidEndpointException = exports.ConsumedCapacity = exports.Capacity = exports.RequestLimitExceeded = exports.InternalServerError = exports.BatchStatementError = exports.BatchStatementErrorCodeEnum = exports.BackupTypeFilter = exports.BackupSummary = exports.BackupNotFoundException = exports.BackupInUseException = exports.BackupDescription = exports.SourceTableFeatureDetails = exports.TimeToLiveDescription = exports.StreamSpecification = exports.SSEDescription = exports.LocalSecondaryIndexInfo = exports.GlobalSecondaryIndexInfo = exports.Projection = exports.SourceTableDetails = exports.ProvisionedThroughput = exports.KeySchemaElement = exports.BackupDetails = exports.BackupType = exports.AutoScalingSettingsUpdate = exports.AutoScalingSettingsDescription = exports.AutoScalingPolicyUpdate = exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = exports.AutoScalingPolicyDescription = exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription = exports.AttributeDefinition = exports.ArchivalSummary = void 0;
exports.ReplicaSettingsDescription = exports.ReplicaGlobalSecondaryIndexSettingsDescription = exports.DescribeGlobalTableSettingsInput = exports.GlobalTableNotFoundException = exports.DescribeGlobalTableOutput = exports.DescribeGlobalTableInput = exports.ExportNotFoundException = exports.DescribeExportOutput = exports.ExportDescription = exports.ExportStatus = exports.ExportFormat = exports.DescribeExportInput = exports.DescribeEndpointsResponse = exports.Endpoint = exports.DescribeEndpointsRequest = exports.DescribeContributorInsightsOutput = exports.FailureException = exports.DescribeContributorInsightsInput = exports.DescribeContinuousBackupsOutput = exports.DescribeContinuousBackupsInput = exports.DescribeBackupOutput = exports.DescribeBackupInput = exports.DeleteTableOutput = exports.DeleteTableInput = exports.DeleteReplicationGroupMemberAction = exports.DeleteReplicaAction = exports.TransactionConflictException = exports.DeleteGlobalSecondaryIndexAction = exports.DeleteBackupOutput = exports.DeleteBackupInput = exports.ResourceInUseException = exports.CreateTableOutput = exports.TableDescription = exports.RestoreSummary = exports.LocalSecondaryIndexDescription = exports.GlobalSecondaryIndexDescription = exports.ProvisionedThroughputDescription = exports.CreateTableInput = exports.Tag = exports.SSESpecification = exports.LocalSecondaryIndex = exports.GlobalSecondaryIndex = exports.CreateReplicationGroupMemberAction = exports.ReplicaGlobalSecondaryIndex = exports.CreateReplicaAction = exports.GlobalTableAlreadyExistsException = exports.CreateGlobalTableOutput = exports.GlobalTableDescription = exports.ReplicaDescription = exports.ReplicaGlobalSecondaryIndexDescription = void 0;
exports.UpdateContinuousBackupsOutput = exports.UpdateContinuousBackupsInput = exports.PointInTimeRecoverySpecification = exports.UntagResourceInput = exports.TagResourceInput = exports.RestoreTableToPointInTimeOutput = exports.RestoreTableToPointInTimeInput = exports.InvalidRestoreTimeException = exports.TableAlreadyExistsException = exports.RestoreTableFromBackupOutput = exports.RestoreTableFromBackupInput = exports.ListTagsOfResourceOutput = exports.ListTagsOfResourceInput = exports.ListTablesOutput = exports.ListTablesInput = exports.ListGlobalTablesOutput = exports.GlobalTable = exports.ListGlobalTablesInput = exports.ListExportsOutput = exports.ExportSummary = exports.ListExportsInput = exports.ListContributorInsightsOutput = exports.ListContributorInsightsInput = exports.ListBackupsOutput = exports.ListBackupsInput = exports.PointInTimeRecoveryUnavailableException = exports.InvalidExportTimeException = exports.ExportTableToPointInTimeOutput = exports.ExportTableToPointInTimeInput = exports.ExportConflictException = exports.TransactionInProgressException = exports.IdempotentParameterMismatchException = exports.DuplicateItemException = exports.KinesisStreamingDestinationOutput = exports.KinesisStreamingDestinationInput = exports.DescribeTimeToLiveOutput = exports.DescribeTimeToLiveInput = exports.DescribeTableReplicaAutoScalingOutput = exports.TableAutoScalingDescription = exports.ReplicaAutoScalingDescription = exports.ReplicaGlobalSecondaryIndexAutoScalingDescription = exports.DescribeTableReplicaAutoScalingInput = exports.DescribeTableOutput = exports.DescribeTableInput = exports.DescribeLimitsOutput = exports.DescribeLimitsInput = exports.DescribeKinesisStreamingDestinationOutput = exports.KinesisDataStreamDestination = exports.DescribeKinesisStreamingDestinationInput = exports.DescribeGlobalTableSettingsOutput = void 0;
exports.TransactGetItemsOutput = exports.ExecuteTransactionOutput = exports.ExecuteTransactionInput = exports.BatchExecuteStatementOutput = exports.BatchExecuteStatementInput = exports.TransactGetItem = exports.KeysAndAttributes = exports.ExecuteStatementOutput = exports.PutRequest = exports.ParameterizedStatement = exports.ItemResponse = exports.ItemCollectionMetrics = exports.GetItemOutput = exports.GetItemInput = exports.Get = exports.ExecuteStatementInput = exports.DeleteRequest = exports.Condition = exports.CancellationReason = exports.BatchStatementResponse = exports.BatchStatementRequest = exports.AttributeValueUpdate = exports.AttributeValue = exports.UpdateTimeToLiveOutput = exports.UpdateTimeToLiveInput = exports.TimeToLiveSpecification = exports.UpdateTableReplicaAutoScalingOutput = exports.UpdateTableReplicaAutoScalingInput = exports.ReplicaAutoScalingUpdate = exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate = exports.GlobalSecondaryIndexAutoScalingUpdate = exports.UpdateTableOutput = exports.UpdateTableInput = exports.ReplicationGroupUpdate = exports.UpdateReplicationGroupMemberAction = exports.GlobalSecondaryIndexUpdate = exports.UpdateGlobalSecondaryIndexAction = exports.UpdateGlobalTableSettingsOutput = exports.UpdateGlobalTableSettingsInput = exports.ReplicaSettingsUpdate = exports.ReplicaGlobalSecondaryIndexSettingsUpdate = exports.GlobalTableGlobalSecondaryIndexSettingsUpdate = exports.IndexNotFoundException = exports.UpdateGlobalTableOutput = exports.UpdateGlobalTableInput = exports.ReplicaUpdate = exports.ReplicaNotFoundException = exports.ReplicaAlreadyExistsException = exports.UpdateContributorInsightsOutput = exports.UpdateContributorInsightsInput = void 0;
exports.TransactWriteItemsInput = exports.TransactWriteItem = exports.UpdateItemInput = exports.BatchWriteItemOutput = exports.QueryInput = exports.PutItemInput = exports.DeleteItemInput = exports.BatchWriteItemInput = exports.ScanInput = exports.BatchGetItemOutput = exports.WriteRequest = exports.UpdateItemOutput = exports.ScanOutput = exports.QueryOutput = exports.PutItemOutput = exports.DeleteItemOutput = exports.Update = exports.Put = exports.Delete = exports.ConditionCheck = exports.TransactWriteItemsOutput = exports.TransactGetItemsInput = exports.ExpectedAttributeValue = exports.BatchGetItemInput = exports.TransactionCanceledException = void 0;
var ArchivalSummary;
(function (ArchivalSummary) {
    /**
     * @internal
     */
    ArchivalSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArchivalSummary = exports.ArchivalSummary || (exports.ArchivalSummary = {}));
var AttributeDefinition;
(function (AttributeDefinition) {
    /**
     * @internal
     */
    AttributeDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AttributeDefinition = exports.AttributeDefinition || (exports.AttributeDefinition = {}));
var AutoScalingTargetTrackingScalingPolicyConfigurationDescription;
(function (AutoScalingTargetTrackingScalingPolicyConfigurationDescription) {
    /**
     * @internal
     */
    AutoScalingTargetTrackingScalingPolicyConfigurationDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingTargetTrackingScalingPolicyConfigurationDescription = exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription || (exports.AutoScalingTargetTrackingScalingPolicyConfigurationDescription = {}));
var AutoScalingPolicyDescription;
(function (AutoScalingPolicyDescription) {
    /**
     * @internal
     */
    AutoScalingPolicyDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingPolicyDescription = exports.AutoScalingPolicyDescription || (exports.AutoScalingPolicyDescription = {}));
var AutoScalingTargetTrackingScalingPolicyConfigurationUpdate;
(function (AutoScalingTargetTrackingScalingPolicyConfigurationUpdate) {
    /**
     * @internal
     */
    AutoScalingTargetTrackingScalingPolicyConfigurationUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate || (exports.AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = {}));
var AutoScalingPolicyUpdate;
(function (AutoScalingPolicyUpdate) {
    /**
     * @internal
     */
    AutoScalingPolicyUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingPolicyUpdate = exports.AutoScalingPolicyUpdate || (exports.AutoScalingPolicyUpdate = {}));
var AutoScalingSettingsDescription;
(function (AutoScalingSettingsDescription) {
    /**
     * @internal
     */
    AutoScalingSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingSettingsDescription = exports.AutoScalingSettingsDescription || (exports.AutoScalingSettingsDescription = {}));
var AutoScalingSettingsUpdate;
(function (AutoScalingSettingsUpdate) {
    /**
     * @internal
     */
    AutoScalingSettingsUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AutoScalingSettingsUpdate = exports.AutoScalingSettingsUpdate || (exports.AutoScalingSettingsUpdate = {}));
var BackupType;
(function (BackupType) {
    BackupType["AWS_BACKUP"] = "AWS_BACKUP";
    BackupType["SYSTEM"] = "SYSTEM";
    BackupType["USER"] = "USER";
})(BackupType = exports.BackupType || (exports.BackupType = {}));
var BackupDetails;
(function (BackupDetails) {
    /**
     * @internal
     */
    BackupDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupDetails = exports.BackupDetails || (exports.BackupDetails = {}));
var KeySchemaElement;
(function (KeySchemaElement) {
    /**
     * @internal
     */
    KeySchemaElement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KeySchemaElement = exports.KeySchemaElement || (exports.KeySchemaElement = {}));
var ProvisionedThroughput;
(function (ProvisionedThroughput) {
    /**
     * @internal
     */
    ProvisionedThroughput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedThroughput = exports.ProvisionedThroughput || (exports.ProvisionedThroughput = {}));
var SourceTableDetails;
(function (SourceTableDetails) {
    /**
     * @internal
     */
    SourceTableDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceTableDetails = exports.SourceTableDetails || (exports.SourceTableDetails = {}));
var Projection;
(function (Projection) {
    /**
     * @internal
     */
    Projection.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Projection = exports.Projection || (exports.Projection = {}));
var GlobalSecondaryIndexInfo;
(function (GlobalSecondaryIndexInfo) {
    /**
     * @internal
     */
    GlobalSecondaryIndexInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalSecondaryIndexInfo = exports.GlobalSecondaryIndexInfo || (exports.GlobalSecondaryIndexInfo = {}));
var LocalSecondaryIndexInfo;
(function (LocalSecondaryIndexInfo) {
    /**
     * @internal
     */
    LocalSecondaryIndexInfo.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalSecondaryIndexInfo = exports.LocalSecondaryIndexInfo || (exports.LocalSecondaryIndexInfo = {}));
var SSEDescription;
(function (SSEDescription) {
    /**
     * @internal
     */
    SSEDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSEDescription = exports.SSEDescription || (exports.SSEDescription = {}));
var StreamSpecification;
(function (StreamSpecification) {
    /**
     * @internal
     */
    StreamSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StreamSpecification = exports.StreamSpecification || (exports.StreamSpecification = {}));
var TimeToLiveDescription;
(function (TimeToLiveDescription) {
    /**
     * @internal
     */
    TimeToLiveDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeToLiveDescription = exports.TimeToLiveDescription || (exports.TimeToLiveDescription = {}));
var SourceTableFeatureDetails;
(function (SourceTableFeatureDetails) {
    /**
     * @internal
     */
    SourceTableFeatureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceTableFeatureDetails = exports.SourceTableFeatureDetails || (exports.SourceTableFeatureDetails = {}));
var BackupDescription;
(function (BackupDescription) {
    /**
     * @internal
     */
    BackupDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupDescription = exports.BackupDescription || (exports.BackupDescription = {}));
var BackupInUseException;
(function (BackupInUseException) {
    /**
     * @internal
     */
    BackupInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupInUseException = exports.BackupInUseException || (exports.BackupInUseException = {}));
var BackupNotFoundException;
(function (BackupNotFoundException) {
    /**
     * @internal
     */
    BackupNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupNotFoundException = exports.BackupNotFoundException || (exports.BackupNotFoundException = {}));
var BackupSummary;
(function (BackupSummary) {
    /**
     * @internal
     */
    BackupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BackupSummary = exports.BackupSummary || (exports.BackupSummary = {}));
var BackupTypeFilter;
(function (BackupTypeFilter) {
    BackupTypeFilter["ALL"] = "ALL";
    BackupTypeFilter["AWS_BACKUP"] = "AWS_BACKUP";
    BackupTypeFilter["SYSTEM"] = "SYSTEM";
    BackupTypeFilter["USER"] = "USER";
})(BackupTypeFilter = exports.BackupTypeFilter || (exports.BackupTypeFilter = {}));
var BatchStatementErrorCodeEnum;
(function (BatchStatementErrorCodeEnum) {
    BatchStatementErrorCodeEnum["AccessDenied"] = "AccessDenied";
    BatchStatementErrorCodeEnum["ConditionalCheckFailed"] = "ConditionalCheckFailed";
    BatchStatementErrorCodeEnum["DuplicateItem"] = "DuplicateItem";
    BatchStatementErrorCodeEnum["InternalServerError"] = "InternalServerError";
    BatchStatementErrorCodeEnum["ItemCollectionSizeLimitExceeded"] = "ItemCollectionSizeLimitExceeded";
    BatchStatementErrorCodeEnum["ProvisionedThroughputExceeded"] = "ProvisionedThroughputExceeded";
    BatchStatementErrorCodeEnum["RequestLimitExceeded"] = "RequestLimitExceeded";
    BatchStatementErrorCodeEnum["ResourceNotFound"] = "ResourceNotFound";
    BatchStatementErrorCodeEnum["ThrottlingError"] = "ThrottlingError";
    BatchStatementErrorCodeEnum["TransactionConflict"] = "TransactionConflict";
    BatchStatementErrorCodeEnum["ValidationError"] = "ValidationError";
})(BatchStatementErrorCodeEnum = exports.BatchStatementErrorCodeEnum || (exports.BatchStatementErrorCodeEnum = {}));
var BatchStatementError;
(function (BatchStatementError) {
    /**
     * @internal
     */
    BatchStatementError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BatchStatementError = exports.BatchStatementError || (exports.BatchStatementError = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var RequestLimitExceeded;
(function (RequestLimitExceeded) {
    /**
     * @internal
     */
    RequestLimitExceeded.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestLimitExceeded = exports.RequestLimitExceeded || (exports.RequestLimitExceeded = {}));
var Capacity;
(function (Capacity) {
    /**
     * @internal
     */
    Capacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Capacity = exports.Capacity || (exports.Capacity = {}));
var ConsumedCapacity;
(function (ConsumedCapacity) {
    /**
     * @internal
     */
    ConsumedCapacity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConsumedCapacity = exports.ConsumedCapacity || (exports.ConsumedCapacity = {}));
var InvalidEndpointException;
(function (InvalidEndpointException) {
    /**
     * @internal
     */
    InvalidEndpointException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidEndpointException = exports.InvalidEndpointException || (exports.InvalidEndpointException = {}));
var ProvisionedThroughputExceededException;
(function (ProvisionedThroughputExceededException) {
    /**
     * @internal
     */
    ProvisionedThroughputExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedThroughputExceededException = exports.ProvisionedThroughputExceededException || (exports.ProvisionedThroughputExceededException = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ItemCollectionSizeLimitExceededException;
(function (ItemCollectionSizeLimitExceededException) {
    /**
     * @internal
     */
    ItemCollectionSizeLimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ItemCollectionSizeLimitExceededException = exports.ItemCollectionSizeLimitExceededException || (exports.ItemCollectionSizeLimitExceededException = {}));
var BillingModeSummary;
(function (BillingModeSummary) {
    /**
     * @internal
     */
    BillingModeSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BillingModeSummary = exports.BillingModeSummary || (exports.BillingModeSummary = {}));
var ConditionalCheckFailedException;
(function (ConditionalCheckFailedException) {
    /**
     * @internal
     */
    ConditionalCheckFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConditionalCheckFailedException = exports.ConditionalCheckFailedException || (exports.ConditionalCheckFailedException = {}));
var PointInTimeRecoveryDescription;
(function (PointInTimeRecoveryDescription) {
    /**
     * @internal
     */
    PointInTimeRecoveryDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PointInTimeRecoveryDescription = exports.PointInTimeRecoveryDescription || (exports.PointInTimeRecoveryDescription = {}));
var ContinuousBackupsDescription;
(function (ContinuousBackupsDescription) {
    /**
     * @internal
     */
    ContinuousBackupsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuousBackupsDescription = exports.ContinuousBackupsDescription || (exports.ContinuousBackupsDescription = {}));
var ContinuousBackupsUnavailableException;
(function (ContinuousBackupsUnavailableException) {
    /**
     * @internal
     */
    ContinuousBackupsUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContinuousBackupsUnavailableException = exports.ContinuousBackupsUnavailableException || (exports.ContinuousBackupsUnavailableException = {}));
var ContributorInsightsSummary;
(function (ContributorInsightsSummary) {
    /**
     * @internal
     */
    ContributorInsightsSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContributorInsightsSummary = exports.ContributorInsightsSummary || (exports.ContributorInsightsSummary = {}));
var CreateBackupInput;
(function (CreateBackupInput) {
    /**
     * @internal
     */
    CreateBackupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBackupInput = exports.CreateBackupInput || (exports.CreateBackupInput = {}));
var CreateBackupOutput;
(function (CreateBackupOutput) {
    /**
     * @internal
     */
    CreateBackupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateBackupOutput = exports.CreateBackupOutput || (exports.CreateBackupOutput = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TableInUseException;
(function (TableInUseException) {
    /**
     * @internal
     */
    TableInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableInUseException = exports.TableInUseException || (exports.TableInUseException = {}));
var TableNotFoundException;
(function (TableNotFoundException) {
    /**
     * @internal
     */
    TableNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableNotFoundException = exports.TableNotFoundException || (exports.TableNotFoundException = {}));
var CreateGlobalSecondaryIndexAction;
(function (CreateGlobalSecondaryIndexAction) {
    /**
     * @internal
     */
    CreateGlobalSecondaryIndexAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalSecondaryIndexAction = exports.CreateGlobalSecondaryIndexAction || (exports.CreateGlobalSecondaryIndexAction = {}));
var Replica;
(function (Replica) {
    /**
     * @internal
     */
    Replica.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Replica = exports.Replica || (exports.Replica = {}));
var CreateGlobalTableInput;
(function (CreateGlobalTableInput) {
    /**
     * @internal
     */
    CreateGlobalTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalTableInput = exports.CreateGlobalTableInput || (exports.CreateGlobalTableInput = {}));
var ProvisionedThroughputOverride;
(function (ProvisionedThroughputOverride) {
    /**
     * @internal
     */
    ProvisionedThroughputOverride.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedThroughputOverride = exports.ProvisionedThroughputOverride || (exports.ProvisionedThroughputOverride = {}));
var ReplicaGlobalSecondaryIndexDescription;
(function (ReplicaGlobalSecondaryIndexDescription) {
    /**
     * @internal
     */
    ReplicaGlobalSecondaryIndexDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaGlobalSecondaryIndexDescription = exports.ReplicaGlobalSecondaryIndexDescription || (exports.ReplicaGlobalSecondaryIndexDescription = {}));
var ReplicaDescription;
(function (ReplicaDescription) {
    /**
     * @internal
     */
    ReplicaDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaDescription = exports.ReplicaDescription || (exports.ReplicaDescription = {}));
var GlobalTableDescription;
(function (GlobalTableDescription) {
    /**
     * @internal
     */
    GlobalTableDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalTableDescription = exports.GlobalTableDescription || (exports.GlobalTableDescription = {}));
var CreateGlobalTableOutput;
(function (CreateGlobalTableOutput) {
    /**
     * @internal
     */
    CreateGlobalTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGlobalTableOutput = exports.CreateGlobalTableOutput || (exports.CreateGlobalTableOutput = {}));
var GlobalTableAlreadyExistsException;
(function (GlobalTableAlreadyExistsException) {
    /**
     * @internal
     */
    GlobalTableAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalTableAlreadyExistsException = exports.GlobalTableAlreadyExistsException || (exports.GlobalTableAlreadyExistsException = {}));
var CreateReplicaAction;
(function (CreateReplicaAction) {
    /**
     * @internal
     */
    CreateReplicaAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicaAction = exports.CreateReplicaAction || (exports.CreateReplicaAction = {}));
var ReplicaGlobalSecondaryIndex;
(function (ReplicaGlobalSecondaryIndex) {
    /**
     * @internal
     */
    ReplicaGlobalSecondaryIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaGlobalSecondaryIndex = exports.ReplicaGlobalSecondaryIndex || (exports.ReplicaGlobalSecondaryIndex = {}));
var CreateReplicationGroupMemberAction;
(function (CreateReplicationGroupMemberAction) {
    /**
     * @internal
     */
    CreateReplicationGroupMemberAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateReplicationGroupMemberAction = exports.CreateReplicationGroupMemberAction || (exports.CreateReplicationGroupMemberAction = {}));
var GlobalSecondaryIndex;
(function (GlobalSecondaryIndex) {
    /**
     * @internal
     */
    GlobalSecondaryIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalSecondaryIndex = exports.GlobalSecondaryIndex || (exports.GlobalSecondaryIndex = {}));
var LocalSecondaryIndex;
(function (LocalSecondaryIndex) {
    /**
     * @internal
     */
    LocalSecondaryIndex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalSecondaryIndex = exports.LocalSecondaryIndex || (exports.LocalSecondaryIndex = {}));
var SSESpecification;
(function (SSESpecification) {
    /**
     * @internal
     */
    SSESpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SSESpecification = exports.SSESpecification || (exports.SSESpecification = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateTableInput;
(function (CreateTableInput) {
    /**
     * @internal
     */
    CreateTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTableInput = exports.CreateTableInput || (exports.CreateTableInput = {}));
var ProvisionedThroughputDescription;
(function (ProvisionedThroughputDescription) {
    /**
     * @internal
     */
    ProvisionedThroughputDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ProvisionedThroughputDescription = exports.ProvisionedThroughputDescription || (exports.ProvisionedThroughputDescription = {}));
var GlobalSecondaryIndexDescription;
(function (GlobalSecondaryIndexDescription) {
    /**
     * @internal
     */
    GlobalSecondaryIndexDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalSecondaryIndexDescription = exports.GlobalSecondaryIndexDescription || (exports.GlobalSecondaryIndexDescription = {}));
var LocalSecondaryIndexDescription;
(function (LocalSecondaryIndexDescription) {
    /**
     * @internal
     */
    LocalSecondaryIndexDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LocalSecondaryIndexDescription = exports.LocalSecondaryIndexDescription || (exports.LocalSecondaryIndexDescription = {}));
var RestoreSummary;
(function (RestoreSummary) {
    /**
     * @internal
     */
    RestoreSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreSummary = exports.RestoreSummary || (exports.RestoreSummary = {}));
var TableDescription;
(function (TableDescription) {
    /**
     * @internal
     */
    TableDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableDescription = exports.TableDescription || (exports.TableDescription = {}));
var CreateTableOutput;
(function (CreateTableOutput) {
    /**
     * @internal
     */
    CreateTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateTableOutput = exports.CreateTableOutput || (exports.CreateTableOutput = {}));
var ResourceInUseException;
(function (ResourceInUseException) {
    /**
     * @internal
     */
    ResourceInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceInUseException = exports.ResourceInUseException || (exports.ResourceInUseException = {}));
var DeleteBackupInput;
(function (DeleteBackupInput) {
    /**
     * @internal
     */
    DeleteBackupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBackupInput = exports.DeleteBackupInput || (exports.DeleteBackupInput = {}));
var DeleteBackupOutput;
(function (DeleteBackupOutput) {
    /**
     * @internal
     */
    DeleteBackupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteBackupOutput = exports.DeleteBackupOutput || (exports.DeleteBackupOutput = {}));
var DeleteGlobalSecondaryIndexAction;
(function (DeleteGlobalSecondaryIndexAction) {
    /**
     * @internal
     */
    DeleteGlobalSecondaryIndexAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGlobalSecondaryIndexAction = exports.DeleteGlobalSecondaryIndexAction || (exports.DeleteGlobalSecondaryIndexAction = {}));
var TransactionConflictException;
(function (TransactionConflictException) {
    /**
     * @internal
     */
    TransactionConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransactionConflictException = exports.TransactionConflictException || (exports.TransactionConflictException = {}));
var DeleteReplicaAction;
(function (DeleteReplicaAction) {
    /**
     * @internal
     */
    DeleteReplicaAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicaAction = exports.DeleteReplicaAction || (exports.DeleteReplicaAction = {}));
var DeleteReplicationGroupMemberAction;
(function (DeleteReplicationGroupMemberAction) {
    /**
     * @internal
     */
    DeleteReplicationGroupMemberAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteReplicationGroupMemberAction = exports.DeleteReplicationGroupMemberAction || (exports.DeleteReplicationGroupMemberAction = {}));
var DeleteTableInput;
(function (DeleteTableInput) {
    /**
     * @internal
     */
    DeleteTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableInput = exports.DeleteTableInput || (exports.DeleteTableInput = {}));
var DeleteTableOutput;
(function (DeleteTableOutput) {
    /**
     * @internal
     */
    DeleteTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteTableOutput = exports.DeleteTableOutput || (exports.DeleteTableOutput = {}));
var DescribeBackupInput;
(function (DescribeBackupInput) {
    /**
     * @internal
     */
    DescribeBackupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupInput = exports.DescribeBackupInput || (exports.DescribeBackupInput = {}));
var DescribeBackupOutput;
(function (DescribeBackupOutput) {
    /**
     * @internal
     */
    DescribeBackupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeBackupOutput = exports.DescribeBackupOutput || (exports.DescribeBackupOutput = {}));
var DescribeContinuousBackupsInput;
(function (DescribeContinuousBackupsInput) {
    /**
     * @internal
     */
    DescribeContinuousBackupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContinuousBackupsInput = exports.DescribeContinuousBackupsInput || (exports.DescribeContinuousBackupsInput = {}));
var DescribeContinuousBackupsOutput;
(function (DescribeContinuousBackupsOutput) {
    /**
     * @internal
     */
    DescribeContinuousBackupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContinuousBackupsOutput = exports.DescribeContinuousBackupsOutput || (exports.DescribeContinuousBackupsOutput = {}));
var DescribeContributorInsightsInput;
(function (DescribeContributorInsightsInput) {
    /**
     * @internal
     */
    DescribeContributorInsightsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContributorInsightsInput = exports.DescribeContributorInsightsInput || (exports.DescribeContributorInsightsInput = {}));
var FailureException;
(function (FailureException) {
    /**
     * @internal
     */
    FailureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureException = exports.FailureException || (exports.FailureException = {}));
var DescribeContributorInsightsOutput;
(function (DescribeContributorInsightsOutput) {
    /**
     * @internal
     */
    DescribeContributorInsightsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContributorInsightsOutput = exports.DescribeContributorInsightsOutput || (exports.DescribeContributorInsightsOutput = {}));
var DescribeEndpointsRequest;
(function (DescribeEndpointsRequest) {
    /**
     * @internal
     */
    DescribeEndpointsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsRequest = exports.DescribeEndpointsRequest || (exports.DescribeEndpointsRequest = {}));
var Endpoint;
(function (Endpoint) {
    /**
     * @internal
     */
    Endpoint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Endpoint = exports.Endpoint || (exports.Endpoint = {}));
var DescribeEndpointsResponse;
(function (DescribeEndpointsResponse) {
    /**
     * @internal
     */
    DescribeEndpointsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeEndpointsResponse = exports.DescribeEndpointsResponse || (exports.DescribeEndpointsResponse = {}));
var DescribeExportInput;
(function (DescribeExportInput) {
    /**
     * @internal
     */
    DescribeExportInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportInput = exports.DescribeExportInput || (exports.DescribeExportInput = {}));
var ExportFormat;
(function (ExportFormat) {
    ExportFormat["DYNAMODB_JSON"] = "DYNAMODB_JSON";
    ExportFormat["ION"] = "ION";
})(ExportFormat = exports.ExportFormat || (exports.ExportFormat = {}));
var ExportStatus;
(function (ExportStatus) {
    ExportStatus["COMPLETED"] = "COMPLETED";
    ExportStatus["FAILED"] = "FAILED";
    ExportStatus["IN_PROGRESS"] = "IN_PROGRESS";
})(ExportStatus = exports.ExportStatus || (exports.ExportStatus = {}));
var ExportDescription;
(function (ExportDescription) {
    /**
     * @internal
     */
    ExportDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportDescription = exports.ExportDescription || (exports.ExportDescription = {}));
var DescribeExportOutput;
(function (DescribeExportOutput) {
    /**
     * @internal
     */
    DescribeExportOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeExportOutput = exports.DescribeExportOutput || (exports.DescribeExportOutput = {}));
var ExportNotFoundException;
(function (ExportNotFoundException) {
    /**
     * @internal
     */
    ExportNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportNotFoundException = exports.ExportNotFoundException || (exports.ExportNotFoundException = {}));
var DescribeGlobalTableInput;
(function (DescribeGlobalTableInput) {
    /**
     * @internal
     */
    DescribeGlobalTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalTableInput = exports.DescribeGlobalTableInput || (exports.DescribeGlobalTableInput = {}));
var DescribeGlobalTableOutput;
(function (DescribeGlobalTableOutput) {
    /**
     * @internal
     */
    DescribeGlobalTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalTableOutput = exports.DescribeGlobalTableOutput || (exports.DescribeGlobalTableOutput = {}));
var GlobalTableNotFoundException;
(function (GlobalTableNotFoundException) {
    /**
     * @internal
     */
    GlobalTableNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalTableNotFoundException = exports.GlobalTableNotFoundException || (exports.GlobalTableNotFoundException = {}));
var DescribeGlobalTableSettingsInput;
(function (DescribeGlobalTableSettingsInput) {
    /**
     * @internal
     */
    DescribeGlobalTableSettingsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalTableSettingsInput = exports.DescribeGlobalTableSettingsInput || (exports.DescribeGlobalTableSettingsInput = {}));
var ReplicaGlobalSecondaryIndexSettingsDescription;
(function (ReplicaGlobalSecondaryIndexSettingsDescription) {
    /**
     * @internal
     */
    ReplicaGlobalSecondaryIndexSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaGlobalSecondaryIndexSettingsDescription = exports.ReplicaGlobalSecondaryIndexSettingsDescription || (exports.ReplicaGlobalSecondaryIndexSettingsDescription = {}));
var ReplicaSettingsDescription;
(function (ReplicaSettingsDescription) {
    /**
     * @internal
     */
    ReplicaSettingsDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaSettingsDescription = exports.ReplicaSettingsDescription || (exports.ReplicaSettingsDescription = {}));
var DescribeGlobalTableSettingsOutput;
(function (DescribeGlobalTableSettingsOutput) {
    /**
     * @internal
     */
    DescribeGlobalTableSettingsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeGlobalTableSettingsOutput = exports.DescribeGlobalTableSettingsOutput || (exports.DescribeGlobalTableSettingsOutput = {}));
var DescribeKinesisStreamingDestinationInput;
(function (DescribeKinesisStreamingDestinationInput) {
    /**
     * @internal
     */
    DescribeKinesisStreamingDestinationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKinesisStreamingDestinationInput = exports.DescribeKinesisStreamingDestinationInput || (exports.DescribeKinesisStreamingDestinationInput = {}));
var KinesisDataStreamDestination;
(function (KinesisDataStreamDestination) {
    /**
     * @internal
     */
    KinesisDataStreamDestination.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisDataStreamDestination = exports.KinesisDataStreamDestination || (exports.KinesisDataStreamDestination = {}));
var DescribeKinesisStreamingDestinationOutput;
(function (DescribeKinesisStreamingDestinationOutput) {
    /**
     * @internal
     */
    DescribeKinesisStreamingDestinationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeKinesisStreamingDestinationOutput = exports.DescribeKinesisStreamingDestinationOutput || (exports.DescribeKinesisStreamingDestinationOutput = {}));
var DescribeLimitsInput;
(function (DescribeLimitsInput) {
    /**
     * @internal
     */
    DescribeLimitsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLimitsInput = exports.DescribeLimitsInput || (exports.DescribeLimitsInput = {}));
var DescribeLimitsOutput;
(function (DescribeLimitsOutput) {
    /**
     * @internal
     */
    DescribeLimitsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeLimitsOutput = exports.DescribeLimitsOutput || (exports.DescribeLimitsOutput = {}));
var DescribeTableInput;
(function (DescribeTableInput) {
    /**
     * @internal
     */
    DescribeTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableInput = exports.DescribeTableInput || (exports.DescribeTableInput = {}));
var DescribeTableOutput;
(function (DescribeTableOutput) {
    /**
     * @internal
     */
    DescribeTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableOutput = exports.DescribeTableOutput || (exports.DescribeTableOutput = {}));
var DescribeTableReplicaAutoScalingInput;
(function (DescribeTableReplicaAutoScalingInput) {
    /**
     * @internal
     */
    DescribeTableReplicaAutoScalingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableReplicaAutoScalingInput = exports.DescribeTableReplicaAutoScalingInput || (exports.DescribeTableReplicaAutoScalingInput = {}));
var ReplicaGlobalSecondaryIndexAutoScalingDescription;
(function (ReplicaGlobalSecondaryIndexAutoScalingDescription) {
    /**
     * @internal
     */
    ReplicaGlobalSecondaryIndexAutoScalingDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaGlobalSecondaryIndexAutoScalingDescription = exports.ReplicaGlobalSecondaryIndexAutoScalingDescription || (exports.ReplicaGlobalSecondaryIndexAutoScalingDescription = {}));
var ReplicaAutoScalingDescription;
(function (ReplicaAutoScalingDescription) {
    /**
     * @internal
     */
    ReplicaAutoScalingDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaAutoScalingDescription = exports.ReplicaAutoScalingDescription || (exports.ReplicaAutoScalingDescription = {}));
var TableAutoScalingDescription;
(function (TableAutoScalingDescription) {
    /**
     * @internal
     */
    TableAutoScalingDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableAutoScalingDescription = exports.TableAutoScalingDescription || (exports.TableAutoScalingDescription = {}));
var DescribeTableReplicaAutoScalingOutput;
(function (DescribeTableReplicaAutoScalingOutput) {
    /**
     * @internal
     */
    DescribeTableReplicaAutoScalingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTableReplicaAutoScalingOutput = exports.DescribeTableReplicaAutoScalingOutput || (exports.DescribeTableReplicaAutoScalingOutput = {}));
var DescribeTimeToLiveInput;
(function (DescribeTimeToLiveInput) {
    /**
     * @internal
     */
    DescribeTimeToLiveInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTimeToLiveInput = exports.DescribeTimeToLiveInput || (exports.DescribeTimeToLiveInput = {}));
var DescribeTimeToLiveOutput;
(function (DescribeTimeToLiveOutput) {
    /**
     * @internal
     */
    DescribeTimeToLiveOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeTimeToLiveOutput = exports.DescribeTimeToLiveOutput || (exports.DescribeTimeToLiveOutput = {}));
var KinesisStreamingDestinationInput;
(function (KinesisStreamingDestinationInput) {
    /**
     * @internal
     */
    KinesisStreamingDestinationInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamingDestinationInput = exports.KinesisStreamingDestinationInput || (exports.KinesisStreamingDestinationInput = {}));
var KinesisStreamingDestinationOutput;
(function (KinesisStreamingDestinationOutput) {
    /**
     * @internal
     */
    KinesisStreamingDestinationOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(KinesisStreamingDestinationOutput = exports.KinesisStreamingDestinationOutput || (exports.KinesisStreamingDestinationOutput = {}));
var DuplicateItemException;
(function (DuplicateItemException) {
    /**
     * @internal
     */
    DuplicateItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicateItemException = exports.DuplicateItemException || (exports.DuplicateItemException = {}));
var IdempotentParameterMismatchException;
(function (IdempotentParameterMismatchException) {
    /**
     * @internal
     */
    IdempotentParameterMismatchException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IdempotentParameterMismatchException = exports.IdempotentParameterMismatchException || (exports.IdempotentParameterMismatchException = {}));
var TransactionInProgressException;
(function (TransactionInProgressException) {
    /**
     * @internal
     */
    TransactionInProgressException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransactionInProgressException = exports.TransactionInProgressException || (exports.TransactionInProgressException = {}));
var ExportConflictException;
(function (ExportConflictException) {
    /**
     * @internal
     */
    ExportConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportConflictException = exports.ExportConflictException || (exports.ExportConflictException = {}));
var ExportTableToPointInTimeInput;
(function (ExportTableToPointInTimeInput) {
    /**
     * @internal
     */
    ExportTableToPointInTimeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTableToPointInTimeInput = exports.ExportTableToPointInTimeInput || (exports.ExportTableToPointInTimeInput = {}));
var ExportTableToPointInTimeOutput;
(function (ExportTableToPointInTimeOutput) {
    /**
     * @internal
     */
    ExportTableToPointInTimeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportTableToPointInTimeOutput = exports.ExportTableToPointInTimeOutput || (exports.ExportTableToPointInTimeOutput = {}));
var InvalidExportTimeException;
(function (InvalidExportTimeException) {
    /**
     * @internal
     */
    InvalidExportTimeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidExportTimeException = exports.InvalidExportTimeException || (exports.InvalidExportTimeException = {}));
var PointInTimeRecoveryUnavailableException;
(function (PointInTimeRecoveryUnavailableException) {
    /**
     * @internal
     */
    PointInTimeRecoveryUnavailableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PointInTimeRecoveryUnavailableException = exports.PointInTimeRecoveryUnavailableException || (exports.PointInTimeRecoveryUnavailableException = {}));
var ListBackupsInput;
(function (ListBackupsInput) {
    /**
     * @internal
     */
    ListBackupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBackupsInput = exports.ListBackupsInput || (exports.ListBackupsInput = {}));
var ListBackupsOutput;
(function (ListBackupsOutput) {
    /**
     * @internal
     */
    ListBackupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListBackupsOutput = exports.ListBackupsOutput || (exports.ListBackupsOutput = {}));
var ListContributorInsightsInput;
(function (ListContributorInsightsInput) {
    /**
     * @internal
     */
    ListContributorInsightsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContributorInsightsInput = exports.ListContributorInsightsInput || (exports.ListContributorInsightsInput = {}));
var ListContributorInsightsOutput;
(function (ListContributorInsightsOutput) {
    /**
     * @internal
     */
    ListContributorInsightsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContributorInsightsOutput = exports.ListContributorInsightsOutput || (exports.ListContributorInsightsOutput = {}));
var ListExportsInput;
(function (ListExportsInput) {
    /**
     * @internal
     */
    ListExportsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExportsInput = exports.ListExportsInput || (exports.ListExportsInput = {}));
var ExportSummary;
(function (ExportSummary) {
    /**
     * @internal
     */
    ExportSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExportSummary = exports.ExportSummary || (exports.ExportSummary = {}));
var ListExportsOutput;
(function (ListExportsOutput) {
    /**
     * @internal
     */
    ListExportsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListExportsOutput = exports.ListExportsOutput || (exports.ListExportsOutput = {}));
var ListGlobalTablesInput;
(function (ListGlobalTablesInput) {
    /**
     * @internal
     */
    ListGlobalTablesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGlobalTablesInput = exports.ListGlobalTablesInput || (exports.ListGlobalTablesInput = {}));
var GlobalTable;
(function (GlobalTable) {
    /**
     * @internal
     */
    GlobalTable.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalTable = exports.GlobalTable || (exports.GlobalTable = {}));
var ListGlobalTablesOutput;
(function (ListGlobalTablesOutput) {
    /**
     * @internal
     */
    ListGlobalTablesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGlobalTablesOutput = exports.ListGlobalTablesOutput || (exports.ListGlobalTablesOutput = {}));
var ListTablesInput;
(function (ListTablesInput) {
    /**
     * @internal
     */
    ListTablesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesInput = exports.ListTablesInput || (exports.ListTablesInput = {}));
var ListTablesOutput;
(function (ListTablesOutput) {
    /**
     * @internal
     */
    ListTablesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTablesOutput = exports.ListTablesOutput || (exports.ListTablesOutput = {}));
var ListTagsOfResourceInput;
(function (ListTagsOfResourceInput) {
    /**
     * @internal
     */
    ListTagsOfResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsOfResourceInput = exports.ListTagsOfResourceInput || (exports.ListTagsOfResourceInput = {}));
var ListTagsOfResourceOutput;
(function (ListTagsOfResourceOutput) {
    /**
     * @internal
     */
    ListTagsOfResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsOfResourceOutput = exports.ListTagsOfResourceOutput || (exports.ListTagsOfResourceOutput = {}));
var RestoreTableFromBackupInput;
(function (RestoreTableFromBackupInput) {
    /**
     * @internal
     */
    RestoreTableFromBackupInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreTableFromBackupInput = exports.RestoreTableFromBackupInput || (exports.RestoreTableFromBackupInput = {}));
var RestoreTableFromBackupOutput;
(function (RestoreTableFromBackupOutput) {
    /**
     * @internal
     */
    RestoreTableFromBackupOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreTableFromBackupOutput = exports.RestoreTableFromBackupOutput || (exports.RestoreTableFromBackupOutput = {}));
var TableAlreadyExistsException;
(function (TableAlreadyExistsException) {
    /**
     * @internal
     */
    TableAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TableAlreadyExistsException = exports.TableAlreadyExistsException || (exports.TableAlreadyExistsException = {}));
var InvalidRestoreTimeException;
(function (InvalidRestoreTimeException) {
    /**
     * @internal
     */
    InvalidRestoreTimeException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRestoreTimeException = exports.InvalidRestoreTimeException || (exports.InvalidRestoreTimeException = {}));
var RestoreTableToPointInTimeInput;
(function (RestoreTableToPointInTimeInput) {
    /**
     * @internal
     */
    RestoreTableToPointInTimeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreTableToPointInTimeInput = exports.RestoreTableToPointInTimeInput || (exports.RestoreTableToPointInTimeInput = {}));
var RestoreTableToPointInTimeOutput;
(function (RestoreTableToPointInTimeOutput) {
    /**
     * @internal
     */
    RestoreTableToPointInTimeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RestoreTableToPointInTimeOutput = exports.RestoreTableToPointInTimeOutput || (exports.RestoreTableToPointInTimeOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var PointInTimeRecoverySpecification;
(function (PointInTimeRecoverySpecification) {
    /**
     * @internal
     */
    PointInTimeRecoverySpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PointInTimeRecoverySpecification = exports.PointInTimeRecoverySpecification || (exports.PointInTimeRecoverySpecification = {}));
var UpdateContinuousBackupsInput;
(function (UpdateContinuousBackupsInput) {
    /**
     * @internal
     */
    UpdateContinuousBackupsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContinuousBackupsInput = exports.UpdateContinuousBackupsInput || (exports.UpdateContinuousBackupsInput = {}));
var UpdateContinuousBackupsOutput;
(function (UpdateContinuousBackupsOutput) {
    /**
     * @internal
     */
    UpdateContinuousBackupsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContinuousBackupsOutput = exports.UpdateContinuousBackupsOutput || (exports.UpdateContinuousBackupsOutput = {}));
var UpdateContributorInsightsInput;
(function (UpdateContributorInsightsInput) {
    /**
     * @internal
     */
    UpdateContributorInsightsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContributorInsightsInput = exports.UpdateContributorInsightsInput || (exports.UpdateContributorInsightsInput = {}));
var UpdateContributorInsightsOutput;
(function (UpdateContributorInsightsOutput) {
    /**
     * @internal
     */
    UpdateContributorInsightsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateContributorInsightsOutput = exports.UpdateContributorInsightsOutput || (exports.UpdateContributorInsightsOutput = {}));
var ReplicaAlreadyExistsException;
(function (ReplicaAlreadyExistsException) {
    /**
     * @internal
     */
    ReplicaAlreadyExistsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaAlreadyExistsException = exports.ReplicaAlreadyExistsException || (exports.ReplicaAlreadyExistsException = {}));
var ReplicaNotFoundException;
(function (ReplicaNotFoundException) {
    /**
     * @internal
     */
    ReplicaNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaNotFoundException = exports.ReplicaNotFoundException || (exports.ReplicaNotFoundException = {}));
var ReplicaUpdate;
(function (ReplicaUpdate) {
    /**
     * @internal
     */
    ReplicaUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaUpdate = exports.ReplicaUpdate || (exports.ReplicaUpdate = {}));
var UpdateGlobalTableInput;
(function (UpdateGlobalTableInput) {
    /**
     * @internal
     */
    UpdateGlobalTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalTableInput = exports.UpdateGlobalTableInput || (exports.UpdateGlobalTableInput = {}));
var UpdateGlobalTableOutput;
(function (UpdateGlobalTableOutput) {
    /**
     * @internal
     */
    UpdateGlobalTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalTableOutput = exports.UpdateGlobalTableOutput || (exports.UpdateGlobalTableOutput = {}));
var IndexNotFoundException;
(function (IndexNotFoundException) {
    /**
     * @internal
     */
    IndexNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IndexNotFoundException = exports.IndexNotFoundException || (exports.IndexNotFoundException = {}));
var GlobalTableGlobalSecondaryIndexSettingsUpdate;
(function (GlobalTableGlobalSecondaryIndexSettingsUpdate) {
    /**
     * @internal
     */
    GlobalTableGlobalSecondaryIndexSettingsUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalTableGlobalSecondaryIndexSettingsUpdate = exports.GlobalTableGlobalSecondaryIndexSettingsUpdate || (exports.GlobalTableGlobalSecondaryIndexSettingsUpdate = {}));
var ReplicaGlobalSecondaryIndexSettingsUpdate;
(function (ReplicaGlobalSecondaryIndexSettingsUpdate) {
    /**
     * @internal
     */
    ReplicaGlobalSecondaryIndexSettingsUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaGlobalSecondaryIndexSettingsUpdate = exports.ReplicaGlobalSecondaryIndexSettingsUpdate || (exports.ReplicaGlobalSecondaryIndexSettingsUpdate = {}));
var ReplicaSettingsUpdate;
(function (ReplicaSettingsUpdate) {
    /**
     * @internal
     */
    ReplicaSettingsUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaSettingsUpdate = exports.ReplicaSettingsUpdate || (exports.ReplicaSettingsUpdate = {}));
var UpdateGlobalTableSettingsInput;
(function (UpdateGlobalTableSettingsInput) {
    /**
     * @internal
     */
    UpdateGlobalTableSettingsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalTableSettingsInput = exports.UpdateGlobalTableSettingsInput || (exports.UpdateGlobalTableSettingsInput = {}));
var UpdateGlobalTableSettingsOutput;
(function (UpdateGlobalTableSettingsOutput) {
    /**
     * @internal
     */
    UpdateGlobalTableSettingsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalTableSettingsOutput = exports.UpdateGlobalTableSettingsOutput || (exports.UpdateGlobalTableSettingsOutput = {}));
var UpdateGlobalSecondaryIndexAction;
(function (UpdateGlobalSecondaryIndexAction) {
    /**
     * @internal
     */
    UpdateGlobalSecondaryIndexAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGlobalSecondaryIndexAction = exports.UpdateGlobalSecondaryIndexAction || (exports.UpdateGlobalSecondaryIndexAction = {}));
var GlobalSecondaryIndexUpdate;
(function (GlobalSecondaryIndexUpdate) {
    /**
     * @internal
     */
    GlobalSecondaryIndexUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalSecondaryIndexUpdate = exports.GlobalSecondaryIndexUpdate || (exports.GlobalSecondaryIndexUpdate = {}));
var UpdateReplicationGroupMemberAction;
(function (UpdateReplicationGroupMemberAction) {
    /**
     * @internal
     */
    UpdateReplicationGroupMemberAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateReplicationGroupMemberAction = exports.UpdateReplicationGroupMemberAction || (exports.UpdateReplicationGroupMemberAction = {}));
var ReplicationGroupUpdate;
(function (ReplicationGroupUpdate) {
    /**
     * @internal
     */
    ReplicationGroupUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicationGroupUpdate = exports.ReplicationGroupUpdate || (exports.ReplicationGroupUpdate = {}));
var UpdateTableInput;
(function (UpdateTableInput) {
    /**
     * @internal
     */
    UpdateTableInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableInput = exports.UpdateTableInput || (exports.UpdateTableInput = {}));
var UpdateTableOutput;
(function (UpdateTableOutput) {
    /**
     * @internal
     */
    UpdateTableOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableOutput = exports.UpdateTableOutput || (exports.UpdateTableOutput = {}));
var GlobalSecondaryIndexAutoScalingUpdate;
(function (GlobalSecondaryIndexAutoScalingUpdate) {
    /**
     * @internal
     */
    GlobalSecondaryIndexAutoScalingUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GlobalSecondaryIndexAutoScalingUpdate = exports.GlobalSecondaryIndexAutoScalingUpdate || (exports.GlobalSecondaryIndexAutoScalingUpdate = {}));
var ReplicaGlobalSecondaryIndexAutoScalingUpdate;
(function (ReplicaGlobalSecondaryIndexAutoScalingUpdate) {
    /**
     * @internal
     */
    ReplicaGlobalSecondaryIndexAutoScalingUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaGlobalSecondaryIndexAutoScalingUpdate = exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate || (exports.ReplicaGlobalSecondaryIndexAutoScalingUpdate = {}));
var ReplicaAutoScalingUpdate;
(function (ReplicaAutoScalingUpdate) {
    /**
     * @internal
     */
    ReplicaAutoScalingUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReplicaAutoScalingUpdate = exports.ReplicaAutoScalingUpdate || (exports.ReplicaAutoScalingUpdate = {}));
var UpdateTableReplicaAutoScalingInput;
(function (UpdateTableReplicaAutoScalingInput) {
    /**
     * @internal
     */
    UpdateTableReplicaAutoScalingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableReplicaAutoScalingInput = exports.UpdateTableReplicaAutoScalingInput || (exports.UpdateTableReplicaAutoScalingInput = {}));
var UpdateTableReplicaAutoScalingOutput;
(function (UpdateTableReplicaAutoScalingOutput) {
    /**
     * @internal
     */
    UpdateTableReplicaAutoScalingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTableReplicaAutoScalingOutput = exports.UpdateTableReplicaAutoScalingOutput || (exports.UpdateTableReplicaAutoScalingOutput = {}));
var TimeToLiveSpecification;
(function (TimeToLiveSpecification) {
    /**
     * @internal
     */
    TimeToLiveSpecification.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeToLiveSpecification = exports.TimeToLiveSpecification || (exports.TimeToLiveSpecification = {}));
var UpdateTimeToLiveInput;
(function (UpdateTimeToLiveInput) {
    /**
     * @internal
     */
    UpdateTimeToLiveInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTimeToLiveInput = exports.UpdateTimeToLiveInput || (exports.UpdateTimeToLiveInput = {}));
var UpdateTimeToLiveOutput;
(function (UpdateTimeToLiveOutput) {
    /**
     * @internal
     */
    UpdateTimeToLiveOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateTimeToLiveOutput = exports.UpdateTimeToLiveOutput || (exports.UpdateTimeToLiveOutput = {}));
var AttributeValue;
(function (AttributeValue) {
    AttributeValue.visit = (value, visitor) => {
        if (value.S !== undefined)
            return visitor.S(value.S);
        if (value.N !== undefined)
            return visitor.N(value.N);
        if (value.B !== undefined)
            return visitor.B(value.B);
        if (value.SS !== undefined)
            return visitor.SS(value.SS);
        if (value.NS !== undefined)
            return visitor.NS(value.NS);
        if (value.BS !== undefined)
            return visitor.BS(value.BS);
        if (value.M !== undefined)
            return visitor.M(value.M);
        if (value.L !== undefined)
            return visitor.L(value.L);
        if (value.NULL !== undefined)
            return visitor.NULL(value.NULL);
        if (value.BOOL !== undefined)
            return visitor.BOOL(value.BOOL);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    AttributeValue.filterSensitiveLog = (obj) => {
        if (obj.S !== undefined)
            return { S: obj.S };
        if (obj.N !== undefined)
            return { N: obj.N };
        if (obj.B !== undefined)
            return { B: obj.B };
        if (obj.SS !== undefined)
            return { SS: obj.SS };
        if (obj.NS !== undefined)
            return { NS: obj.NS };
        if (obj.BS !== undefined)
            return { BS: obj.BS };
        if (obj.M !== undefined)
            return {
                M: Object.entries(obj.M).reduce((acc, [key, value]) => ({
                    ...acc,
                    [key]: AttributeValue.filterSensitiveLog(value),
                }), {}),
            };
        if (obj.L !== undefined)
            return { L: obj.L.map((item) => AttributeValue.filterSensitiveLog(item)) };
        if (obj.NULL !== undefined)
            return { NULL: obj.NULL };
        if (obj.BOOL !== undefined)
            return { BOOL: obj.BOOL };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(AttributeValue = exports.AttributeValue || (exports.AttributeValue = {}));
var AttributeValueUpdate;
(function (AttributeValueUpdate) {
    /**
     * @internal
     */
    AttributeValueUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: AttributeValue.filterSensitiveLog(obj.Value) }),
    });
})(AttributeValueUpdate = exports.AttributeValueUpdate || (exports.AttributeValueUpdate = {}));
var BatchStatementRequest;
(function (BatchStatementRequest) {
    /**
     * @internal
     */
    BatchStatementRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item)) }),
    });
})(BatchStatementRequest = exports.BatchStatementRequest || (exports.BatchStatementRequest = {}));
var BatchStatementResponse;
(function (BatchStatementResponse) {
    /**
     * @internal
     */
    BatchStatementResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(BatchStatementResponse = exports.BatchStatementResponse || (exports.BatchStatementResponse = {}));
var CancellationReason;
(function (CancellationReason) {
    /**
     * @internal
     */
    CancellationReason.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(CancellationReason = exports.CancellationReason || (exports.CancellationReason = {}));
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.AttributeValueList && {
            AttributeValueList: obj.AttributeValueList.map((item) => AttributeValue.filterSensitiveLog(item)),
        }),
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var DeleteRequest;
(function (DeleteRequest) {
    /**
     * @internal
     */
    DeleteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(DeleteRequest = exports.DeleteRequest || (exports.DeleteRequest = {}));
var ExecuteStatementInput;
(function (ExecuteStatementInput) {
    /**
     * @internal
     */
    ExecuteStatementInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item)) }),
    });
})(ExecuteStatementInput = exports.ExecuteStatementInput || (exports.ExecuteStatementInput = {}));
var Get;
(function (Get) {
    /**
     * @internal
     */
    Get.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(Get = exports.Get || (exports.Get = {}));
var GetItemInput;
(function (GetItemInput) {
    /**
     * @internal
     */
    GetItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(GetItemInput = exports.GetItemInput || (exports.GetItemInput = {}));
var GetItemOutput;
(function (GetItemOutput) {
    /**
     * @internal
     */
    GetItemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(GetItemOutput = exports.GetItemOutput || (exports.GetItemOutput = {}));
var ItemCollectionMetrics;
(function (ItemCollectionMetrics) {
    /**
     * @internal
     */
    ItemCollectionMetrics.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ItemCollectionKey && {
            ItemCollectionKey: Object.entries(obj.ItemCollectionKey).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(ItemCollectionMetrics = exports.ItemCollectionMetrics || (exports.ItemCollectionMetrics = {}));
var ItemResponse;
(function (ItemResponse) {
    /**
     * @internal
     */
    ItemResponse.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(ItemResponse = exports.ItemResponse || (exports.ItemResponse = {}));
var ParameterizedStatement;
(function (ParameterizedStatement) {
    /**
     * @internal
     */
    ParameterizedStatement.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Parameters && { Parameters: obj.Parameters.map((item) => AttributeValue.filterSensitiveLog(item)) }),
    });
})(ParameterizedStatement = exports.ParameterizedStatement || (exports.ParameterizedStatement = {}));
var PutRequest;
(function (PutRequest) {
    /**
     * @internal
     */
    PutRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(PutRequest = exports.PutRequest || (exports.PutRequest = {}));
var ExecuteStatementOutput;
(function (ExecuteStatementOutput) {
    /**
     * @internal
     */
    ExecuteStatementOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Items && {
            Items: obj.Items.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {})),
        }),
    });
})(ExecuteStatementOutput = exports.ExecuteStatementOutput || (exports.ExecuteStatementOutput = {}));
var KeysAndAttributes;
(function (KeysAndAttributes) {
    /**
     * @internal
     */
    KeysAndAttributes.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Keys && {
            Keys: obj.Keys.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {})),
        }),
    });
})(KeysAndAttributes = exports.KeysAndAttributes || (exports.KeysAndAttributes = {}));
var TransactGetItem;
(function (TransactGetItem) {
    /**
     * @internal
     */
    TransactGetItem.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Get && { Get: Get.filterSensitiveLog(obj.Get) }),
    });
})(TransactGetItem = exports.TransactGetItem || (exports.TransactGetItem = {}));
var BatchExecuteStatementInput;
(function (BatchExecuteStatementInput) {
    /**
     * @internal
     */
    BatchExecuteStatementInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Statements && { Statements: obj.Statements.map((item) => BatchStatementRequest.filterSensitiveLog(item)) }),
    });
})(BatchExecuteStatementInput = exports.BatchExecuteStatementInput || (exports.BatchExecuteStatementInput = {}));
var BatchExecuteStatementOutput;
(function (BatchExecuteStatementOutput) {
    /**
     * @internal
     */
    BatchExecuteStatementOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Responses && { Responses: obj.Responses.map((item) => BatchStatementResponse.filterSensitiveLog(item)) }),
    });
})(BatchExecuteStatementOutput = exports.BatchExecuteStatementOutput || (exports.BatchExecuteStatementOutput = {}));
var ExecuteTransactionInput;
(function (ExecuteTransactionInput) {
    /**
     * @internal
     */
    ExecuteTransactionInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TransactStatements && {
            TransactStatements: obj.TransactStatements.map((item) => ParameterizedStatement.filterSensitiveLog(item)),
        }),
    });
})(ExecuteTransactionInput = exports.ExecuteTransactionInput || (exports.ExecuteTransactionInput = {}));
var ExecuteTransactionOutput;
(function (ExecuteTransactionOutput) {
    /**
     * @internal
     */
    ExecuteTransactionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Responses && { Responses: obj.Responses.map((item) => ItemResponse.filterSensitiveLog(item)) }),
    });
})(ExecuteTransactionOutput = exports.ExecuteTransactionOutput || (exports.ExecuteTransactionOutput = {}));
var TransactGetItemsOutput;
(function (TransactGetItemsOutput) {
    /**
     * @internal
     */
    TransactGetItemsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Responses && { Responses: obj.Responses.map((item) => ItemResponse.filterSensitiveLog(item)) }),
    });
})(TransactGetItemsOutput = exports.TransactGetItemsOutput || (exports.TransactGetItemsOutput = {}));
var TransactionCanceledException;
(function (TransactionCanceledException) {
    /**
     * @internal
     */
    TransactionCanceledException.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.CancellationReasons && {
            CancellationReasons: obj.CancellationReasons.map((item) => CancellationReason.filterSensitiveLog(item)),
        }),
    });
})(TransactionCanceledException = exports.TransactionCanceledException || (exports.TransactionCanceledException = {}));
var BatchGetItemInput;
(function (BatchGetItemInput) {
    /**
     * @internal
     */
    BatchGetItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RequestItems && {
            RequestItems: Object.entries(obj.RequestItems).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: KeysAndAttributes.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(BatchGetItemInput = exports.BatchGetItemInput || (exports.BatchGetItemInput = {}));
var ExpectedAttributeValue;
(function (ExpectedAttributeValue) {
    /**
     * @internal
     */
    ExpectedAttributeValue.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: AttributeValue.filterSensitiveLog(obj.Value) }),
        ...(obj.AttributeValueList && {
            AttributeValueList: obj.AttributeValueList.map((item) => AttributeValue.filterSensitiveLog(item)),
        }),
    });
})(ExpectedAttributeValue = exports.ExpectedAttributeValue || (exports.ExpectedAttributeValue = {}));
var TransactGetItemsInput;
(function (TransactGetItemsInput) {
    /**
     * @internal
     */
    TransactGetItemsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TransactItems && {
            TransactItems: obj.TransactItems.map((item) => TransactGetItem.filterSensitiveLog(item)),
        }),
    });
})(TransactGetItemsInput = exports.TransactGetItemsInput || (exports.TransactGetItemsInput = {}));
var TransactWriteItemsOutput;
(function (TransactWriteItemsOutput) {
    /**
     * @internal
     */
    TransactWriteItemsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ItemCollectionMetrics && {
            ItemCollectionMetrics: Object.entries(obj.ItemCollectionMetrics).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.map((item) => ItemCollectionMetrics.filterSensitiveLog(item)),
            }), {}),
        }),
    });
})(TransactWriteItemsOutput = exports.TransactWriteItemsOutput || (exports.TransactWriteItemsOutput = {}));
var ConditionCheck;
(function (ConditionCheck) {
    /**
     * @internal
     */
    ConditionCheck.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(ConditionCheck = exports.ConditionCheck || (exports.ConditionCheck = {}));
var Delete;
(function (Delete) {
    /**
     * @internal
     */
    Delete.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(Delete = exports.Delete || (exports.Delete = {}));
var Put;
(function (Put) {
    /**
     * @internal
     */
    Put.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(Put = exports.Put || (exports.Put = {}));
var Update;
(function (Update) {
    /**
     * @internal
     */
    Update.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(Update = exports.Update || (exports.Update = {}));
var DeleteItemOutput;
(function (DeleteItemOutput) {
    /**
     * @internal
     */
    DeleteItemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Attributes && {
            Attributes: Object.entries(obj.Attributes).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ItemCollectionMetrics && {
            ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics),
        }),
    });
})(DeleteItemOutput = exports.DeleteItemOutput || (exports.DeleteItemOutput = {}));
var PutItemOutput;
(function (PutItemOutput) {
    /**
     * @internal
     */
    PutItemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Attributes && {
            Attributes: Object.entries(obj.Attributes).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ItemCollectionMetrics && {
            ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics),
        }),
    });
})(PutItemOutput = exports.PutItemOutput || (exports.PutItemOutput = {}));
var QueryOutput;
(function (QueryOutput) {
    /**
     * @internal
     */
    QueryOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Items && {
            Items: obj.Items.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {})),
        }),
        ...(obj.LastEvaluatedKey && {
            LastEvaluatedKey: Object.entries(obj.LastEvaluatedKey).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(QueryOutput = exports.QueryOutput || (exports.QueryOutput = {}));
var ScanOutput;
(function (ScanOutput) {
    /**
     * @internal
     */
    ScanOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Items && {
            Items: obj.Items.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {})),
        }),
        ...(obj.LastEvaluatedKey && {
            LastEvaluatedKey: Object.entries(obj.LastEvaluatedKey).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(ScanOutput = exports.ScanOutput || (exports.ScanOutput = {}));
var UpdateItemOutput;
(function (UpdateItemOutput) {
    /**
     * @internal
     */
    UpdateItemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Attributes && {
            Attributes: Object.entries(obj.Attributes).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ItemCollectionMetrics && {
            ItemCollectionMetrics: ItemCollectionMetrics.filterSensitiveLog(obj.ItemCollectionMetrics),
        }),
    });
})(UpdateItemOutput = exports.UpdateItemOutput || (exports.UpdateItemOutput = {}));
var WriteRequest;
(function (WriteRequest) {
    /**
     * @internal
     */
    WriteRequest.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.PutRequest && { PutRequest: PutRequest.filterSensitiveLog(obj.PutRequest) }),
        ...(obj.DeleteRequest && { DeleteRequest: DeleteRequest.filterSensitiveLog(obj.DeleteRequest) }),
    });
})(WriteRequest = exports.WriteRequest || (exports.WriteRequest = {}));
var BatchGetItemOutput;
(function (BatchGetItemOutput) {
    /**
     * @internal
     */
    BatchGetItemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Responses && {
            Responses: Object.entries(obj.Responses).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.map((item) => Object.entries(item).reduce((acc, [key, value]) => ({
                    ...acc,
                    [key]: AttributeValue.filterSensitiveLog(value),
                }), {})),
            }), {}),
        }),
        ...(obj.UnprocessedKeys && {
            UnprocessedKeys: Object.entries(obj.UnprocessedKeys).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: KeysAndAttributes.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(BatchGetItemOutput = exports.BatchGetItemOutput || (exports.BatchGetItemOutput = {}));
var ScanInput;
(function (ScanInput) {
    /**
     * @internal
     */
    ScanInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ScanFilter && {
            ScanFilter: Object.entries(obj.ScanFilter).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: Condition.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExclusiveStartKey && {
            ExclusiveStartKey: Object.entries(obj.ExclusiveStartKey).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(ScanInput = exports.ScanInput || (exports.ScanInput = {}));
var BatchWriteItemInput;
(function (BatchWriteItemInput) {
    /**
     * @internal
     */
    BatchWriteItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.RequestItems && {
            RequestItems: Object.entries(obj.RequestItems).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.map((item) => WriteRequest.filterSensitiveLog(item)),
            }), {}),
        }),
    });
})(BatchWriteItemInput = exports.BatchWriteItemInput || (exports.BatchWriteItemInput = {}));
var DeleteItemInput;
(function (DeleteItemInput) {
    /**
     * @internal
     */
    DeleteItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.Expected && {
            Expected: Object.entries(obj.Expected).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: ExpectedAttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(DeleteItemInput = exports.DeleteItemInput || (exports.DeleteItemInput = {}));
var PutItemInput;
(function (PutItemInput) {
    /**
     * @internal
     */
    PutItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Item && {
            Item: Object.entries(obj.Item).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.Expected && {
            Expected: Object.entries(obj.Expected).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: ExpectedAttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(PutItemInput = exports.PutItemInput || (exports.PutItemInput = {}));
var QueryInput;
(function (QueryInput) {
    /**
     * @internal
     */
    QueryInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.KeyConditions && {
            KeyConditions: Object.entries(obj.KeyConditions).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: Condition.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.QueryFilter && {
            QueryFilter: Object.entries(obj.QueryFilter).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: Condition.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExclusiveStartKey && {
            ExclusiveStartKey: Object.entries(obj.ExclusiveStartKey).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(QueryInput = exports.QueryInput || (exports.QueryInput = {}));
var BatchWriteItemOutput;
(function (BatchWriteItemOutput) {
    /**
     * @internal
     */
    BatchWriteItemOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.UnprocessedItems && {
            UnprocessedItems: Object.entries(obj.UnprocessedItems).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.map((item) => WriteRequest.filterSensitiveLog(item)),
            }), {}),
        }),
        ...(obj.ItemCollectionMetrics && {
            ItemCollectionMetrics: Object.entries(obj.ItemCollectionMetrics).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: value.map((item) => ItemCollectionMetrics.filterSensitiveLog(item)),
            }), {}),
        }),
    });
})(BatchWriteItemOutput = exports.BatchWriteItemOutput || (exports.BatchWriteItemOutput = {}));
var UpdateItemInput;
(function (UpdateItemInput) {
    /**
     * @internal
     */
    UpdateItemInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Key && {
            Key: Object.entries(obj.Key).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.AttributeUpdates && {
            AttributeUpdates: Object.entries(obj.AttributeUpdates).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValueUpdate.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.Expected && {
            Expected: Object.entries(obj.Expected).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: ExpectedAttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
        ...(obj.ExpressionAttributeValues && {
            ExpressionAttributeValues: Object.entries(obj.ExpressionAttributeValues).reduce((acc, [key, value]) => ({
                ...acc,
                [key]: AttributeValue.filterSensitiveLog(value),
            }), {}),
        }),
    });
})(UpdateItemInput = exports.UpdateItemInput || (exports.UpdateItemInput = {}));
var TransactWriteItem;
(function (TransactWriteItem) {
    /**
     * @internal
     */
    TransactWriteItem.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.ConditionCheck && { ConditionCheck: ConditionCheck.filterSensitiveLog(obj.ConditionCheck) }),
        ...(obj.Put && { Put: Put.filterSensitiveLog(obj.Put) }),
        ...(obj.Delete && { Delete: Delete.filterSensitiveLog(obj.Delete) }),
        ...(obj.Update && { Update: Update.filterSensitiveLog(obj.Update) }),
    });
})(TransactWriteItem = exports.TransactWriteItem || (exports.TransactWriteItem = {}));
var TransactWriteItemsInput;
(function (TransactWriteItemsInput) {
    /**
     * @internal
     */
    TransactWriteItemsInput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.TransactItems && {
            TransactItems: obj.TransactItems.map((item) => TransactWriteItem.filterSensitiveLog(item)),
        }),
    });
})(TransactWriteItemsInput = exports.TransactWriteItemsInput || (exports.TransactWriteItemsInput = {}));
//# sourceMappingURL=models_0.js.map