import { __awaiter, __generator } from "tslib";
import { ProviderError } from "@aws-sdk/property-provider";
/**
 * Get config value given the environment variable name or getter from
 * environment variable.
 */
export var fromEnv = function (envVarSelector) {
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var config;
        return __generator(this, function (_a) {
            try {
                config = envVarSelector(process.env);
                if (config === undefined) {
                    throw new Error();
                }
                return [2 /*return*/, config];
            }
            catch (e) {
                throw new ProviderError(e.message || "Cannot load config from environment variables with getter: " + envVarSelector);
            }
            return [2 /*return*/];
        });
    }); };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUVudi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tRW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLM0Q7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLElBQU0sT0FBTyxHQUNsQixVQUFhLGNBQWdDO0lBQzdDLE9BQUE7OztZQUNFLElBQUk7Z0JBQ0ksTUFBTSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtvQkFDeEIsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO2lCQUNuQjtnQkFDRCxzQkFBTyxNQUFXLEVBQUM7YUFDcEI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDVixNQUFNLElBQUksYUFBYSxDQUNyQixDQUFDLENBQUMsT0FBTyxJQUFJLGdFQUE4RCxjQUFnQixDQUM1RixDQUFDO2FBQ0g7OztTQUNGO0FBWkQsQ0FZQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgR2V0dGVyRnJvbUVudjxUPiA9IChlbnY6IE5vZGVKUy5Qcm9jZXNzRW52KSA9PiBUIHwgdW5kZWZpbmVkO1xuXG4vKipcbiAqIEdldCBjb25maWcgdmFsdWUgZ2l2ZW4gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWUgb3IgZ2V0dGVyIGZyb21cbiAqIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICovXG5leHBvcnQgY29uc3QgZnJvbUVudiA9XG4gIDxUID0gc3RyaW5nPihlbnZWYXJTZWxlY3RvcjogR2V0dGVyRnJvbUVudjxUPik6IFByb3ZpZGVyPFQ+ID0+XG4gIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnID0gZW52VmFyU2VsZWN0b3IocHJvY2Vzcy5lbnYpO1xuICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZyBhcyBUO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgICBlLm1lc3NhZ2UgfHwgYENhbm5vdCBsb2FkIGNvbmZpZyBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlcyB3aXRoIGdldHRlcjogJHtlbnZWYXJTZWxlY3Rvcn1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiJdfQ==