import { __assign, __read, __spreadArray } from "tslib";
import { fromEnv } from "@aws-sdk/credential-provider-env";
import { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata, } from "@aws-sdk/credential-provider-imds";
import { ENV_PROFILE, fromIni } from "@aws-sdk/credential-provider-ini";
import { fromProcess } from "@aws-sdk/credential-provider-process";
import { fromSSO } from "@aws-sdk/credential-provider-sso";
import { fromTokenFile } from "@aws-sdk/credential-provider-web-identity";
import { chain, memoize, ProviderError } from "@aws-sdk/property-provider";
import { loadSharedConfigFiles } from "@aws-sdk/shared-ini-file-loader";
export var ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
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
export var defaultProvider = function (init) {
    if (init === void 0) { init = {}; }
    var options = __assign({ profile: process.env[ENV_PROFILE] }, init);
    if (!options.loadedConfig)
        options.loadedConfig = loadSharedConfigFiles(init);
    var providers = [
        fromSSO(options),
        fromIni(options),
        fromProcess(options),
        fromTokenFile(options),
        remoteProvider(options),
    ];
    if (!options.profile)
        providers.unshift(fromEnv());
    var providerChain = chain.apply(void 0, __spreadArray([], __read(providers)));
    return memoize(providerChain, function (credentials) { return credentials.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000; }, function (credentials) { return credentials.expiration !== undefined; });
};
var remoteProvider = function (init) {
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        return fromContainerMetadata(init);
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return function () { return Promise.reject(new ProviderError("EC2 Instance Metadata Service access disabled")); };
    }
    return fromInstanceMetadata(init);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsb0JBQW9CLEdBRXJCLE1BQU0sbUNBQW1DLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQWUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsV0FBVyxFQUFtQixNQUFNLHNDQUFzQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxPQUFPLEVBQWUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLDJDQUEyQyxDQUFDO0FBQzdGLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBR3hFLE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLDJCQUEyQixDQUFDO0FBRTdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQ0c7QUFDSCxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsVUFDN0IsSUFBK0Y7SUFBL0YscUJBQUEsRUFBQSxTQUErRjtJQUUvRixJQUFNLE9BQU8sY0FBSyxPQUFPLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSyxJQUFJLENBQUUsQ0FBQztJQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVk7UUFBRSxPQUFPLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLElBQU0sU0FBUyxHQUFHO1FBQ2hCLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDaEIsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNoQixXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BCLGFBQWEsQ0FBQyxPQUFPLENBQUM7UUFDdEIsY0FBYyxDQUFDLE9BQU8sQ0FBQztLQUN4QixDQUFDO0lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPO1FBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELElBQU0sYUFBYSxHQUFHLEtBQUssd0NBQUksU0FBUyxHQUFDLENBQUM7SUFFMUMsT0FBTyxPQUFPLENBQ1osYUFBYSxFQUNiLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLFVBQVUsS0FBSyxTQUFTLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxFQUE5RixDQUE4RixFQUMvRyxVQUFDLFdBQVcsSUFBSyxPQUFBLFdBQVcsQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFwQyxDQUFvQyxDQUN0RCxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsSUFBTSxjQUFjLEdBQUcsVUFBQyxJQUF3QjtJQUM5QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7UUFDeEUsT0FBTyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUVELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1FBQ2xDLE9BQU8sY0FBTSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxhQUFhLENBQUMsK0NBQStDLENBQUMsQ0FBQyxFQUFsRixDQUFrRixDQUFDO0tBQ2pHO0lBRUQsT0FBTyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmcm9tRW52IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItZW52XCI7XG5pbXBvcnQge1xuICBFTlZfQ01EU19GVUxMX1VSSSxcbiAgRU5WX0NNRFNfUkVMQVRJVkVfVVJJLFxuICBmcm9tQ29udGFpbmVyTWV0YWRhdGEsXG4gIGZyb21JbnN0YW5jZU1ldGFkYXRhLFxuICBSZW1vdGVQcm92aWRlckluaXQsXG59IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWltZHNcIjtcbmltcG9ydCB7IEVOVl9QUk9GSUxFLCBmcm9tSW5pLCBGcm9tSW5pSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLWluaVwiO1xuaW1wb3J0IHsgZnJvbVByb2Nlc3MsIEZyb21Qcm9jZXNzSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXByb2Nlc3NcIjtcbmltcG9ydCB7IGZyb21TU08sIEZyb21TU09Jbml0IH0gZnJvbSBcIkBhd3Mtc2RrL2NyZWRlbnRpYWwtcHJvdmlkZXItc3NvXCI7XG5pbXBvcnQgeyBmcm9tVG9rZW5GaWxlLCBGcm9tVG9rZW5GaWxlSW5pdCB9IGZyb20gXCJAYXdzLXNkay9jcmVkZW50aWFsLXByb3ZpZGVyLXdlYi1pZGVudGl0eVwiO1xuaW1wb3J0IHsgY2hhaW4sIG1lbW9pemUsIFByb3ZpZGVyRXJyb3IgfSBmcm9tIFwiQGF3cy1zZGsvcHJvcGVydHktcHJvdmlkZXJcIjtcbmltcG9ydCB7IGxvYWRTaGFyZWRDb25maWdGaWxlcyB9IGZyb20gXCJAYXdzLXNkay9zaGFyZWQtaW5pLWZpbGUtbG9hZGVyXCI7XG5pbXBvcnQgeyBDcmVkZW50aWFsUHJvdmlkZXIgfSBmcm9tIFwiQGF3cy1zZGsvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IEVOVl9JTURTX0RJU0FCTEVEID0gXCJBV1NfRUMyX01FVEFEQVRBX0RJU0FCTEVEXCI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNyZWRlbnRpYWwgcHJvdmlkZXIgdGhhdCB3aWxsIGF0dGVtcHQgdG8gZmluZCBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogZm9sbG93aW5nIHNvdXJjZXMgKGxpc3RlZCBpbiBvcmRlciBvZiBwcmVjZWRlbmNlKTpcbiAqICAgKiBFbnZpcm9ubWVudCB2YXJpYWJsZXMgZXhwb3NlZCB2aWEgYHByb2Nlc3MuZW52YFxuICogICAqIFNTTyBjcmVkZW50aWFscyBmcm9tIHRva2VuIGNhY2hlXG4gKiAgICogV2ViIGlkZW50aXR5IHRva2VuIGNyZWRlbnRpYWxzXG4gKiAgICogU2hhcmVkIGNyZWRlbnRpYWxzIGFuZCBjb25maWcgaW5pIGZpbGVzXG4gKiAgICogVGhlIEVDMi9FQ1MgSW5zdGFuY2UgTWV0YWRhdGEgU2VydmljZVxuICpcbiAqIFRoZSBkZWZhdWx0IGNyZWRlbnRpYWwgcHJvdmlkZXIgd2lsbCBpbnZva2Ugb25lIHByb3ZpZGVyIGF0IGEgdGltZSBhbmQgb25seVxuICogY29udGludWUgdG8gdGhlIG5leHQgaWYgbm8gY3JlZGVudGlhbHMgaGF2ZSBiZWVuIGxvY2F0ZWQuIEZvciBleGFtcGxlLCBpZlxuICogdGhlIHByb2Nlc3MgZmluZHMgdmFsdWVzIGRlZmluZWQgdmlhIHRoZSBgQVdTX0FDQ0VTU19LRVlfSURgIGFuZFxuICogYEFXU19TRUNSRVRfQUNDRVNTX0tFWWAgZW52aXJvbm1lbnQgdmFyaWFibGVzLCB0aGUgZmlsZXMgYXRcbiAqIGB+Ly5hd3MvY3JlZGVudGlhbHNgIGFuZCBgfi8uYXdzL2NvbmZpZ2Agd2lsbCBub3QgYmUgcmVhZCwgbm9yIHdpbGwgYW55XG4gKiBtZXNzYWdlcyBiZSBzZW50IHRvIHRoZSBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlLlxuICpcbiAqIEBwYXJhbSBpbml0ICAgICAgICAgICAgICAgICAgQ29uZmlndXJhdGlvbiB0aGF0IGlzIHBhc3NlZCB0byBlYWNoIGluZGl2aWR1YWxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXJcbiAqXG4gKiBAc2VlIGZyb21FbnYgICAgICAgICAgICAgICAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICogQHNlZSBmcm9tU1NPICAgICAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCBTU08gdG9rZW4gY2FjaGVcbiAqIEBzZWUgZnJvbVRva2VuRmlsZSAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb21cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4gZmlsZVxuICogQHNlZSBmcm9tSW5pICAgICAgICAgICAgICAgICBUaGUgZnVuY3Rpb24gdXNlZCB0byBzb3VyY2UgY3JlZGVudGlhbHMgZnJvbSBJTklcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNcbiAqIEBzZWUgZnJvbVByb2Nlc3MgICAgICAgICAgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlcyBjcmVkZW50aWFscyBmcm9tXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxfcHJvY2VzcyBpbiBJTkkgZmlsZXNcbiAqIEBzZWUgZnJvbUluc3RhbmNlTWV0YWRhdGEgICAgVGhlIGZ1bmN0aW9uIHVzZWQgdG8gc291cmNlIGNyZWRlbnRpYWxzIGZyb20gdGhlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVDMiBJbnN0YW5jZSBNZXRhZGF0YSBTZXJ2aWNlXG4gKiBAc2VlIGZyb21Db250YWluZXJNZXRhZGF0YSAgIFRoZSBmdW5jdGlvbiB1c2VkIHRvIHNvdXJjZSBjcmVkZW50aWFscyBmcm9tIHRoZVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFQ1MgQ29udGFpbmVyIE1ldGFkYXRhIFNlcnZpY2VcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRQcm92aWRlciA9IChcbiAgaW5pdDogRnJvbUluaUluaXQgJiBSZW1vdGVQcm92aWRlckluaXQgJiBGcm9tUHJvY2Vzc0luaXQgJiBGcm9tU1NPSW5pdCAmIEZyb21Ub2tlbkZpbGVJbml0ID0ge31cbik6IENyZWRlbnRpYWxQcm92aWRlciA9PiB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7IHByb2ZpbGU6IHByb2Nlc3MuZW52W0VOVl9QUk9GSUxFXSwgLi4uaW5pdCB9O1xuICBpZiAoIW9wdGlvbnMubG9hZGVkQ29uZmlnKSBvcHRpb25zLmxvYWRlZENvbmZpZyA9IGxvYWRTaGFyZWRDb25maWdGaWxlcyhpbml0KTtcbiAgY29uc3QgcHJvdmlkZXJzID0gW1xuICAgIGZyb21TU08ob3B0aW9ucyksXG4gICAgZnJvbUluaShvcHRpb25zKSxcbiAgICBmcm9tUHJvY2VzcyhvcHRpb25zKSxcbiAgICBmcm9tVG9rZW5GaWxlKG9wdGlvbnMpLFxuICAgIHJlbW90ZVByb3ZpZGVyKG9wdGlvbnMpLFxuICBdO1xuICBpZiAoIW9wdGlvbnMucHJvZmlsZSkgcHJvdmlkZXJzLnVuc2hpZnQoZnJvbUVudigpKTtcbiAgY29uc3QgcHJvdmlkZXJDaGFpbiA9IGNoYWluKC4uLnByb3ZpZGVycyk7XG5cbiAgcmV0dXJuIG1lbW9pemUoXG4gICAgcHJvdmlkZXJDaGFpbixcbiAgICAoY3JlZGVudGlhbHMpID0+IGNyZWRlbnRpYWxzLmV4cGlyYXRpb24gIT09IHVuZGVmaW5lZCAmJiBjcmVkZW50aWFscy5leHBpcmF0aW9uLmdldFRpbWUoKSAtIERhdGUubm93KCkgPCAzMDAwMDAsXG4gICAgKGNyZWRlbnRpYWxzKSA9PiBjcmVkZW50aWFscy5leHBpcmF0aW9uICE9PSB1bmRlZmluZWRcbiAgKTtcbn07XG5cbmNvbnN0IHJlbW90ZVByb3ZpZGVyID0gKGluaXQ6IFJlbW90ZVByb3ZpZGVySW5pdCk6IENyZWRlbnRpYWxQcm92aWRlciA9PiB7XG4gIGlmIChwcm9jZXNzLmVudltFTlZfQ01EU19SRUxBVElWRV9VUkldIHx8IHByb2Nlc3MuZW52W0VOVl9DTURTX0ZVTExfVVJJXSkge1xuICAgIHJldHVybiBmcm9tQ29udGFpbmVyTWV0YWRhdGEoaW5pdCk7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnZbRU5WX0lNRFNfRElTQUJMRURdKSB7XG4gICAgcmV0dXJuICgpID0+IFByb21pc2UucmVqZWN0KG5ldyBQcm92aWRlckVycm9yKFwiRUMyIEluc3RhbmNlIE1ldGFkYXRhIFNlcnZpY2UgYWNjZXNzIGRpc2FibGVkXCIpKTtcbiAgfVxuXG4gIHJldHVybiBmcm9tSW5zdGFuY2VNZXRhZGF0YShpbml0KTtcbn07XG4iXX0=