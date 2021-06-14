"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultProvider = exports.ENV_IMDS_DISABLED = void 0;
const credential_provider_env_1 = require("@aws-sdk/credential-provider-env");
const credential_provider_imds_1 = require("@aws-sdk/credential-provider-imds");
const credential_provider_ini_1 = require("@aws-sdk/credential-provider-ini");
const credential_provider_process_1 = require("@aws-sdk/credential-provider-process");
const credential_provider_sso_1 = require("@aws-sdk/credential-provider-sso");
const credential_provider_web_identity_1 = require("@aws-sdk/credential-provider-web-identity");
const property_provider_1 = require("@aws-sdk/property-provider");
const shared_ini_file_loader_1 = require("@aws-sdk/shared-ini-file-loader");
exports.ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
/**
 * Creates a credential provider that will attempt to find credentials from the
 * following sources (listed in order of precedence):
 *   * Environment variables exposed via `process.env`
 *   * SSO credentials from token cache
 *   * Web identity token credentials
 *   * Shared credentials and config ini files
 *   * The EC2/ECS Instance Metadata Service
 *
 * The default credential provider will invoke one provider at a time and only
 * continue to the next if no credentials have been located. For example, if
 * the process finds values defined via the `AWS_ACCESS_KEY_ID` and
 * `AWS_SECRET_ACCESS_KEY` environment variables, the files at
 * `~/.aws/credentials` and `~/.aws/config` will not be read, nor will any
 * messages be sent to the Instance Metadata Service.
 *
 * @param init                  Configuration that is passed to each individual
 *                              provider
 *
 * @see fromEnv                 The function used to source credentials from
 *                              environment variables
 * @see fromSSO                 The function used to source credentials from
 *                              resolved SSO token cache
 * @see fromTokenFile           The function used to source credentials from
 *                              token file
 * @see fromIni                 The function used to source credentials from INI
 *                              files
 * @see fromProcess             The function used to sources credentials from
 *                              credential_process in INI files
 * @see fromInstanceMetadata    The function used to source credentials from the
 *                              EC2 Instance Metadata Service
 * @see fromContainerMetadata   The function used to source credentials from the
 *                              ECS Container Metadata Service
 */
const defaultProvider = (init = {}) => {
    const options = { profile: process.env[credential_provider_ini_1.ENV_PROFILE], ...init };
    if (!options.loadedConfig)
        options.loadedConfig = shared_ini_file_loader_1.loadSharedConfigFiles(init);
    const providers = [
        credential_provider_sso_1.fromSSO(options),
        credential_provider_ini_1.fromIni(options),
        credential_provider_process_1.fromProcess(options),
        credential_provider_web_identity_1.fromTokenFile(options),
        remoteProvider(options),
    ];
    if (!options.profile)
        providers.unshift(credential_provider_env_1.fromEnv());
    const providerChain = property_provider_1.chain(...providers);
    return property_provider_1.memoize(providerChain, (credentials) => credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000, (credentials) => credentials.expiration !== undefined);
};
exports.defaultProvider = defaultProvider;
const remoteProvider = (init) => {
    if (process.env[credential_provider_imds_1.ENV_CMDS_RELATIVE_URI] || process.env[credential_provider_imds_1.ENV_CMDS_FULL_URI]) {
        return credential_provider_imds_1.fromContainerMetadata(init);
    }
    if (process.env[exports.ENV_IMDS_DISABLED]) {
        return () => Promise.reject(new property_provider_1.ProviderError("EC2 Instance Metadata Service access disabled"));
    }
    return credential_provider_imds_1.fromInstanceMetadata(init);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOEVBQTJEO0FBQzNELGdGQU0yQztBQUMzQyw4RUFBcUY7QUFDckYsc0ZBQW9GO0FBQ3BGLDhFQUF3RTtBQUN4RSxnR0FBNkY7QUFDN0Ysa0VBQTJFO0FBQzNFLDRFQUF3RTtBQUczRCxRQUFBLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSSxNQUFNLGVBQWUsR0FBRyxDQUM3QixPQUE2RixFQUFFLEVBQzNFLEVBQUU7SUFDdEIsTUFBTSxPQUFPLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBVyxDQUFDLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLDhDQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLE1BQU0sU0FBUyxHQUFHO1FBQ2hCLGlDQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hCLGlDQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2hCLHlDQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BCLGdEQUFhLENBQUMsT0FBTyxDQUFDO1FBQ3RCLGNBQWMsQ0FBQyxPQUFPLENBQUM7S0FDeEIsQ0FBQztJQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTztRQUFFLFNBQVMsQ0FBQyxPQUFPLENBQUMsaUNBQU8sRUFBRSxDQUFDLENBQUM7SUFDbkQsTUFBTSxhQUFhLEdBQUcseUJBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDO0lBRTFDLE9BQU8sMkJBQU8sQ0FDWixhQUFhLEVBQ2IsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU0sRUFDL0csQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxDQUN0RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBcEJXLFFBQUEsZUFBZSxtQkFvQjFCO0FBRUYsTUFBTSxjQUFjLEdBQUcsQ0FBQyxJQUF3QixFQUFzQixFQUFFO0lBQ3RFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBcUIsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQWlCLENBQUMsRUFBRTtRQUN4RSxPQUFPLGdEQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUFpQixDQUFDLEVBQUU7UUFDbEMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksaUNBQWEsQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7S0FDakc7SUFFRCxPQUFPLCtDQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZyb21FbnYgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1lbnZcIjtcbmltcG9ydCB7XG4gIEVOVl9DTURTX0ZVTExfVVJJLFxuICBFTlZfQ01EU19SRUxBVElWRV9VUkksXG4gIGZyb21Db250YWluZXJNZXRhZGF0YSxcbiAgZnJvbUluc3RhbmNlTWV0YWRhdGEsXG4gIFJlbW90ZVByb3ZpZGVySW5pdCxcbn0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW1kc1wiO1xuaW1wb3J0IHsgRU5WX1BST0ZJTEUsIGZyb21JbmksIEZyb21JbmlJbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItaW5pXCI7XG5pbXBvcnQgeyBmcm9tUHJvY2VzcywgRnJvbVByb2Nlc3NJbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItcHJvY2Vzc1wiO1xuaW1wb3J0IHsgZnJvbVNTTywgRnJvbVNTT0luaXQgfSBmcm9tIFwiQGF3cy1zZGsvY3JlZGVudGlhbC1wcm92aWRlci1zc29cIjtcbmltcG9ydCB7IGZyb21Ub2tlbkZpbGUsIEZyb21Ub2tlbkZpbGVJbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItd2ViLWlkZW50aXR5XCI7XG5pbXBvcnQgeyBjaGFpbiwgbWVtb2l6ZSwgUHJvdmlkZXJFcnJvciB9IGZyb20gXCJAYXdzLXNkay9wcm9wZXJ0eS1wcm92aWRlclwiO1xuaW1wb3J0IHsgbG9hZFNoYXJlZENvbmZpZ0ZpbGVzIH0gZnJvbSBcIkBhd3Mtc2RrL3NoYXJlZC1pbmktZmlsZS1sb2FkZXJcIjtcbmltcG9ydCB7IENyZWRlbnRpYWxQcm92aWRlciB9IGZyb20gXCJAYXdzLXNkay90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgRU5WX0lNRFNfRElTQUJMRUQgPSBcIkFXU19FQzJfTUVUQURBVEFfRElTQUJMRURcIjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY3JlZGVudGlhbCBwcm92aWRlciB0aGF0IHdpbGwgYXR0ZW1wdCB0byBmaW5kIGNyZWRlbnRpYWxzIGZyb20gdGhlXG4gKiBmb2xsb3dpbmcgc291cmNlcyAobGlzdGVkIGluIG9yZGVyIG9mIHByZWNlZGVuY2UpOlxuICogICAqIEVudmlyb25tZW50IHZhcmlhYmxlcyBleHBvc2VkIHZpYSBgcHJvY2Vzcy5lbnZgXG4gKiAgICogU1NPIGNyZWRlbnRpYWxzIGZyb20gdG9rZW4gY2FjaGVcbiAqICAgKiBXZWIgaWRlbnRpdHkgdG9rZW4gY3JlZGVudGlhbHNcbiAqICAgKiBTaGFyZWQgY3JlZGVudGlhbHMgYW5kIGNvbmZpZyBpbmkgZmlsZXNcbiAqICAgKiBUaGUgRUMyL0VDUyBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlXG4gKlxuICogVGhlIGRlZmF1bHQgY3JlZGVudGlhbCBwcm92aWRlciB3aWxsIGludm9rZSBvbmUgcHJvdmlkZXIgYXQgYSB0aW1lIGFuZCBvbmx5XG4gKiBjb250aW51ZSB0byB0aGUgbmV4dCBpZiBubyBjcmVkZW50aWFscyBoYXZlIGJlZW4gbG9jYXRlZC4gRm9yIGV4YW1wbGUsIGlmXG4gKiB0aGUgcHJvY2VzcyBmaW5kcyB2YWx1ZXMgZGVmaW5lZCB2aWEgdGhlIGBBV1NfQUNDRVNTX0tFWV9JRGAgYW5kXG4gKiBgQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZYCBlbnZpcm9ubWVudCB2YXJpYWJsZXMsIHRoZSBmaWxlcyBhdFxuICogYH4vLmF3cy9jcmVkZW50aWFsc2AgYW5kIGB+Ly5hd3MvY29uZmlnYCB3aWxsIG5vdCBiZSByZWFkLCBub3Igd2lsbCBhbnlcbiAqIG1lc3NhZ2VzIGJlIHNlbnQgdG8gdGhlIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UuXG4gKlxuICogQHBhcmFtIGluaXQgICAgICAgICAgICAgICAgICBDb25maWd1cmF0aW9uIHRoYXQgaXMgcGFzc2VkIHRvIGVhY2ggaW5kaXZpZHVhbFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlclxuICpcbiAqIEBzZWUgZnJvbUVudiAgICAgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gKiBAc2VlIGZyb21TU08gICAgICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVkIFNTTyB0b2tlbiBjYWNoZVxuICogQHNlZSBmcm9tVG9rZW5GaWxlICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbiBmaWxlXG4gKiBAc2VlIGZyb21JbmkgICAgICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIElOSVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1xuICogQHNlZSBmcm9tUHJvY2VzcyAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2VzIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbF9wcm9jZXNzIGluIElOSSBmaWxlc1xuICogQHNlZSBmcm9tSW5zdGFuY2VNZXRhZGF0YSAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSB0aGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2VcbiAqIEBzZWUgZnJvbUNvbnRhaW5lck1ldGFkYXRhICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVDUyBDb250YWluZXIgTWV0YWRhdGEgU2VydmljZVxuICovXG5leHBvcnQgY29uc3QgZGVmYXVsdFByb3ZpZGVyID0gKFxuICBpbml0OiBGcm9tSW5pSW5pdCAmIFJlbW90ZVByb3ZpZGVySW5pdCAmIEZyb21Qcm9jZXNzSW5pdCAmIEZyb21TU09Jbml0ICYgRnJvbVRva2VuRmlsZUluaXQgPSB7fVxuKTogQ3JlZGVudGlhbFByb3ZpZGVyID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IHsgcHJvZmlsZTogcHJvY2Vzcy5lbnZbRU5WX1BST0ZJTEVdLCAuLi5pbml0IH07XG4gIGlmICghb3B0aW9ucy5sb2FkZWRDb25maWcpIG9wdGlvbnMubG9hZGVkQ29uZmlnID0gbG9hZFNoYXJlZENvbmZpZ0ZpbGVzKGluaXQpO1xuICBjb25zdCBwcm92aWRlcnMgPSBbXG4gICAgZnJvbVNTTyhvcHRpb25zKSxcbiAgICBmcm9tSW5pKG9wdGlvbnMpLFxuICAgIGZyb21Qcm9jZXNzKG9wdGlvbnMpLFxuICAgIGZyb21Ub2tlbkZpbGUob3B0aW9ucyksXG4gICAgcmVtb3RlUHJvdmlkZXIob3B0aW9ucyksXG4gIF07XG4gIGlmICghb3B0aW9ucy5wcm9maWxlKSBwcm92aWRlcnMudW5zaGlmdChmcm9tRW52KCkpO1xuICBjb25zdCBwcm92aWRlckNoYWluID0gY2hhaW4oLi4ucHJvdmlkZXJzKTtcblxuICByZXR1cm4gbWVtb2l6ZShcbiAgICBwcm92aWRlckNoYWluLFxuICAgIChjcmVkZW50aWFscykgPT4gY3JlZGVudGlhbHMuZXhwaXJhdGlvbiAhPT0gdW5kZWZpbmVkICYmIGNyZWRlbnRpYWxzLmV4cGlyYXRpb24uZ2V0VGltZSgpIC0gRGF0ZS5ub3coKSA8IDMwMDAwMCxcbiAgICAoY3JlZGVudGlhbHMpID0+IGNyZWRlbnRpYWxzLmV4cGlyYXRpb24gIT09IHVuZGVmaW5lZFxuICApO1xufTtcblxuY29uc3QgcmVtb3RlUHJvdmlkZXIgPSAoaW5pdDogUmVtb3RlUHJvdmlkZXJJbml0KTogQ3JlZGVudGlhbFByb3ZpZGVyID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52W0VOVl9DTURTX1JFTEFUSVZFX1VSSV0gfHwgcHJvY2Vzcy5lbnZbRU5WX0NNRFNfRlVMTF9VUkldKSB7XG4gICAgcmV0dXJuIGZyb21Db250YWluZXJNZXRhZGF0YShpbml0KTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudltFTlZfSU1EU19ESVNBQkxFRF0pIHtcbiAgICByZXR1cm4gKCkgPT4gUHJvbWlzZS5yZWplY3QobmV3IFByb3ZpZGVyRXJyb3IoXCJFQzIgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZSBhY2Nlc3MgZGlzYWJsZWRcIikpO1xuICB9XG5cbiAgcmV0dXJuIGZyb21JbnN0YW5jZU1ldGFkYXRhKGluaXQpO1xufTtcbiJdfQ==