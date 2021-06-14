import { __assign, __awaiter, __generator } from "tslib";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { getCacheKey } from "./getCacheKey";
import { updateDiscoveredEndpointInCache } from "./updateDiscoveredEndpointInCache";
export var endpointDiscoveryMiddleware = function (config, middlewareConfig) {
    return function (next, context) {
        return function (args) { return __awaiter(void 0, void 0, void 0, function () {
            var endpointDiscoveryCommandCtor, isDiscoveredEndpointRequired, identifiers, clientName, commandName, isEndpointDiscoveryEnabled, cacheKey, request, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (config.isCustomEndpoint) {
                            if (config.isClientEndpointDiscoveryEnabled) {
                                throw new Error("Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.");
                            }
                            return [2 /*return*/, next(args)];
                        }
                        endpointDiscoveryCommandCtor = config.endpointDiscoveryCommandCtor;
                        isDiscoveredEndpointRequired = middlewareConfig.isDiscoveredEndpointRequired, identifiers = middlewareConfig.identifiers;
                        clientName = context.clientName, commandName = context.commandName;
                        return [4 /*yield*/, config.endpointDiscoveryEnabled()];
                    case 1:
                        isEndpointDiscoveryEnabled = _a.sent();
                        return [4 /*yield*/, getCacheKey(commandName, config, { identifiers: identifiers })];
                    case 2:
                        cacheKey = _a.sent();
                        if (!isDiscoveredEndpointRequired) return [3 /*break*/, 4];
                        // throw error if endpoint discovery is required, and it's explicitly disabled.
                        if (isEndpointDiscoveryEnabled === false) {
                            throw new Error("Endpoint Discovery is disabled but " + commandName + " on " + clientName + " requires it." +
                                " Please check your configurations.");
                        }
                        // call await on Endpoint Discovery API utility so that function blocks
                        // till discovered endpoint is updated in cache
                        return [4 /*yield*/, updateDiscoveredEndpointInCache(config, __assign(__assign({}, middlewareConfig), { commandName: commandName,
                                cacheKey: cacheKey,
                                endpointDiscoveryCommandCtor: endpointDiscoveryCommandCtor }))];
                    case 3:
                        // call await on Endpoint Discovery API utility so that function blocks
                        // till discovered endpoint is updated in cache
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (isEndpointDiscoveryEnabled) {
                            // Discover endpoints only if endpoint discovery is explicitly enabled.
                            // Do not call await await on Endpoint Discovery API utility so that function
                            // does not block, the command will use discovered endpoint, if available.
                            updateDiscoveredEndpointInCache(config, __assign(__assign({}, middlewareConfig), { commandName: commandName,
                                cacheKey: cacheKey,
                                endpointDiscoveryCommandCtor: endpointDiscoveryCommandCtor }));
                        }
                        _a.label = 5;
                    case 5:
                        request = args.request;
                        if (cacheKey && HttpRequest.isInstance(request)) {
                            endpoint = config.endpointCache.getEndpoint(cacheKey);
                            if (endpoint) {
                                request.hostname = endpoint;
                            }
                        }
                        return [2 /*return*/, next(args)];
                }
            });
        }); };
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5kcG9pbnREaXNjb3ZlcnlNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2VuZHBvaW50RGlzY292ZXJ5TWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBU3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHNUMsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEYsTUFBTSxDQUFDLElBQU0sMkJBQTJCLEdBQ3RDLFVBQUMsTUFBNEQsRUFBRSxnQkFBbUQ7SUFDbEgsT0FBQSxVQUNFLElBQStCLEVBQy9CLE9BQWdDO1FBRWxDLE9BQUEsVUFBTyxJQUFnQzs7Ozs7d0JBQ3JDLElBQUksTUFBTSxDQUFDLGdCQUFnQixFQUFFOzRCQUMzQixJQUFJLE1BQU0sQ0FBQyxnQ0FBZ0MsRUFBRTtnQ0FDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDOzZCQUM1Rjs0QkFDRCxzQkFBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUM7eUJBQ25CO3dCQUVPLDRCQUE0QixHQUFLLE1BQU0sNkJBQVgsQ0FBWTt3QkFDeEMsNEJBQTRCLEdBQWtCLGdCQUFnQiw2QkFBbEMsRUFBRSxXQUFXLEdBQUssZ0JBQWdCLFlBQXJCLENBQXNCO3dCQUMvRCxVQUFVLEdBQWtCLE9BQU8sV0FBekIsRUFBRSxXQUFXLEdBQUssT0FBTyxZQUFaLENBQWE7d0JBQ1QscUJBQU0sTUFBTSxDQUFDLHdCQUF3QixFQUFFLEVBQUE7O3dCQUFwRSwwQkFBMEIsR0FBRyxTQUF1Qzt3QkFDekQscUJBQU0sV0FBVyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLEVBQUE7O3dCQUFsRSxRQUFRLEdBQUcsU0FBdUQ7NkJBRXBFLDRCQUE0QixFQUE1Qix3QkFBNEI7d0JBQzlCLCtFQUErRTt3QkFDL0UsSUFBSSwwQkFBMEIsS0FBSyxLQUFLLEVBQUU7NEJBQ3hDLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0NBQXNDLFdBQVcsWUFBTyxVQUFVLGtCQUFlO2dDQUMvRSxvQ0FBb0MsQ0FDdkMsQ0FBQzt5QkFDSDt3QkFDRCx1RUFBdUU7d0JBQ3ZFLCtDQUErQzt3QkFDL0MscUJBQU0sK0JBQStCLENBQUMsTUFBTSx3QkFDdkMsZ0JBQWdCLEtBQ25CLFdBQVcsYUFBQTtnQ0FDWCxRQUFRLFVBQUE7Z0NBQ1IsNEJBQTRCLDhCQUFBLElBQzVCLEVBQUE7O3dCQVBGLHVFQUF1RTt3QkFDdkUsK0NBQStDO3dCQUMvQyxTQUtFLENBQUM7Ozt3QkFDRSxJQUFJLDBCQUEwQixFQUFFOzRCQUNyQyx1RUFBdUU7NEJBQ3ZFLDZFQUE2RTs0QkFDN0UsMEVBQTBFOzRCQUMxRSwrQkFBK0IsQ0FBQyxNQUFNLHdCQUNqQyxnQkFBZ0IsS0FDbkIsV0FBVyxhQUFBO2dDQUNYLFFBQVEsVUFBQTtnQ0FDUiw0QkFBNEIsOEJBQUEsSUFDNUIsQ0FBQzt5QkFDSjs7O3dCQUVPLE9BQU8sR0FBSyxJQUFJLFFBQVQsQ0FBVTt3QkFDekIsSUFBSSxRQUFRLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTs0QkFDekMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzRCQUM1RCxJQUFJLFFBQVEsRUFBRTtnQ0FDWixPQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs2QkFDN0I7eUJBQ0Y7d0JBRUQsc0JBQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDOzs7YUFDbkI7SUFuREQsQ0FtREM7QUF2REQsQ0F1REMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXF1ZXN0IH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3RvY29sLWh0dHBcIjtcbmltcG9ydCB7XG4gIEJ1aWxkSGFuZGxlcixcbiAgQnVpbGRIYW5kbGVyQXJndW1lbnRzLFxuICBCdWlsZEhhbmRsZXJPdXRwdXQsXG4gIEhhbmRsZXJFeGVjdXRpb25Db250ZXh0LFxuICBNZXRhZGF0YUJlYXJlcixcbn0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbmltcG9ydCB7IGdldENhY2hlS2V5IH0gZnJvbSBcIi4vZ2V0Q2FjaGVLZXlcIjtcbmltcG9ydCB7IEVuZHBvaW50RGlzY292ZXJ5TWlkZGxld2FyZUNvbmZpZyB9IGZyb20gXCIuL2dldEVuZHBvaW50RGlzY292ZXJ5UGx1Z2luXCI7XG5pbXBvcnQgeyBFbmRwb2ludERpc2NvdmVyeVJlc29sdmVkQ29uZmlnLCBQcmV2aW91c2x5UmVzb2x2ZWQgfSBmcm9tIFwiLi9yZXNvbHZlRW5kcG9pbnREaXNjb3ZlcnlDb25maWdcIjtcbmltcG9ydCB7IHVwZGF0ZURpc2NvdmVyZWRFbmRwb2ludEluQ2FjaGUgfSBmcm9tIFwiLi91cGRhdGVEaXNjb3ZlcmVkRW5kcG9pbnRJbkNhY2hlXCI7XG5cbmV4cG9ydCBjb25zdCBlbmRwb2ludERpc2NvdmVyeU1pZGRsZXdhcmUgPVxuICAoY29uZmlnOiBFbmRwb2ludERpc2NvdmVyeVJlc29sdmVkQ29uZmlnICYgUHJldmlvdXNseVJlc29sdmVkLCBtaWRkbGV3YXJlQ29uZmlnOiBFbmRwb2ludERpc2NvdmVyeU1pZGRsZXdhcmVDb25maWcpID0+XG4gIDxPdXRwdXQgZXh0ZW5kcyBNZXRhZGF0YUJlYXJlciA9IE1ldGFkYXRhQmVhcmVyPihcbiAgICBuZXh0OiBCdWlsZEhhbmRsZXI8YW55LCBPdXRwdXQ+LFxuICAgIGNvbnRleHQ6IEhhbmRsZXJFeGVjdXRpb25Db250ZXh0XG4gICk6IEJ1aWxkSGFuZGxlcjxhbnksIE91dHB1dD4gPT5cbiAgYXN5bmMgKGFyZ3M6IEJ1aWxkSGFuZGxlckFyZ3VtZW50czxhbnk+KTogUHJvbWlzZTxCdWlsZEhhbmRsZXJPdXRwdXQ8T3V0cHV0Pj4gPT4ge1xuICAgIGlmIChjb25maWcuaXNDdXN0b21FbmRwb2ludCkge1xuICAgICAgaWYgKGNvbmZpZy5pc0NsaWVudEVuZHBvaW50RGlzY292ZXJ5RW5hYmxlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEN1c3RvbSBlbmRwb2ludCBpcyBzdXBwbGllZDsgZW5kcG9pbnREaXNjb3ZlcnlFbmFibGVkIG11c3Qgbm90IGJlIHRydWUuYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV4dChhcmdzKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGVuZHBvaW50RGlzY292ZXJ5Q29tbWFuZEN0b3IgfSA9IGNvbmZpZztcbiAgICBjb25zdCB7IGlzRGlzY292ZXJlZEVuZHBvaW50UmVxdWlyZWQsIGlkZW50aWZpZXJzIH0gPSBtaWRkbGV3YXJlQ29uZmlnO1xuICAgIGNvbnN0IHsgY2xpZW50TmFtZSwgY29tbWFuZE5hbWUgfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgaXNFbmRwb2ludERpc2NvdmVyeUVuYWJsZWQgPSBhd2FpdCBjb25maWcuZW5kcG9pbnREaXNjb3ZlcnlFbmFibGVkKCk7XG4gICAgY29uc3QgY2FjaGVLZXkgPSBhd2FpdCBnZXRDYWNoZUtleShjb21tYW5kTmFtZSwgY29uZmlnLCB7IGlkZW50aWZpZXJzIH0pO1xuXG4gICAgaWYgKGlzRGlzY292ZXJlZEVuZHBvaW50UmVxdWlyZWQpIHtcbiAgICAgIC8vIHRocm93IGVycm9yIGlmIGVuZHBvaW50IGRpc2NvdmVyeSBpcyByZXF1aXJlZCwgYW5kIGl0J3MgZXhwbGljaXRseSBkaXNhYmxlZC5cbiAgICAgIGlmIChpc0VuZHBvaW50RGlzY292ZXJ5RW5hYmxlZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBFbmRwb2ludCBEaXNjb3ZlcnkgaXMgZGlzYWJsZWQgYnV0ICR7Y29tbWFuZE5hbWV9IG9uICR7Y2xpZW50TmFtZX0gcmVxdWlyZXMgaXQuYCArXG4gICAgICAgICAgICBgIFBsZWFzZSBjaGVjayB5b3VyIGNvbmZpZ3VyYXRpb25zLmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgYXdhaXQgb24gRW5kcG9pbnQgRGlzY292ZXJ5IEFQSSB1dGlsaXR5IHNvIHRoYXQgZnVuY3Rpb24gYmxvY2tzXG4gICAgICAvLyB0aWxsIGRpc2NvdmVyZWQgZW5kcG9pbnQgaXMgdXBkYXRlZCBpbiBjYWNoZVxuICAgICAgYXdhaXQgdXBkYXRlRGlzY292ZXJlZEVuZHBvaW50SW5DYWNoZShjb25maWcsIHtcbiAgICAgICAgLi4ubWlkZGxld2FyZUNvbmZpZyxcbiAgICAgICAgY29tbWFuZE5hbWUsXG4gICAgICAgIGNhY2hlS2V5LFxuICAgICAgICBlbmRwb2ludERpc2NvdmVyeUNvbW1hbmRDdG9yLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChpc0VuZHBvaW50RGlzY292ZXJ5RW5hYmxlZCkge1xuICAgICAgLy8gRGlzY292ZXIgZW5kcG9pbnRzIG9ubHkgaWYgZW5kcG9pbnQgZGlzY292ZXJ5IGlzIGV4cGxpY2l0bHkgZW5hYmxlZC5cbiAgICAgIC8vIERvIG5vdCBjYWxsIGF3YWl0IGF3YWl0IG9uIEVuZHBvaW50IERpc2NvdmVyeSBBUEkgdXRpbGl0eSBzbyB0aGF0IGZ1bmN0aW9uXG4gICAgICAvLyBkb2VzIG5vdCBibG9jaywgdGhlIGNvbW1hbmQgd2lsbCB1c2UgZGlzY292ZXJlZCBlbmRwb2ludCwgaWYgYXZhaWxhYmxlLlxuICAgICAgdXBkYXRlRGlzY292ZXJlZEVuZHBvaW50SW5DYWNoZShjb25maWcsIHtcbiAgICAgICAgLi4ubWlkZGxld2FyZUNvbmZpZyxcbiAgICAgICAgY29tbWFuZE5hbWUsXG4gICAgICAgIGNhY2hlS2V5LFxuICAgICAgICBlbmRwb2ludERpc2NvdmVyeUNvbW1hbmRDdG9yLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyByZXF1ZXN0IH0gPSBhcmdzO1xuICAgIGlmIChjYWNoZUtleSAmJiBIdHRwUmVxdWVzdC5pc0luc3RhbmNlKHJlcXVlc3QpKSB7XG4gICAgICBjb25zdCBlbmRwb2ludCA9IGNvbmZpZy5lbmRwb2ludENhY2hlLmdldEVuZHBvaW50KGNhY2hlS2V5KTtcbiAgICAgIGlmIChlbmRwb2ludCkge1xuICAgICAgICByZXF1ZXN0Lmhvc3RuYW1lID0gZW5kcG9pbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQoYXJncyk7XG4gIH07XG4iXX0=