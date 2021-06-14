"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromEnv = void 0;
const property_provider_1 = require("@aws-sdk/property-provider");
/**
 * Get config value given the environment variable name or getter from
 * environment variable.
 */
const fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new property_provider_1.ProviderError(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};
exports.fromEnv = fromEnv;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbUVudi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mcm9tRW52LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUEyRDtBQUszRDs7O0dBR0c7QUFDSSxNQUFNLE9BQU8sR0FDbEIsQ0FBYSxjQUFnQyxFQUFlLEVBQUUsQ0FDOUQsS0FBSyxJQUFJLEVBQUU7SUFDVCxJQUFJO1FBQ0YsTUFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxNQUFXLENBQUM7S0FDcEI7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNWLE1BQU0sSUFBSSxpQ0FBYSxDQUNyQixDQUFDLENBQUMsT0FBTyxJQUFJLDhEQUE4RCxjQUFjLEVBQUUsQ0FDNUYsQ0FBQztLQUNIO0FBQ0gsQ0FBQyxDQUFDO0FBZFMsUUFBQSxPQUFPLFdBY2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IHR5cGUgR2V0dGVyRnJvbUVudjxUPiA9IChlbnY6IE5vZGVKUy5Qcm9jZXNzRW52KSA9PiBUIHwgdW5kZWZpbmVkO1xuXG4vKipcbiAqIEdldCBjb25maWcgdmFsdWUgZ2l2ZW4gdGhlIGVudmlyb25tZW50IHZhcmlhYmxlIG5hbWUgb3IgZ2V0dGVyIGZyb21cbiAqIGVudmlyb25tZW50IHZhcmlhYmxlLlxuICovXG5leHBvcnQgY29uc3QgZnJvbUVudiA9XG4gIDxUID0gc3RyaW5nPihlbnZWYXJTZWxlY3RvcjogR2V0dGVyRnJvbUVudjxUPik6IFByb3ZpZGVyPFQ+ID0+XG4gIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY29uZmlnID0gZW52VmFyU2VsZWN0b3IocHJvY2Vzcy5lbnYpO1xuICAgICAgaWYgKGNvbmZpZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbmZpZyBhcyBUO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgICBlLm1lc3NhZ2UgfHwgYENhbm5vdCBsb2FkIGNvbmZpZyBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlcyB3aXRoIGdldHRlcjogJHtlbnZWYXJTZWxlY3Rvcn1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiJdfQ==