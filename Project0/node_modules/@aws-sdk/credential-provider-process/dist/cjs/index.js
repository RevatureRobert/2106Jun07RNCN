"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromProcess = exports.ENV_PROFILE = void 0;
const credential_provider_ini_1 = require("@aws-sdk/credential-provider-ini");
const property_provider_1 = require("@aws-sdk/property-provider");
const child_process_1 = require("child_process");
/**
 * @internal
 */
exports.ENV_PROFILE = "AWS_PROFILE";
/**
 * Creates a credential provider that will read from a credential_process specified
 * in ini files.
 */
const fromProcess = (init = {}) => async () => {
    const profiles = await credential_provider_ini_1.parseKnownFiles(init);
    return resolveProcessCredentials(credential_provider_ini_1.getMasterProfileName(init), profiles);
};
exports.fromProcess = fromProcess;
const resolveProcessCredentials = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            return await execPromise(credentialProcess)
                .then((processResult) => {
                let data;
                try {
                    data = JSON.parse(processResult);
                }
                catch (_a) {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                const { Version: version, AccessKeyId: accessKeyId, SecretAccessKey: secretAccessKey, SessionToken: sessionToken, Expiration: expiration, } = data;
                if (version !== 1) {
                    throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
                }
                if (accessKeyId === undefined || secretAccessKey === undefined) {
                    throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
                }
                let expirationUnix;
                if (expiration) {
                    const currentTime = new Date();
                    const expireTime = new Date(expiration);
                    if (expireTime < currentTime) {
                        throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
                    }
                    expirationUnix = Math.floor(new Date(expiration).valueOf() / 1000);
                }
                return {
                    accessKeyId,
                    secretAccessKey,
                    sessionToken,
                    expirationUnix,
                };
            })
                .catch((error) => {
                throw new property_provider_1.ProviderError(error.message);
            });
        }
        else {
            throw new property_provider_1.ProviderError(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        // If the profile cannot be parsed or does not contain the default or
        // specified profile throw an error. This should be considered a terminal
        // resolution error if a profile has been specified by the user (whether via
        // a parameter, anenvironment variable, or another profile's `source_profile` key).
        throw new property_provider_1.ProviderError(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};
const execPromise = (command) => new Promise(function (resolve, reject) {
    child_process_1.exec(command, (error, stdout) => {
        if (error) {
            reject(error);
            return;
        }
        resolve(stdout.trim());
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEVBQTRHO0FBQzVHLGtFQUEyRDtBQUczRCxpREFBcUM7QUFFckM7O0dBRUc7QUFDVSxRQUFBLFdBQVcsR0FBRyxhQUFhLENBQUM7QUFJekM7OztHQUdHO0FBQ0ksTUFBTSxXQUFXLEdBQ3RCLENBQUMsT0FBd0IsRUFBRSxFQUFzQixFQUFFLENBQ25ELEtBQUssSUFBSSxFQUFFO0lBQ1QsTUFBTSxRQUFRLEdBQUcsTUFBTSx5Q0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLE9BQU8seUJBQXlCLENBQUMsOENBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDO0FBTFMsUUFBQSxXQUFXLGVBS3BCO0FBRUosTUFBTSx5QkFBeUIsR0FBRyxLQUFLLEVBQUUsV0FBbUIsRUFBRSxRQUF1QixFQUF3QixFQUFFO0lBQzdHLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUV0QyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUN6QixNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3hELElBQUksaUJBQWlCLEtBQUssU0FBUyxFQUFFO1lBQ25DLE9BQU8sTUFBTSxXQUFXLENBQUMsaUJBQWlCLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxDQUFDLGFBQWtCLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxJQUFJLENBQUM7Z0JBQ1QsSUFBSTtvQkFDRixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDbEM7Z0JBQUMsV0FBTTtvQkFDTixNQUFNLEtBQUssQ0FBQyxXQUFXLFdBQVcsNENBQTRDLENBQUMsQ0FBQztpQkFDakY7Z0JBRUQsTUFBTSxFQUNKLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLGVBQWUsRUFBRSxlQUFlLEVBQ2hDLFlBQVksRUFBRSxZQUFZLEVBQzFCLFVBQVUsRUFBRSxVQUFVLEdBQ3ZCLEdBQUcsSUFBSSxDQUFDO2dCQUVULElBQUksT0FBTyxLQUFLLENBQUMsRUFBRTtvQkFDakIsTUFBTSxLQUFLLENBQUMsV0FBVyxXQUFXLCtDQUErQyxDQUFDLENBQUM7aUJBQ3BGO2dCQUVELElBQUksV0FBVyxLQUFLLFNBQVMsSUFBSSxlQUFlLEtBQUssU0FBUyxFQUFFO29CQUM5RCxNQUFNLEtBQUssQ0FBQyxXQUFXLFdBQVcsbURBQW1ELENBQUMsQ0FBQztpQkFDeEY7Z0JBRUQsSUFBSSxjQUFjLENBQUM7Z0JBRW5CLElBQUksVUFBVSxFQUFFO29CQUNkLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7b0JBQy9CLE1BQU0sVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLFVBQVUsR0FBRyxXQUFXLEVBQUU7d0JBQzVCLE1BQU0sS0FBSyxDQUFDLFdBQVcsV0FBVyxtREFBbUQsQ0FBQyxDQUFDO3FCQUN4RjtvQkFDRCxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDcEU7Z0JBRUQsT0FBTztvQkFDTCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsWUFBWTtvQkFDWixjQUFjO2lCQUNmLENBQUM7WUFDSixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLENBQUMsS0FBWSxFQUFFLEVBQUU7Z0JBQ3RCLE1BQU0sSUFBSSxpQ0FBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN6QyxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDTCxNQUFNLElBQUksaUNBQWEsQ0FBQyxXQUFXLFdBQVcsc0NBQXNDLENBQUMsQ0FBQztTQUN2RjtLQUNGO1NBQU07UUFDTCxxRUFBcUU7UUFDckUseUVBQXlFO1FBQ3pFLDRFQUE0RTtRQUM1RSxtRkFBbUY7UUFDbkYsTUFBTSxJQUFJLGlDQUFhLENBQUMsV0FBVyxXQUFXLGlEQUFpRCxDQUFDLENBQUM7S0FDbEc7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQ3RDLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07SUFDbkMsb0JBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDOUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDZCxPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldE1hc3RlclByb2ZpbGVOYW1lLCBwYXJzZUtub3duRmlsZXMsIFNvdXJjZVByb2ZpbGVJbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pXCI7XG5pbXBvcnQgeyBQcm92aWRlckVycm9yIH0gZnJvbSBcIkBhd3Mtc2RrL3Byb3BlcnR5LXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBQYXJzZWRJbmlEYXRhIH0gZnJvbSBcIkBhd3Mtc2RrL3NoYXJlZC1pbmktZmlsZS1sb2FkZXJcIjtcbmltcG9ydCB7IENyZWRlbnRpYWxQcm92aWRlciwgQ3JlZGVudGlhbHMgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcbmltcG9ydCB7IGV4ZWMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgY29uc3QgRU5WX1BST0ZJTEUgPSBcIkFXU19QUk9GSUxFXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnJvbVByb2Nlc3NJbml0IGV4dGVuZHMgU291cmNlUHJvZmlsZUluaXQge31cblxuLyoqXG4gKiBDcmVhdGVzIGEgY3JlZGVudGlhbCBwcm92aWRlciB0aGF0IHdpbGwgcmVhZCBmcm9tIGEgY3JlZGVudGlhbF9wcm9jZXNzIHNwZWNpZmllZFxuICogaW4gaW5pIGZpbGVzLlxuICovXG5leHBvcnQgY29uc3QgZnJvbVByb2Nlc3MgPVxuICAoaW5pdDogRnJvbVByb2Nlc3NJbml0ID0ge30pOiBDcmVkZW50aWFsUHJvdmlkZXIgPT5cbiAgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHByb2ZpbGVzID0gYXdhaXQgcGFyc2VLbm93bkZpbGVzKGluaXQpO1xuICAgIHJldHVybiByZXNvbHZlUHJvY2Vzc0NyZWRlbnRpYWxzKGdldE1hc3RlclByb2ZpbGVOYW1lKGluaXQpLCBwcm9maWxlcyk7XG4gIH07XG5cbmNvbnN0IHJlc29sdmVQcm9jZXNzQ3JlZGVudGlhbHMgPSBhc3luYyAocHJvZmlsZU5hbWU6IHN0cmluZywgcHJvZmlsZXM6IFBhcnNlZEluaURhdGEpOiBQcm9taXNlPENyZWRlbnRpYWxzPiA9PiB7XG4gIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlc1twcm9maWxlTmFtZV07XG5cbiAgaWYgKHByb2ZpbGVzW3Byb2ZpbGVOYW1lXSkge1xuICAgIGNvbnN0IGNyZWRlbnRpYWxQcm9jZXNzID0gcHJvZmlsZVtcImNyZWRlbnRpYWxfcHJvY2Vzc1wiXTtcbiAgICBpZiAoY3JlZGVudGlhbFByb2Nlc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGF3YWl0IGV4ZWNQcm9taXNlKGNyZWRlbnRpYWxQcm9jZXNzKVxuICAgICAgICAudGhlbigocHJvY2Vzc1Jlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHByb2Nlc3NSZXN1bHQpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY3JlZGVudGlhbF9wcm9jZXNzIHJldHVybmVkIGludmFsaWQgSlNPTi5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBWZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICAgICAgQWNjZXNzS2V5SWQ6IGFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgU2VjcmV0QWNjZXNzS2V5OiBzZWNyZXRBY2Nlc3NLZXksXG4gICAgICAgICAgICBTZXNzaW9uVG9rZW46IHNlc3Npb25Ub2tlbixcbiAgICAgICAgICAgIEV4cGlyYXRpb246IGV4cGlyYXRpb24sXG4gICAgICAgICAgfSA9IGRhdGE7XG5cbiAgICAgICAgICBpZiAodmVyc2lvbiAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY3JlZGVudGlhbF9wcm9jZXNzIGRpZCBub3QgcmV0dXJuIFZlcnNpb24gMS5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWNjZXNzS2V5SWQgPT09IHVuZGVmaW5lZCB8fCBzZWNyZXRBY2Nlc3NLZXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY3JlZGVudGlhbF9wcm9jZXNzIHJldHVybmVkIGludmFsaWQgY3JlZGVudGlhbHMuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGV0IGV4cGlyYXRpb25Vbml4O1xuXG4gICAgICAgICAgaWYgKGV4cGlyYXRpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IGV4cGlyZVRpbWUgPSBuZXcgRGF0ZShleHBpcmF0aW9uKTtcbiAgICAgICAgICAgIGlmIChleHBpcmVUaW1lIDwgY3VycmVudFRpbWUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoYFByb2ZpbGUgJHtwcm9maWxlTmFtZX0gY3JlZGVudGlhbF9wcm9jZXNzIHJldHVybmVkIGV4cGlyZWQgY3JlZGVudGlhbHMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBpcmF0aW9uVW5peCA9IE1hdGguZmxvb3IobmV3IERhdGUoZXhwaXJhdGlvbikudmFsdWVPZigpIC8gMTAwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjY2Vzc0tleUlkLFxuICAgICAgICAgICAgc2VjcmV0QWNjZXNzS2V5LFxuICAgICAgICAgICAgc2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgZXhwaXJhdGlvblVuaXgsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBQcm92aWRlckVycm9yKGBQcm9maWxlICR7cHJvZmlsZU5hbWV9IGRpZCBub3QgY29udGFpbiBjcmVkZW50aWFsX3Byb2Nlc3MuYCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIElmIHRoZSBwcm9maWxlIGNhbm5vdCBiZSBwYXJzZWQgb3IgZG9lcyBub3QgY29udGFpbiB0aGUgZGVmYXVsdCBvclxuICAgIC8vIHNwZWNpZmllZCBwcm9maWxlIHRocm93IGFuIGVycm9yLiBUaGlzIHNob3VsZCBiZSBjb25zaWRlcmVkIGEgdGVybWluYWxcbiAgICAvLyByZXNvbHV0aW9uIGVycm9yIGlmIGEgcHJvZmlsZSBoYXMgYmVlbiBzcGVjaWZpZWQgYnkgdGhlIHVzZXIgKHdoZXRoZXIgdmlhXG4gICAgLy8gYSBwYXJhbWV0ZXIsIGFuZW52aXJvbm1lbnQgdmFyaWFibGUsIG9yIGFub3RoZXIgcHJvZmlsZSdzIGBzb3VyY2VfcHJvZmlsZWAga2V5KS5cbiAgICB0aHJvdyBuZXcgUHJvdmlkZXJFcnJvcihgUHJvZmlsZSAke3Byb2ZpbGVOYW1lfSBjb3VsZCBub3QgYmUgZm91bmQgaW4gc2hhcmVkIGNyZWRlbnRpYWxzIGZpbGUuYCk7XG4gIH1cbn07XG5cbmNvbnN0IGV4ZWNQcm9taXNlID0gKGNvbW1hbmQ6IHN0cmluZykgPT5cbiAgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGV4ZWMoY29tbWFuZCwgKGVycm9yLCBzdGRvdXQpID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlc29sdmUoc3Rkb3V0LnRyaW0oKSk7XG4gICAgfSk7XG4gIH0pO1xuIl19