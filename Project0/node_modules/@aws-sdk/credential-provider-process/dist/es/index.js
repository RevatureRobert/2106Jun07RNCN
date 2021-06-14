import { __awaiter, __generator } from "tslib";
import { getMasterProfileName, parseKnownFiles } from "@aws-sdk/credential-provider-ini";
import { ProviderError } from "@aws-sdk/property-provider";
import { exec } from "child_process";
/**
 * @internal
 */
export var ENV_PROFILE = "AWS_PROFILE";
/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export var fromProcess = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var profiles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseKnownFiles(init)];
                case 1:
                    profiles = _a.sent();
                    return [2 /*return*/, resolveProcessCredentials(getMasterProfileName(init), profiles)];
            }
        });
    }); };
};
var resolveProcessCredentials = function (profileName, profiles) { return __awaiter(void 0, void 0, void 0, function () {
    var profile, credentialProcess;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                profile = profiles[profileName];
                if (!profiles[profileName]) return [3 /*break*/, 4];
                credentialProcess = profile["credential_process"];
                if (!(credentialProcess !== undefined)) return [3 /*break*/, 2];
                return [4 /*yield*/, execPromise(credentialProcess)
                        .then(function (processResult) {
                        var data;
                        try {
                            data = JSON.parse(processResult);
                        }
                        catch (_a) {
                            throw Error("Profile " + profileName + " credential_process returned invalid JSON.");
                        }
                        var version = data.Version, accessKeyId = data.AccessKeyId, secretAccessKey = data.SecretAccessKey, sessionToken = data.SessionToken, expiration = data.Expiration;
                        if (version !== 1) {
                            throw Error("Profile " + profileName + " credential_process did not return Version 1.");
                        }
                        if (accessKeyId === undefined || secretAccessKey === undefined) {
                            throw Error("Profile " + profileName + " credential_process returned invalid credentials.");
                        }
                        var expirationUnix;
                        if (expiration) {
                            var currentTime = new Date();
                            var expireTime = new Date(expiration);
                            if (expireTime < currentTime) {
                                throw Error("Profile " + profileName + " credential_process returned expired credentials.");
                            }
                            expirationUnix = Math.floor(new Date(expiration).valueOf() / 1000);
                        }
                        return {
                            accessKeyId: accessKeyId,
                            secretAccessKey: secretAccessKey,
                            sessionToken: sessionToken,
                            expirationUnix: expirationUnix,
                        };
                    })
                        .catch(function (error) {
                        throw new ProviderError(error.message);
                    })];
            case 1: return [2 /*return*/, _a.sent()];
            case 2: throw new ProviderError("Profile " + profileName + " did not contain credential_process.");
            case 3: return [3 /*break*/, 5];
            case 4: 
            // If the profile cannot be parsed or does not contain the default or
            // specified profile throw an error. This should be considered a terminal
            // resolution error if a profile has been specified by the user (whether via
            // a parameter, anenvironment variable, or another profile's `source_profile` key).
            throw new ProviderError("Profile " + profileName + " could not be found in shared credentials file.");
            case 5: return [2 /*return*/];
        }
    });
}); };
var execPromise = function (command) {
    return new Promise(function (resolve, reject) {
        exec(command, function (error, stdout) {
            if (error) {
                reject(error);
                return;
            }
            resolve(stdout.trim());
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxlQUFlLEVBQXFCLE1BQU0sa0NBQWtDLENBQUM7QUFDNUcsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRzNELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFckM7O0dBRUc7QUFDSCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsYUFBYSxDQUFDO0FBSXpDOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxJQUFNLFdBQVcsR0FDdEIsVUFBQyxJQUEwQjtJQUExQixxQkFBQSxFQUFBLFNBQTBCO0lBQzNCLE9BQUE7Ozs7d0JBQ21CLHFCQUFNLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQXRDLFFBQVEsR0FBRyxTQUEyQjtvQkFDNUMsc0JBQU8seUJBQXlCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLEVBQUM7OztTQUN4RTtBQUhELENBR0MsQ0FBQztBQUVKLElBQU0seUJBQXlCLEdBQUcsVUFBTyxXQUFtQixFQUFFLFFBQXVCOzs7OztnQkFDN0UsT0FBTyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztxQkFFbEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFyQix3QkFBcUI7Z0JBQ2pCLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3FCQUNwRCxDQUFBLGlCQUFpQixLQUFLLFNBQVMsQ0FBQSxFQUEvQix3QkFBK0I7Z0JBQzFCLHFCQUFNLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzt5QkFDeEMsSUFBSSxDQUFDLFVBQUMsYUFBa0I7d0JBQ3ZCLElBQUksSUFBSSxDQUFDO3dCQUNULElBQUk7NEJBQ0YsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7eUJBQ2xDO3dCQUFDLFdBQU07NEJBQ04sTUFBTSxLQUFLLENBQUMsYUFBVyxXQUFXLCtDQUE0QyxDQUFDLENBQUM7eUJBQ2pGO3dCQUdDLElBQVMsT0FBTyxHQUtkLElBQUksUUFMVSxFQUNILFdBQVcsR0FJdEIsSUFBSSxZQUprQixFQUNQLGVBQWUsR0FHOUIsSUFBSSxnQkFIMEIsRUFDbEIsWUFBWSxHQUV4QixJQUFJLGFBRm9CLEVBQ2QsVUFBVSxHQUNwQixJQUFJLFdBRGdCLENBQ2Y7d0JBRVQsSUFBSSxPQUFPLEtBQUssQ0FBQyxFQUFFOzRCQUNqQixNQUFNLEtBQUssQ0FBQyxhQUFXLFdBQVcsa0RBQStDLENBQUMsQ0FBQzt5QkFDcEY7d0JBRUQsSUFBSSxXQUFXLEtBQUssU0FBUyxJQUFJLGVBQWUsS0FBSyxTQUFTLEVBQUU7NEJBQzlELE1BQU0sS0FBSyxDQUFDLGFBQVcsV0FBVyxzREFBbUQsQ0FBQyxDQUFDO3lCQUN4Rjt3QkFFRCxJQUFJLGNBQWMsQ0FBQzt3QkFFbkIsSUFBSSxVQUFVLEVBQUU7NEJBQ2QsSUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQzs0QkFDL0IsSUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7NEJBQ3hDLElBQUksVUFBVSxHQUFHLFdBQVcsRUFBRTtnQ0FDNUIsTUFBTSxLQUFLLENBQUMsYUFBVyxXQUFXLHNEQUFtRCxDQUFDLENBQUM7NkJBQ3hGOzRCQUNELGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO3lCQUNwRTt3QkFFRCxPQUFPOzRCQUNMLFdBQVcsYUFBQTs0QkFDWCxlQUFlLGlCQUFBOzRCQUNmLFlBQVksY0FBQTs0QkFDWixjQUFjLGdCQUFBO3lCQUNmLENBQUM7b0JBQ0osQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFDLEtBQVk7d0JBQ2xCLE1BQU0sSUFBSSxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUN6QyxDQUFDLENBQUMsRUFBQTtvQkE3Q0osc0JBQU8sU0E2Q0gsRUFBQztvQkFFTCxNQUFNLElBQUksYUFBYSxDQUFDLGFBQVcsV0FBVyx5Q0FBc0MsQ0FBQyxDQUFDOzs7WUFHeEYscUVBQXFFO1lBQ3JFLHlFQUF5RTtZQUN6RSw0RUFBNEU7WUFDNUUsbUZBQW1GO1lBQ25GLE1BQU0sSUFBSSxhQUFhLENBQUMsYUFBVyxXQUFXLG9EQUFpRCxDQUFDLENBQUM7Ozs7S0FFcEcsQ0FBQztBQUVGLElBQU0sV0FBVyxHQUFHLFVBQUMsT0FBZTtJQUNsQyxPQUFBLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBRSxNQUFNO1lBQzFCLElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDZCxPQUFPO2FBQ1I7WUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFURixDQVNFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNYXN0ZXJQcm9maWxlTmFtZSwgcGFyc2VLbm93bkZpbGVzLCBTb3VyY2VQcm9maWxlSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaVwiO1xuaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgUGFyc2VkSW5pRGF0YSB9IGZyb20gXCJAYXdzLXNkay9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIsIENyZWRlbnRpYWxzIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBleGVjIH0gZnJvbSBcImNoaWxkX3Byb2Nlc3NcIjtcblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGNvbnN0IEVOVl9QUk9GSUxFID0gXCJBV1NfUFJPRklMRVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZyb21Qcm9jZXNzSW5pdCBleHRlbmRzIFNvdXJjZVByb2ZpbGVJbml0IHt9XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNyZWRlbnRpYWwgcHJvdmlkZXIgdGhhdCB3aWxsIHJlYWQgZnJvbSBhIGNyZWRlbnRpYWxfcHJvY2VzcyBzcGVjaWZpZWRcbiAqIGluIGluaSBmaWxlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZyb21Qcm9jZXNzID1cbiAgKGluaXQ6IEZyb21Qcm9jZXNzSW5pdCA9IHt9KTogQ3JlZGVudGlhbFByb3ZpZGVyID0+XG4gIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm9maWxlcyA9IGF3YWl0IHBhcnNlS25vd25GaWxlcyhpbml0KTtcbiAgICByZXR1cm4gcmVzb2x2ZVByb2Nlc3NDcmVkZW50aWFscyhnZXRNYXN0ZXJQcm9maWxlTmFtZShpbml0KSwgcHJvZmlsZXMpO1xuICB9O1xuXG5jb25zdCByZXNvbHZlUHJvY2Vzc0NyZWRlbnRpYWxzID0gYXN5bmMgKHByb2ZpbGVOYW1lOiBzdHJpbmcsIHByb2ZpbGVzOiBQYXJzZWRJbmlEYXRhKTogUHJvbWlzZTxDcmVkZW50aWFscz4gPT4ge1xuICBjb25zdCBwcm9maWxlID0gcHJvZmlsZXNbcHJvZmlsZU5hbWVdO1xuXG4gIGlmIChwcm9maWxlc1twcm9maWxlTmFtZV0pIHtcbiAgICBjb25zdCBjcmVkZW50aWFsUHJvY2VzcyA9IHByb2ZpbGVbXCJjcmVkZW50aWFsX3Byb2Nlc3NcIl07XG4gICAgaWYgKGNyZWRlbnRpYWxQcm9jZXNzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhd2FpdCBleGVjUHJvbWlzZShjcmVkZW50aWFsUHJvY2VzcylcbiAgICAgICAgLnRoZW4oKHByb2Nlc3NSZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIGxldCBkYXRhO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShwcm9jZXNzUmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGNyZWRlbnRpYWxfcHJvY2VzcyByZXR1cm5lZCBpbnZhbGlkIEpTT04uYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgVmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgICAgIEFjY2Vzc0tleUlkOiBhY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgIFNlY3JldEFjY2Vzc0tleTogc2VjcmV0QWNjZXNzS2V5LFxuICAgICAgICAgICAgU2Vzc2lvblRva2VuOiBzZXNzaW9uVG9rZW4sXG4gICAgICAgICAgICBFeHBpcmF0aW9uOiBleHBpcmF0aW9uLFxuICAgICAgICAgIH0gPSBkYXRhO1xuXG4gICAgICAgICAgaWYgKHZlcnNpb24gIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGNyZWRlbnRpYWxfcHJvY2VzcyBkaWQgbm90IHJldHVybiBWZXJzaW9uIDEuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGFjY2Vzc0tleUlkID09PSB1bmRlZmluZWQgfHwgc2VjcmV0QWNjZXNzS2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGNyZWRlbnRpYWxfcHJvY2VzcyByZXR1cm5lZCBpbnZhbGlkIGNyZWRlbnRpYWxzLmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBleHBpcmF0aW9uVW5peDtcblxuICAgICAgICAgIGlmIChleHBpcmF0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBleHBpcmVUaW1lID0gbmV3IERhdGUoZXhwaXJhdGlvbik7XG4gICAgICAgICAgICBpZiAoZXhwaXJlVGltZSA8IGN1cnJlbnRUaW1lKSB7XG4gICAgICAgICAgICAgIHRocm93IEVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGNyZWRlbnRpYWxfcHJvY2VzcyByZXR1cm5lZCBleHBpcmVkIGNyZWRlbnRpYWxzLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhwaXJhdGlvblVuaXggPSBNYXRoLmZsb29yKG5ldyBEYXRlKGV4cGlyYXRpb24pLnZhbHVlT2YoKSAvIDEwMDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY2Nlc3NLZXlJZCxcbiAgICAgICAgICAgIHNlY3JldEFjY2Vzc0tleSxcbiAgICAgICAgICAgIHNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIGV4cGlyYXRpb25Vbml4LFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IEVycm9yKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSBkaWQgbm90IGNvbnRhaW4gY3JlZGVudGlhbF9wcm9jZXNzLmApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJZiB0aGUgcHJvZmlsZSBjYW5ub3QgYmUgcGFyc2VkIG9yIGRvZXMgbm90IGNvbnRhaW4gdGhlIGRlZmF1bHQgb3JcbiAgICAvLyBzcGVjaWZpZWQgcHJvZmlsZSB0aHJvdyBhbiBlcnJvci4gVGhpcyBzaG91bGQgYmUgY29uc2lkZXJlZCBhIHRlcm1pbmFsXG4gICAgLy8gcmVzb2x1dGlvbiBlcnJvciBpZiBhIHByb2ZpbGUgaGFzIGJlZW4gc3BlY2lmaWVkIGJ5IHRoZSB1c2VyICh3aGV0aGVyIHZpYVxuICAgIC8vIGEgcGFyYW1ldGVyLCBhbmVudmlyb25tZW50IHZhcmlhYmxlLCBvciBhbm90aGVyIHByb2ZpbGUncyBgc291cmNlX3Byb2ZpbGVgIGtleSkuXG4gICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY291bGQgbm90IGJlIGZvdW5kIGluIHNoYXJlZCBjcmVkZW50aWFscyBmaWxlLmApO1xuICB9XG59O1xuXG5jb25zdCBleGVjUHJvbWlzZSA9IChjb21tYW5kOiBzdHJpbmcpID0+XG4gIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBleGVjKGNvbW1hbmQsIChlcnJvciwgc3Rkb3V0KSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZXNvbHZlKHN0ZG91dC50cmltKCkpO1xuICAgIH0pO1xuICB9KTtcbiJdfQ==