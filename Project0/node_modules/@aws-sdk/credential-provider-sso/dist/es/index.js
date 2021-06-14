import { __awaiter, __generator } from "tslib";
import { GetRoleCredentialsCommand, SSOClient } from "@aws-sdk/client-sso";
import { getMasterProfileName, parseKnownFiles } from "@aws-sdk/credential-provider-ini";
import { ProviderError } from "@aws-sdk/property-provider";
import { getHomeDir } from "@aws-sdk/shared-ini-file-loader";
import { createHash } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";
/**
 * The time window (15 mins) that SDK will treat the SSO token expires in before the defined expiration date in token.
 * This is needed because server side may have invalidated the token before the defined expiration date.
 *
 * @internal
 */
export var EXPIRE_WINDOW_MS = 15 * 60 * 1000;
var SHOULD_FAIL_CREDENTIAL_CHAIN = false;
/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
export var fromSSO = function (init) {
    if (init === void 0) { init = {}; }
    return function () { return __awaiter(void 0, void 0, void 0, function () {
        var profiles;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, parseKnownFiles(init)];
                case 1:
                    profiles = _a.sent();
                    return [2 /*return*/, resolveSSOCredentials(getMasterProfileName(init), profiles, init)];
            }
        });
    }); };
};
var resolveSSOCredentials = function (profileName, profiles, options) { return __awaiter(void 0, void 0, void 0, function () {
    var profile, startUrl, accountId, region, roleName, hasher, cacheName, tokenFile, token, accessToken, sso, ssoResp, e_1, _a, _b, accessKeyId, secretAccessKey, sessionToken, expiration;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                profile = profiles[profileName];
                if (!profile) {
                    throw new ProviderError("Profile " + profileName + " could not be found in shared credentials file.");
                }
                startUrl = profile.sso_start_url, accountId = profile.sso_account_id, region = profile.sso_region, roleName = profile.sso_role_name;
                if (!startUrl && !accountId && !region && !roleName) {
                    throw new ProviderError("Profile " + profileName + " is not configured with SSO credentials.");
                }
                if (!startUrl || !accountId || !region || !roleName) {
                    throw new ProviderError("Profile " + profileName + " does not have valid SSO credentials. Required parameters \"sso_account_id\", \"sso_region\", " +
                        "\"sso_role_name\", \"sso_start_url\". Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html", SHOULD_FAIL_CREDENTIAL_CHAIN);
                }
                hasher = createHash("sha1");
                cacheName = hasher.update(startUrl).digest("hex");
                tokenFile = join(getHomeDir(), ".aws", "sso", "cache", cacheName + ".json");
                try {
                    token = JSON.parse(readFileSync(tokenFile, { encoding: "utf-8" }));
                    if (new Date(token.expiresAt).getTime() - Date.now() <= EXPIRE_WINDOW_MS) {
                        throw new Error("SSO token is expired.");
                    }
                }
                catch (e) {
                    throw new ProviderError("The SSO session associated with this profile has expired or is otherwise invalid. To refresh this SSO session " +
                        "run aws sso login with the corresponding profile.", SHOULD_FAIL_CREDENTIAL_CHAIN);
                }
                accessToken = token.accessToken;
                sso = options.ssoClient || new SSOClient({ region: region });
                _c.label = 1;
            case 1:
                _c.trys.push([1, 3, , 4]);
                return [4 /*yield*/, sso.send(new GetRoleCredentialsCommand({
                        accountId: accountId,
                        roleName: roleName,
                        accessToken: accessToken,
                    }))];
            case 2:
                ssoResp = _c.sent();
                return [3 /*break*/, 4];
            case 3:
                e_1 = _c.sent();
                throw ProviderError.from(e_1, SHOULD_FAIL_CREDENTIAL_CHAIN);
            case 4:
                _a = ssoResp.roleCredentials, _b = _a === void 0 ? {} : _a, accessKeyId = _b.accessKeyId, secretAccessKey = _b.secretAccessKey, sessionToken = _b.sessionToken, expiration = _b.expiration;
                if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
                    throw new ProviderError("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
                }
                return [2 /*return*/, { accessKeyId: accessKeyId, secretAccessKey: secretAccessKey, sessionToken: sessionToken, expiration: new Date(expiration) }];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx5QkFBeUIsRUFBbUMsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLGVBQWUsRUFBcUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFVBQVUsRUFBaUIsTUFBTSxpQ0FBaUMsQ0FBQztBQUU1RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDbEMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1Qjs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBRS9DLElBQU0sNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0FBa0IzQzs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxPQUFPLEdBQ2xCLFVBQUMsSUFBc0I7SUFBdEIscUJBQUEsRUFBQSxTQUFzQjtJQUN2QixPQUFBOzs7O3dCQUNtQixxQkFBTSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF0QyxRQUFRLEdBQUcsU0FBMkI7b0JBQzVDLHNCQUFPLHFCQUFxQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBQzs7O1NBQzFFO0FBSEQsQ0FHQyxDQUFDO0FBRUosSUFBTSxxQkFBcUIsR0FBRyxVQUM1QixXQUFtQixFQUNuQixRQUF1QixFQUN2QixPQUFvQjs7Ozs7Z0JBRWQsT0FBTyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDdEMs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bGVDcmVkZW50aWFsc0NvbW1hbmQsIEdldFJvbGVDcmVkZW50aWFsc0NvbW1hbmRPdXRwdXQsIFNTT0NsaWVudCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtc3NvXCI7XG5pbXBvcnQgeyBnZXRNYXN0ZXJQcm9maWxlTmFtZSwgcGFyc2VLbm93bkZpbGVzLCBTb3VyY2VQcm9maWxlSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaVwiO1xuaW1wb3J0IHsgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgZ2V0SG9tZURpciwgUGFyc2VkSW5pRGF0YSB9IGZyb20gXCJAYXdzLXNkay9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIsIENyZWRlbnRpYWxzIH0gZnJvbSBcIkBhd3Mtc2RrL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVIYXNoIH0gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBqb2luIH0gZnJvbSBcInBhdGhcIjtcblxuLyoqXG4gKiBUaGUgdGltZSB3aW5kb3cgKDE1IG1pbnMpIHRoYXQgU0RLIHdpbGwgdHJlYXQgdGhlIFNTTyB0b2tlbiBleHBpcmVzIGluIGJlZm9yZSB0aGUgZGVmaW5lZCBleHBpcmF0aW9uIGRhdGUgaW4gdG9rZW4uXG4gKiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNlcnZlciBzaWRlIG1heSBoYXZlIGludmFsaWRhdGVkIHRoZSB0b2tlbiBiZWZvcmUgdGhlIGRlZmluZWQgZXhwaXJhdGlvbiBkYXRlLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgRVhQSVJFX1dJTkRPV19NUyA9IDE1ICogNjAgKiAxMDAwO1xuXG5jb25zdCBTSE9VTERfRkFJTF9DUkVERU5USUFMX0NIQUlOID0gZmFsc2U7XG5cbi8qKlxuICogQ2FjaGVkIFNTTyB0b2tlbiByZXRyaWV2ZWQgZnJvbSBTU08gbG9naW4gZmxvdy5cbiAqL1xuaW50ZXJmYWNlIFNTT1Rva2VuIHtcbiAgLy8gQSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIHNzby1vaWRjIHNlcnZpY2UuXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG4gIC8vIFJGQzMzMzkgZm9ybWF0IHRpbWVzdGFtcFxuICBleHBpcmVzQXQ6IHN0cmluZztcbiAgcmVnaW9uPzogc3RyaW5nO1xuICBzdGFydFVybD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGcm9tU1NPSW5pdCBleHRlbmRzIFNvdXJjZVByb2ZpbGVJbml0IHtcbiAgc3NvQ2xpZW50PzogU1NPQ2xpZW50O1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjcmVkZW50aWFsIHByb3ZpZGVyIHRoYXQgd2lsbCByZWFkIGZyb20gYSBjcmVkZW50aWFsX3Byb2Nlc3Mgc3BlY2lmaWVkXG4gKiBpbiBpbmkgZmlsZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tU1NPID1cbiAgKGluaXQ6IEZyb21TU09Jbml0ID0ge30pOiBDcmVkZW50aWFsUHJvdmlkZXIgPT5cbiAgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGVzID0gYXdhaXQgcGFyc2VLbm93bkZpbGVzKGluaXQpO1xuICAgIHJldHVybiByZXNvbHZlU1NPQ3JlZGVudGlhbHMoZ2V0TWFzdGVyUHJvZmlsZU5hbWUoaW5pdCksIHByb2ZpbGVzLCBpbml0KTtcbiAgfTtcblxuY29uc3QgcmVzb2x2ZVNTT0NyZWRlbnRpYWxzID0gYXN5bmMgKFxuICBwcm9maWxlTmFtZTogc3RyaW5nLFxuICBwcm9maWxlczogUGFyc2VkSW5pRGF0YSxcbiAgb3B0aW9uczogRnJvbVNTT0luaXRcbik6IFByb21pc2U8Q3JlZGVudGlhbHM+ID0+IHtcbiAgY29uc3QgcHJvZmlsZSA9IHByb2ZpbGVzW3Byb2ZpbGVOYW1lXTtcbiAgaWYgKCFwcm9maWxlKSB7XG4gICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY291bGQgbm90IGJlIGZvdW5kIGluIHNoYXJlZCBjcmVkZW50aWFscyBmaWxlLmApO1xuICB9XG4gIGNvbnN0IHsgc3NvX3N0YXJ0X3VybDogc3RhcnRVcmwsIHNzb19hY2NvdW50X2lkOiBhY2NvdW50SWQsIHNzb19yZWdpb246IHJlZ2lvbiwgc3NvX3JvbGVfbmFtZTogcm9sZU5hbWUgfSA9IHByb2ZpbGU7XG4gIGlmICghc3RhcnRVcmwgJiYgIWFjY291bnRJZCAmJiAhcmVnaW9uICYmICFyb2xlTmFtZSkge1xuICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGlzIG5vdCBjb25maWd1cmVkIHdpdGggU1NPIGNyZWRlbnRpYWxzLmApO1xuICB9XG4gIGlmICghc3RhcnRVcmwgfHwgIWFjY291bnRJZCB8fCAhcmVnaW9uIHx8ICFyb2xlTmFtZSkge1xuICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gZG9lcyBub3QgaGF2ZSB2YWxpZCBTU08gY3JlZGVudGlhbHMuIFJlcXVpcmVkIHBhcmFtZXRlcnMgXCJzc29fYWNjb3VudF9pZFwiLCBcInNzb19yZWdpb25cIiwgYCArXG4gICAgICAgIGBcInNzb19yb2xlX25hbWVcIiwgXCJzc29fc3RhcnRfdXJsXCIuIFJlZmVyZW5jZTogaHR0cHM6Ly9kb2NzLmF3cy5hbWF6b24uY29tL2NsaS9sYXRlc3QvdXNlcmd1aWRlL2NsaS1jb25maWd1cmUtc3NvLmh0bWxgLFxuICAgICAgU0hPVUxEX0ZBSUxfQ1JFREVOVElBTF9DSEFJTlxuICAgICk7XG4gIH1cbiAgY29uc3QgaGFzaGVyID0gY3JlYXRlSGFzaChcInNoYTFcIik7XG4gIGNvbnN0IGNhY2hlTmFtZSA9IGhhc2hlci51cGRhdGUoc3RhcnRVcmwpLmRpZ2VzdChcImhleFwiKTtcbiAgY29uc3QgdG9rZW5GaWxlID0gam9pbihnZXRIb21lRGlyKCksIFwiLmF3c1wiLCBcInNzb1wiLCBcImNhY2hlXCIsIGAke2NhY2hlTmFtZX0uanNvbmApO1xuICBsZXQgdG9rZW46IFNTT1Rva2VuO1xuICB0cnkge1xuICAgIHRva2VuID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmModG9rZW5GaWxlLCB7IGVuY29kaW5nOiBcInV0Zi04XCIgfSkpO1xuICAgIGlmIChuZXcgRGF0ZSh0b2tlbi5leHBpcmVzQXQpLmdldFRpbWUoKSAtIERhdGUubm93KCkgPD0gRVhQSVJFX1dJTkRPV19NUykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU1NPIHRva2VuIGlzIGV4cGlyZWQuXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKFxuICAgICAgYFRoZSBTU08gc2Vzc2lvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBwcm9maWxlIGhhcyBleHBpcmVkIG9yIGlzIG90aGVyd2lzZSBpbnZhbGlkLiBUbyByZWZyZXNoIHRoaXMgU1NPIHNlc3Npb24gYCArXG4gICAgICAgIGBydW4gYXdzIHNzbyBsb2dpbiB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHByb2ZpbGUuYCxcbiAgICAgIFNIT1VMRF9GQUlMX0NSRURFTlRJQUxfQ0hBSU5cbiAgICApO1xuICB9XG4gIGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IHRva2VuO1xuICBjb25zdCBzc28gPSBvcHRpb25zLnNzb0NsaWVudCB8fCBuZXcgU1NPQ2xpZW50KHsgcmVnaW9uIH0pO1xuICBsZXQgc3NvUmVzcDogR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZE91dHB1dDtcbiAgdHJ5IHtcbiAgICBzc29SZXNwID0gYXdhaXQgc3NvLnNlbmQoXG4gICAgICBuZXcgR2V0Um9sZUNyZWRlbnRpYWxzQ29tbWFuZCh7XG4gICAgICAgIGFjY291bnRJZCxcbiAgICAgICAgcm9sZU5hbWUsXG4gICAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgfSlcbiAgICApO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3cgUHJvdmlkZXJFcnJvci5mcm9tKGUsIFNIT1VMRF9GQUlMX0NSRURFTlRJQUxfQ0hBSU4pO1xuICB9XG4gIGNvbnN0IHsgcm9sZUNyZWRlbnRpYWxzOiB7IGFjY2Vzc0tleUlkLCBzZWNyZXRBY2Nlc3NLZXksIHNlc3Npb25Ub2tlbiwgZXhwaXJhdGlvbiB9ID0ge30gfSA9IHNzb1Jlc3A7XG4gIGlmICghYWNjZXNzS2V5SWQgfHwgIXNlY3JldEFjY2Vzc0tleSB8fCAhc2Vzc2lvblRva2VuIHx8ICFleHBpcmF0aW9uKSB7XG4gICAgdGhyb3cgbmV3IFByb3ZpZGVyRXJyb3IoXCJTU08gcmV0dXJucyBhbiBpbnZhbGlkIHRlbXBvcmFyeSBjcmVkZW50aWFsLlwiLCBTSE9VTERfRkFJTF9DUkVERU5USUFMX0NIQUlOKTtcbiAgfVxuICByZXR1cm4geyBhY2Nlc3NLZXlJZCwgc2VjcmV0QWNjZXNzS2V5LCBzZXNzaW9uVG9rZW4sIGV4cGlyYXRpb246IG5ldyBEYXRlKGV4cGlyYXRpb24pIH07XG59O1xuIl19