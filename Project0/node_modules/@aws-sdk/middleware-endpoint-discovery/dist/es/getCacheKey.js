import { __assign, __awaiter, __generator, __read } from "tslib";
/**
 * Generate key to index the endpoints in the cache
 */
export var getCacheKey = function (commandName, config, options) { return __awaiter(void 0, void 0, void 0, function () {
    var accessKeyId, identifiers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, config.credentials()];
            case 1:
                accessKeyId = (_a.sent()).accessKeyId;
                identifiers = options.identifiers;
                return [2 /*return*/, JSON.stringify(__assign(__assign({}, (accessKeyId && { accessKeyId: accessKeyId })), (identifiers && {
                        commandName: commandName,
                        identifiers: Object.entries(identifiers)
                            .sort()
                            .reduce(function (acc, _a) {
                            var _b;
                            var _c = __read(_a, 2), key = _c[0], value = _c[1];
                            return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
                        }, {}),
                    })))];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Q2FjaGVLZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2V0Q2FjaGVLZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBOztHQUVHO0FBQ0gsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLFVBQ3pCLFdBQW1CLEVBQ25CLE1BQThDLEVBQzlDLE9BRUM7Ozs7b0JBRXVCLHFCQUFNLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBQTs7Z0JBQTFDLFdBQVcsR0FBSyxDQUFBLFNBQTBCLENBQUEsWUFBL0I7Z0JBQ1gsV0FBVyxHQUFLLE9BQU8sWUFBWixDQUFhO2dCQUNoQyxzQkFBTyxJQUFJLENBQUMsU0FBUyx1QkFDaEIsQ0FBQyxXQUFXLElBQUksRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLEdBQ2hDLENBQUMsV0FBVyxJQUFJO3dCQUNqQixXQUFXLGFBQUE7d0JBQ1gsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDOzZCQUNyQyxJQUFJLEVBQUU7NkJBQ04sTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEVBQVk7O2dDQUFaLEtBQUEsYUFBWSxFQUFYLEdBQUcsUUFBQSxFQUFFLEtBQUssUUFBQTs0QkFBTSxPQUFBLHVCQUFNLEdBQUcsZ0JBQUcsR0FBRyxJQUFHLEtBQUssT0FBRzt3QkFBMUIsQ0FBMEIsRUFBRSxFQUFFLENBQUM7cUJBQ2pFLENBQUMsRUFDRixFQUFDOzs7S0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ3JlZGVudGlhbHMsIFByb3ZpZGVyIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5cbi8qKlxuICogR2VuZXJhdGUga2V5IHRvIGluZGV4IHRoZSBlbmRwb2ludHMgaW4gdGhlIGNhY2hlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDYWNoZUtleSA9IGFzeW5jIChcbiAgY29tbWFuZE5hbWU6IHN0cmluZyxcbiAgY29uZmlnOiB7IGNyZWRlbnRpYWxzOiBQcm92aWRlcjxDcmVkZW50aWFscz4gfSxcbiAgb3B0aW9uczoge1xuICAgIGlkZW50aWZpZXJzPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXNzS2V5SWQgfSA9IGF3YWl0IGNvbmZpZy5jcmVkZW50aWFscygpO1xuICBjb25zdCB7IGlkZW50aWZpZXJzIH0gPSBvcHRpb25zO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoe1xuICAgIC4uLihhY2Nlc3NLZXlJZCAmJiB7IGFjY2Vzc0tleUlkIH0pLFxuICAgIC4uLihpZGVudGlmaWVycyAmJiB7XG4gICAgICBjb21tYW5kTmFtZSxcbiAgICAgIGlkZW50aWZpZXJzOiBPYmplY3QuZW50cmllcyhpZGVudGlmaWVycylcbiAgICAgICAgLnNvcnQoKVxuICAgICAgICAucmVkdWNlKChhY2MsIFtrZXksIHZhbHVlXSkgPT4gKHsgLi4uYWNjLCBba2V5XTogdmFsdWUgfSksIHt9KSxcbiAgICB9KSxcbiAgfSk7XG59O1xuIl19