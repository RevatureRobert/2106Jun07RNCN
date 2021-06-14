import { __awaiter, __generator } from "tslib";
var requestQueue = {};
export var updateDiscoveredEndpointInCache = function (config, options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var endpointCache = config.endpointCache;
                var cacheKey = options.cacheKey, commandName = options.commandName, identifiers = options.identifiers;
                var endpoints = endpointCache.get(cacheKey);
                if (endpoints && endpoints.length === 1 && endpoints[0].Address === "") {
                    // Endpoint operation already in-flight.
                    // Add request to request queue only if discovered endpoint is required.
                    if (options.isDiscoveredEndpointRequired) {
                        if (!requestQueue[cacheKey])
                            requestQueue[cacheKey] = [];
                        requestQueue[cacheKey].push({ resolve: resolve, reject: reject });
                    }
                    else {
                        resolve();
                    }
                }
                else if (endpoints && endpoints.length > 0) {
                    // Endpoint record is present in cache.
                    resolve();
                }
                else {
                    // put in a placeholder for endpoints already requested, prevent
                    // too much in-flight calls.
                    var placeholderEndpoints_1 = [{ Address: "", CachePeriodInMinutes: 1 }];
                    endpointCache.set(cacheKey, placeholderEndpoints_1);
                    var command = new options.endpointDiscoveryCommandCtor({
                        Operation: commandName.substr(0, commandName.length - 7),
                        Identifiers: identifiers,
                    });
                    var handler = command.resolveMiddleware(options.clientStack, config, options.options);
                    handler(command)
                        .then(function (result) {
                        endpointCache.set(cacheKey, result.output.Endpoints);
                        if (requestQueue[cacheKey]) {
                            requestQueue[cacheKey].forEach(function (_a) {
                                var resolve = _a.resolve;
                                resolve();
                            });
                            delete requestQueue[cacheKey];
                        }
                        resolve();
                    })
                        .catch(function (error) {
                        var _a;
                        if (error.name === "InvalidEndpointException" || ((_a = error.$metadata) === null || _a === void 0 ? void 0 : _a.httpStatusCode) === 421) {
                            // Endpoint is invalid, delete the cache entry.
                            endpointCache.delete(cacheKey);
                        }
                        var errorToThrow = Object.assign(new Error("The operation to discover endpoint failed." +
                            " Please retry, or provide a custom endpoint and disable endpoint discovery to proceed."), { reason: error });
                        //fail all the pending requests in batch
                        if (requestQueue[cacheKey]) {
                            requestQueue[cacheKey].forEach(function (_a) {
                                var reject = _a.reject;
                                reject(errorToThrow);
                            });
                            delete requestQueue[cacheKey];
                        }
                        if (options.isDiscoveredEndpointRequired) {
                            reject(errorToThrow);
                        }
                        else {
                            // Endpoint Discovery is optional. No error needs to be thrown.
                            // Set placeHolder endpoint to disable refresh for one minute.
                            endpointCache.set(cacheKey, placeholderEndpoints_1);
                            resolve();
                        }
                    });
                }
            })];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlRGlzY292ZXJlZEVuZHBvaW50SW5DYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGVEaXNjb3ZlcmVkRW5kcG9pbnRJbkNhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFTQSxJQUFNLFlBQVksR0FBaUUsRUFBRSxDQUFDO0FBRXRGLE1BQU0sQ0FBQyxJQUFNLCtCQUErQixHQUFHLFVBQzdDLE1BQTRELEVBQzVELE9BQStDOztRQUUvQyxzQkFBQSxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUN4QixJQUFBLGFBQWEsR0FBSyxNQUFNLGNBQVgsQ0FBWTtnQkFDekIsSUFBQSxRQUFRLEdBQStCLE9BQU8sU0FBdEMsRUFBRSxXQUFXLEdBQWtCLE9BQU8sWUFBekIsRUFBRSxXQUFXLEdBQUssT0FBTyxZQUFaLENBQWE7Z0JBRXZELElBQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTlDLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssRUFBRSxFQUFFO29CQUN0RSx3Q0FBd0M7b0JBQ3hDLHdFQUF3RTtvQkFDeEUsSUFBSSxPQUFPLENBQUMsNEJBQTRCLEVBQUU7d0JBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDOzRCQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ3pELFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7cUJBQ2xEO3lCQUFNO3dCQUNMLE9BQU8sRUFBRSxDQUFDO3FCQUNYO2lCQUNGO3FCQUFNLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUM1Qyx1Q0FBdUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDO2lCQUNYO3FCQUFNO29CQUNMLGdFQUFnRTtvQkFDaEUsNEJBQTRCO29CQUM1QixJQUFNLHNCQUFvQixHQUFHLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLG9CQUFvQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3hFLGFBQWEsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLHNCQUFvQixDQUFDLENBQUM7b0JBRWxELElBQU0sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLDRCQUE0QixDQUFDO3dCQUN2RCxTQUFTLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQ3hELFdBQVcsRUFBRSxXQUFXO3FCQUN6QixDQUFDLENBQUM7b0JBQ0gsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDeEYsT0FBTyxDQUFDLE9BQU8sQ0FBQzt5QkFDYixJQUFJLENBQUMsVUFBQyxNQUFXO3dCQUNoQixhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNyRCxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTs0QkFDMUIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVc7b0NBQVQsT0FBTyxhQUFBO2dDQUN2QyxPQUFPLEVBQUUsQ0FBQzs0QkFDWixDQUFDLENBQUMsQ0FBQzs0QkFDSCxPQUFPLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDL0I7d0JBQ0QsT0FBTyxFQUFFLENBQUM7b0JBQ1osQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQVU7O3dCQUNoQixJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssMEJBQTBCLElBQUksQ0FBQSxNQUFBLEtBQUssQ0FBQyxTQUFTLDBDQUFFLGNBQWMsTUFBSyxHQUFHLEVBQUU7NEJBQ3hGLCtDQUErQzs0QkFDL0MsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDaEM7d0JBRUQsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDaEMsSUFBSSxLQUFLLENBQ1AsNENBQTRDOzRCQUMxQyx3RkFBd0YsQ0FDM0YsRUFDRCxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FDbEIsQ0FBQzt3QkFFRix3Q0FBd0M7d0JBQ3hDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFOzRCQUMxQixZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBVTtvQ0FBUixNQUFNLFlBQUE7Z0NBQ3RDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDdkIsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7eUJBQy9CO3dCQUVELElBQUksT0FBTyxDQUFDLDRCQUE0QixFQUFFOzRCQUN4QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7eUJBQ3RCOzZCQUFNOzRCQUNMLCtEQUErRDs0QkFDL0QsOERBQThEOzRCQUM5RCxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxzQkFBb0IsQ0FBQyxDQUFDOzRCQUNsRCxPQUFPLEVBQUUsQ0FBQzt5QkFDWDtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDTjtZQUNILENBQUMsQ0FBQyxFQUFBOztLQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmRwb2ludERpc2NvdmVyeU1pZGRsZXdhcmVDb25maWcgfSBmcm9tIFwiLi9nZXRFbmRwb2ludERpc2NvdmVyeVBsdWdpblwiO1xuaW1wb3J0IHsgRW5kcG9pbnREaXNjb3ZlcnlSZXNvbHZlZENvbmZpZywgUHJldmlvdXNseVJlc29sdmVkIH0gZnJvbSBcIi4vcmVzb2x2ZUVuZHBvaW50RGlzY292ZXJ5Q29uZmlnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlRGlzY292ZXJlZEVuZHBvaW50SW5DYWNoZU9wdGlvbnMgZXh0ZW5kcyBFbmRwb2ludERpc2NvdmVyeU1pZGRsZXdhcmVDb25maWcge1xuICBjYWNoZUtleTogc3RyaW5nO1xuICBjb21tYW5kTmFtZTogc3RyaW5nO1xuICBlbmRwb2ludERpc2NvdmVyeUNvbW1hbmRDdG9yOiBuZXcgKGNvbWFuZENvbmZpZzogYW55KSA9PiBhbnk7XG59XG5cbmNvbnN0IHJlcXVlc3RRdWV1ZTogeyBba2V5OiBzdHJpbmddOiB7IHJlc29sdmU6IEZ1bmN0aW9uOyByZWplY3Q6IEZ1bmN0aW9uIH1bXSB9ID0ge307XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVEaXNjb3ZlcmVkRW5kcG9pbnRJbkNhY2hlID0gYXN5bmMgKFxuICBjb25maWc6IEVuZHBvaW50RGlzY292ZXJ5UmVzb2x2ZWRDb25maWcgJiBQcmV2aW91c2x5UmVzb2x2ZWQsXG4gIG9wdGlvbnM6IFVwZGF0ZURpc2NvdmVyZWRFbmRwb2ludEluQ2FjaGVPcHRpb25zXG4pID0+XG4gIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBjb25zdCB7IGVuZHBvaW50Q2FjaGUgfSA9IGNvbmZpZztcbiAgICBjb25zdCB7IGNhY2hlS2V5LCBjb21tYW5kTmFtZSwgaWRlbnRpZmllcnMgfSA9IG9wdGlvbnM7XG5cbiAgICBjb25zdCBlbmRwb2ludHMgPSBlbmRwb2ludENhY2hlLmdldChjYWNoZUtleSk7XG5cbiAgICBpZiAoZW5kcG9pbnRzICYmIGVuZHBvaW50cy5sZW5ndGggPT09IDEgJiYgZW5kcG9pbnRzWzBdLkFkZHJlc3MgPT09IFwiXCIpIHtcbiAgICAgIC8vIEVuZHBvaW50IG9wZXJhdGlvbiBhbHJlYWR5IGluLWZsaWdodC5cbiAgICAgIC8vIEFkZCByZXF1ZXN0IHRvIHJlcXVlc3QgcXVldWUgb25seSBpZiBkaXNjb3ZlcmVkIGVuZHBvaW50IGlzIHJlcXVpcmVkLlxuICAgICAgaWYgKG9wdGlvbnMuaXNEaXNjb3ZlcmVkRW5kcG9pbnRSZXF1aXJlZCkge1xuICAgICAgICBpZiAoIXJlcXVlc3RRdWV1ZVtjYWNoZUtleV0pIHJlcXVlc3RRdWV1ZVtjYWNoZUtleV0gPSBbXTtcbiAgICAgICAgcmVxdWVzdFF1ZXVlW2NhY2hlS2V5XS5wdXNoKHsgcmVzb2x2ZSwgcmVqZWN0IH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZW5kcG9pbnRzICYmIGVuZHBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBFbmRwb2ludCByZWNvcmQgaXMgcHJlc2VudCBpbiBjYWNoZS5cbiAgICAgIHJlc29sdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gcHV0IGluIGEgcGxhY2Vob2xkZXIgZm9yIGVuZHBvaW50cyBhbHJlYWR5IHJlcXVlc3RlZCwgcHJldmVudFxuICAgICAgLy8gdG9vIG11Y2ggaW4tZmxpZ2h0IGNhbGxzLlxuICAgICAgY29uc3QgcGxhY2Vob2xkZXJFbmRwb2ludHMgPSBbeyBBZGRyZXNzOiBcIlwiLCBDYWNoZVBlcmlvZEluTWludXRlczogMSB9XTtcbiAgICAgIGVuZHBvaW50Q2FjaGUuc2V0KGNhY2hlS2V5LCBwbGFjZWhvbGRlckVuZHBvaW50cyk7XG5cbiAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgb3B0aW9ucy5lbmRwb2ludERpc2NvdmVyeUNvbW1hbmRDdG9yKHtcbiAgICAgICAgT3BlcmF0aW9uOiBjb21tYW5kTmFtZS5zdWJzdHIoMCwgY29tbWFuZE5hbWUubGVuZ3RoIC0gNyksIC8vIHN0cmlwIFwiQ29tbWFuZFwiXG4gICAgICAgIElkZW50aWZpZXJzOiBpZGVudGlmaWVycyxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgaGFuZGxlciA9IGNvbW1hbmQucmVzb2x2ZU1pZGRsZXdhcmUob3B0aW9ucy5jbGllbnRTdGFjaywgY29uZmlnLCBvcHRpb25zLm9wdGlvbnMpO1xuICAgICAgaGFuZGxlcihjb21tYW5kKVxuICAgICAgICAudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBlbmRwb2ludENhY2hlLnNldChjYWNoZUtleSwgcmVzdWx0Lm91dHB1dC5FbmRwb2ludHMpO1xuICAgICAgICAgIGlmIChyZXF1ZXN0UXVldWVbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXF1ZXN0UXVldWVbY2FjaGVLZXldLmZvckVhY2goKHsgcmVzb2x2ZSB9KSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHJlcXVlc3RRdWV1ZVtjYWNoZUtleV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVycm9yLm5hbWUgPT09IFwiSW52YWxpZEVuZHBvaW50RXhjZXB0aW9uXCIgfHwgZXJyb3IuJG1ldGFkYXRhPy5odHRwU3RhdHVzQ29kZSA9PT0gNDIxKSB7XG4gICAgICAgICAgICAvLyBFbmRwb2ludCBpcyBpbnZhbGlkLCBkZWxldGUgdGhlIGNhY2hlIGVudHJ5LlxuICAgICAgICAgICAgZW5kcG9pbnRDYWNoZS5kZWxldGUoY2FjaGVLZXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVycm9yVG9UaHJvdyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgb3BlcmF0aW9uIHRvIGRpc2NvdmVyIGVuZHBvaW50IGZhaWxlZC5gICtcbiAgICAgICAgICAgICAgICBgIFBsZWFzZSByZXRyeSwgb3IgcHJvdmlkZSBhIGN1c3RvbSBlbmRwb2ludCBhbmQgZGlzYWJsZSBlbmRwb2ludCBkaXNjb3ZlcnkgdG8gcHJvY2VlZC5gXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgeyByZWFzb246IGVycm9yIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgLy9mYWlsIGFsbCB0aGUgcGVuZGluZyByZXF1ZXN0cyBpbiBiYXRjaFxuICAgICAgICAgIGlmIChyZXF1ZXN0UXVldWVbY2FjaGVLZXldKSB7XG4gICAgICAgICAgICByZXF1ZXN0UXVldWVbY2FjaGVLZXldLmZvckVhY2goKHsgcmVqZWN0IH0pID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yVG9UaHJvdyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0UXVldWVbY2FjaGVLZXldO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmlzRGlzY292ZXJlZEVuZHBvaW50UmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvclRvVGhyb3cpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBFbmRwb2ludCBEaXNjb3ZlcnkgaXMgb3B0aW9uYWwuIE5vIGVycm9yIG5lZWRzIHRvIGJlIHRocm93bi5cbiAgICAgICAgICAgIC8vIFNldCBwbGFjZUhvbGRlciBlbmRwb2ludCB0byBkaXNhYmxlIHJlZnJlc2ggZm9yIG9uZSBtaW51dGUuXG4gICAgICAgICAgICBlbmRwb2ludENhY2hlLnNldChjYWNoZUtleSwgcGxhY2Vob2xkZXJFbmRwb2ludHMpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiJdfQ==