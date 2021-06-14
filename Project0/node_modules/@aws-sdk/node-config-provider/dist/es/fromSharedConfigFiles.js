import { __assign, __awaiter, __generator, __rest } from "tslib";
import { ProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles, } from "@aws-sdk/shared-ini-file-loader";
var DEFAULT_PROFILE = "default";
export var ENV_PROFILE = "AWS_PROFILE";
/**
 * Get config value from the shared config files with inferred profile name.
 */
export var fromSharedConfigFiles = function (configSelector, _a) {
    if (_a === void 0) { _a = {}; }
    var _b = _a.preferredFile, preferredFile = _b === void 0 ? "config" : _b, init = __rest(_a, ["preferredFile"]);
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, loadedConfig, _b, profile, _c, configFile, credentialsFile, profileFromCredentials, profileFromConfig, mergedProfile, configValue;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _a = init.loadedConfig, loadedConfig = _a === void 0 ? loadSharedConfigFiles(init) : _a, _b = init.profile, profile = _b === void 0 ? process.env[ENV_PROFILE] || DEFAULT_PROFILE : _b;
                    return [4 /*yield*/, loadedConfig];
                case 1:
                    _c = _d.sent(), configFile = _c.configFile, credentialsFile = _c.credentialsFile;
                    profileFromCredentials = credentialsFile[profile] || {};
                    profileFromConfig = configFile[profile] || {};
                    mergedProfile = preferredFile === "config"
                        ? __assign(__assign({}, profileFromCredentials), profileFromConfig) : __assign(__assign({}, profileFromConfig), profileFromCredentials);
                    try {
                        configValue = configSelector(mergedProfile);
                        if (configValue === undefined) {
                            throw new Error();
                        }
                        return [2 /*return*/, configValue];
                    }
                    catch (e) {
                        throw new ProviderError(e.message ||
                            "Cannot load config for profile " + profile + " in SDK configuration files with getter: " + configSelector);
                    }
                    return [2 /*return*/];
            }
        });
    }); };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbVNoYXJlZENvbmZpZ0ZpbGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Zyb21TaGFyZWRDb25maWdGaWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFDTCxxQkFBcUIsR0FJdEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUd6QyxJQUFNLGVBQWUsR0FBRyxTQUFTLENBQUM7QUFDbEMsTUFBTSxDQUFDLElBQU0sV0FBVyxHQUFHLGFBQWEsQ0FBQztBQTBCekM7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FDaEMsVUFDRSxjQUFtQyxFQUNuQyxFQUE0RDtJQUE1RCxtQkFBQSxFQUFBLE9BQTREO0lBQTFELElBQUEscUJBQXdCLEVBQXhCLGFBQWEsbUJBQUcsUUFBUSxLQUFBLEVBQUssSUFBSSxjQUFuQyxpQkFBcUMsQ0FBRjtJQUVyQyxPQUFBOzs7OztvQkFDVSxLQUFzRyxJQUFJLGFBQWhFLEVBQTFDLFlBQVksbUJBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUEsRUFBRSxLQUEwRCxJQUFJLFFBQVQsRUFBckQsT0FBTyxtQkFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsS0FBQSxDQUFVO29CQUUzRSxxQkFBTSxZQUFZLEVBQUE7O29CQUFwRCxLQUFrQyxTQUFrQixFQUFsRCxVQUFVLGdCQUFBLEVBQUUsZUFBZSxxQkFBQTtvQkFFN0Isc0JBQXNCLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDeEQsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDOUMsYUFBYSxHQUNqQixhQUFhLEtBQUssUUFBUTt3QkFDeEIsQ0FBQyx1QkFBTSxzQkFBc0IsR0FBSyxpQkFBaUIsRUFDbkQsQ0FBQyx1QkFBTSxpQkFBaUIsR0FBSyxzQkFBc0IsQ0FBRSxDQUFDO29CQUUxRCxJQUFJO3dCQUNJLFdBQVcsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7d0JBQ2xELElBQUksV0FBVyxLQUFLLFNBQVMsRUFBRTs0QkFDN0IsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO3lCQUNuQjt3QkFDRCxzQkFBTyxXQUFXLEVBQUM7cUJBQ3BCO29CQUFDLE9BQU8sQ0FBQyxFQUFFO3dCQUNWLE1BQU0sSUFBSSxhQUFhLENBQ3JCLENBQUMsQ0FBQyxPQUFPOzRCQUNQLG9DQUFrQyxPQUFPLGlEQUE0QyxjQUFnQixDQUN4RyxDQUFDO3FCQUNIOzs7O1NBQ0YsQ0FBQTtDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQge1xuICBsb2FkU2hhcmVkQ29uZmlnRmlsZXMsXG4gIFByb2ZpbGUsXG4gIFNoYXJlZENvbmZpZ0ZpbGVzLFxuICBTaGFyZWRDb25maWdJbml0IGFzIEJhc2VTaGFyZWRDb25maWdJbml0LFxufSBmcm9tIFwiQGF3cy1zZGsvc2hhcmVkLWluaS1maWxlLWxvYWRlclwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuY29uc3QgREVGQVVMVF9QUk9GSUxFID0gXCJkZWZhdWx0XCI7XG5leHBvcnQgY29uc3QgRU5WX1BST0ZJTEUgPSBcIkFXU19QUk9GSUxFXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2hhcmVkQ29uZmlnSW5pdCBleHRlbmRzIEJhc2VTaGFyZWRDb25maWdJbml0IHtcbiAgLyoqXG4gICAqIFRoZSBjb25maWd1cmF0aW9uIHByb2ZpbGUgdG8gdXNlLlxuICAgKi9cbiAgcHJvZmlsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHByZWZlcnJlZCBzaGFyZWQgaW5pIGZpbGUgdG8gbG9hZCB0aGUgY29uZmlnLiBcImNvbmZpZ1wiIG9wdGlvbiByZWZlcnMgdG9cbiAgICogdGhlIHNoYXJlZCBjb25maWcgZmlsZShkZWZhdWx0cyB0byBgfi8uYXdzL2NvbmZpZ2ApLiBcImNyZWRlbnRpYWxzXCIgb3B0aW9uXG4gICAqIHJlZmVycyB0byB0aGUgc2hhcmVkIGNyZWRlbnRpYWxzIGZpbGUoZGVmYXVsdHMgdG8gYH4vLmF3cy9jcmVkZW50aWFsc2ApXG4gICAqL1xuICBwcmVmZXJyZWRGaWxlPzogXCJjb25maWdcIiB8IFwiY3JlZGVudGlhbHNcIjtcblxuICAvKipcbiAgICogQSBwcm9taXNlIHRoYXQgd2lsbCBiZSByZXNvbHZlZCB3aXRoIGxvYWRlZCBhbmQgcGFyc2VkIGNyZWRlbnRpYWxzIGZpbGVzLlxuICAgKiBVc2VkIHRvIGF2b2lkIGxvYWRpbmcgc2hhcmVkIGNvbmZpZyBmaWxlcyBtdWx0aXBsZSB0aW1lcy5cbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuICBsb2FkZWRDb25maWc/OiBQcm9taXNlPFNoYXJlZENvbmZpZ0ZpbGVzPjtcbn1cblxuZXhwb3J0IHR5cGUgR2V0dGVyRnJvbUNvbmZpZzxUPiA9IChwcm9maWxlOiBQcm9maWxlKSA9PiBUIHwgdW5kZWZpbmVkO1xuXG4vKipcbiAqIEdldCBjb25maWcgdmFsdWUgZnJvbSB0aGUgc2hhcmVkIGNvbmZpZyBmaWxlcyB3aXRoIGluZmVycmVkIHByb2ZpbGUgbmFtZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21TaGFyZWRDb25maWdGaWxlcyA9XG4gIDxUID0gc3RyaW5nPihcbiAgICBjb25maWdTZWxlY3RvcjogR2V0dGVyRnJvbUNvbmZpZzxUPixcbiAgICB7IHByZWZlcnJlZEZpbGUgPSBcImNvbmZpZ1wiLCAuLi5pbml0IH06IFNoYXJlZENvbmZpZ0luaXQgPSB7fVxuICApOiBQcm92aWRlcjxUPiA9PlxuICBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2FkZWRDb25maWcgPSBsb2FkU2hhcmVkQ29uZmlnRmlsZXMoaW5pdCksIHByb2ZpbGUgPSBwcm9jZXNzLmVudltFTlZfUFJPRklMRV0gfHwgREVGQVVMVF9QUk9GSUxFIH0gPSBpbml0O1xuXG4gICAgY29uc3QgeyBjb25maWdGaWxlLCBjcmVkZW50aWFsc0ZpbGUgfSA9IGF3YWl0IGxvYWRlZENvbmZpZztcblxuICAgIGNvbnN0IHByb2ZpbGVGcm9tQ3JlZGVudGlhbHMgPSBjcmVkZW50aWFsc0ZpbGVbcHJvZmlsZV0gfHwge307XG4gICAgY29uc3QgcHJvZmlsZUZyb21Db25maWcgPSBjb25maWdGaWxlW3Byb2ZpbGVdIHx8IHt9O1xuICAgIGNvbnN0IG1lcmdlZFByb2ZpbGUgPVxuICAgICAgcHJlZmVycmVkRmlsZSA9PT0gXCJjb25maWdcIlxuICAgICAgICA/IHsgLi4ucHJvZmlsZUZyb21DcmVkZW50aWFscywgLi4ucHJvZmlsZUZyb21Db25maWcgfVxuICAgICAgICA6IHsgLi4ucHJvZmlsZUZyb21Db25maWcsIC4uLnByb2ZpbGVGcm9tQ3JlZGVudGlhbHMgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbmZpZ1NlbGVjdG9yKG1lcmdlZFByb2ZpbGUpO1xuICAgICAgaWYgKGNvbmZpZ1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29uZmlnVmFsdWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoXG4gICAgICAgIGUubWVzc2FnZSB8fFxuICAgICAgICAgIGBDYW5ub3QgbG9hZCBjb25maWcgZm9yIHByb2ZpbGUgJHtwcm9maWxlfSBpbiBTREsgY29uZmlndXJhdGlvbiBmaWxlcyB3aXRoIGdldHRlcjogJHtjb25maWdTZWxlY3Rvcn1gXG4gICAgICApO1xuICAgIH1cbiAgfTtcbiJdfQ==