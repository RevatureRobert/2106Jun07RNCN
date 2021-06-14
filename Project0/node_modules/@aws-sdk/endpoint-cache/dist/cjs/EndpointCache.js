"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndpointCache = void 0;
const tslib_1 = require("tslib");
const lru_cache_1 = tslib_1.__importDefault(require("mnemonist/lru-cache"));
class EndpointCache {
    constructor(capacity) {
        this.cache = new lru_cache_1.default(capacity);
    }
    /**
     * Returns an un-expired endpoint for the given key.
     *
     * @param endpointsWithExpiry
     * @returns
     */
    getEndpoint(key) {
        const endpointsWithExpiry = this.get(key);
        if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
            return undefined;
        }
        const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
        return endpoints[Math.floor(Math.random() * endpoints.length)];
    }
    /**
     * Returns un-expired endpoints for the given key.
     *
     * @param key
     * @returns
     */
    get(key) {
        if (!this.has(key)) {
            return;
        }
        const value = this.cache.get(key);
        if (!value) {
            return;
        }
        const now = Date.now();
        const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
        if (endpointsWithExpiry.length === 0) {
            this.delete(key);
            return undefined;
        }
        return endpointsWithExpiry;
    }
    /**
     * Stores the endpoints passed for the key in cache.
     * If not defined, uses empty string for the Address in endpoint.
     * If not defined, uses one minute for CachePeriodInMinutes in endpoint.
     * Stores milliseconds elapsed since the UNIX epoch in Expires param based
     * on value provided in CachePeriodInMinutes.
     *
     * @param key
     * @param endpoints
     */
    set(key, endpoints) {
        const now = Date.now();
        this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
            Address,
            Expires: now + CachePeriodInMinutes * 60 * 1000,
        })));
    }
    /**
     * Deletes the value for the given key in the cache.
     *
     * @param {string} key
     */
    delete(key) {
        // Replace with remove/delete call once support is added upstream
        // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
        this.cache.set(key, []);
    }
    /**
     * Checks whether the key exists in cache.
     *
     * @param {string} key
     * @returns {boolean}
     */
    has(key) {
        if (!this.cache.has(key)) {
            return false;
        }
        // Remove call for peek, once remove/delete support is added upstream
        // Refs: https://github.com/Yomguithereal/mnemonist/issues/143
        const endpoints = this.cache.peek(key);
        if (!endpoints) {
            return false;
        }
        return endpoints.length > 0;
    }
    /**
     * Clears the cache.
     */
    clear() {
        this.cache.clear();
    }
}
exports.EndpointCache = EndpointCache;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW5kcG9pbnRDYWNoZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9FbmRwb2ludENhY2hlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSw0RUFBMkM7QUFRM0MsTUFBYSxhQUFhO0lBR3hCLFlBQVksUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLEdBQVc7UUFDckIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBQ0QsTUFBTSxTQUFTLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsR0FBRyxDQUFDLEdBQVc7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQixPQUFPO1NBQ1I7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTztTQUNSO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRSxJQUFJLG1CQUFtQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILEdBQUcsQ0FBQyxHQUFXLEVBQUUsU0FBcUI7UUFDcEMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNaLEdBQUcsRUFDSCxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNwRCxPQUFPO1lBQ1AsT0FBTyxFQUFFLEdBQUcsR0FBRyxvQkFBb0IsR0FBRyxFQUFFLEdBQUcsSUFBSTtTQUNoRCxDQUFDLENBQUMsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsR0FBVztRQUNoQixpRUFBaUU7UUFDakUsOERBQThEO1FBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxHQUFHLENBQUMsR0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQscUVBQXFFO1FBQ3JFLDhEQUE4RDtRQUM5RCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGO0FBMUdELHNDQTBHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMUlVDYWNoZSBmcm9tIFwibW5lbW9uaXN0L2xydS1jYWNoZVwiO1xuXG5pbXBvcnQgeyBFbmRwb2ludCB9IGZyb20gXCIuL0VuZHBvaW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW5kcG9pbnRXaXRoRXhwaXJ5IGV4dGVuZHMgUGljazxFbmRwb2ludCwgXCJBZGRyZXNzXCI+IHtcbiAgRXhwaXJlczogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgRW5kcG9pbnRDYWNoZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2FjaGU6IExSVUNhY2hlPHN0cmluZywgRW5kcG9pbnRXaXRoRXhwaXJ5W10+O1xuXG4gIGNvbnN0cnVjdG9yKGNhcGFjaXR5OiBudW1iZXIpIHtcbiAgICB0aGlzLmNhY2hlID0gbmV3IExSVUNhY2hlKGNhcGFjaXR5KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIHVuLWV4cGlyZWQgZW5kcG9pbnQgZm9yIHRoZSBnaXZlbiBrZXkuXG4gICAqXG4gICAqIEBwYXJhbSBlbmRwb2ludHNXaXRoRXhwaXJ5XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBnZXRFbmRwb2ludChrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IGVuZHBvaW50c1dpdGhFeHBpcnkgPSB0aGlzLmdldChrZXkpO1xuICAgIGlmICghZW5kcG9pbnRzV2l0aEV4cGlyeSB8fCBlbmRwb2ludHNXaXRoRXhwaXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZW5kcG9pbnRzID0gZW5kcG9pbnRzV2l0aEV4cGlyeS5tYXAoKGVuZHBvaW50KSA9PiBlbmRwb2ludC5BZGRyZXNzKTtcbiAgICByZXR1cm4gZW5kcG9pbnRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVuZHBvaW50cy5sZW5ndGgpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVuLWV4cGlyZWQgZW5kcG9pbnRzIGZvciB0aGUgZ2l2ZW4ga2V5LlxuICAgKlxuICAgKiBAcGFyYW0ga2V5XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuY2FjaGUuZ2V0KGtleSk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgY29uc3QgZW5kcG9pbnRzV2l0aEV4cGlyeSA9IHZhbHVlLmZpbHRlcigoZW5kcG9pbnQpID0+IG5vdyA8IGVuZHBvaW50LkV4cGlyZXMpO1xuICAgIGlmIChlbmRwb2ludHNXaXRoRXhwaXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kZWxldGUoa2V5KTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuZHBvaW50c1dpdGhFeHBpcnk7XG4gIH1cblxuICAvKipcbiAgICogU3RvcmVzIHRoZSBlbmRwb2ludHMgcGFzc2VkIGZvciB0aGUga2V5IGluIGNhY2hlLlxuICAgKiBJZiBub3QgZGVmaW5lZCwgdXNlcyBlbXB0eSBzdHJpbmcgZm9yIHRoZSBBZGRyZXNzIGluIGVuZHBvaW50LlxuICAgKiBJZiBub3QgZGVmaW5lZCwgdXNlcyBvbmUgbWludXRlIGZvciBDYWNoZVBlcmlvZEluTWludXRlcyBpbiBlbmRwb2ludC5cbiAgICogU3RvcmVzIG1pbGxpc2Vjb25kcyBlbGFwc2VkIHNpbmNlIHRoZSBVTklYIGVwb2NoIGluIEV4cGlyZXMgcGFyYW0gYmFzZWRcbiAgICogb24gdmFsdWUgcHJvdmlkZWQgaW4gQ2FjaGVQZXJpb2RJbk1pbnV0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSBrZXlcbiAgICogQHBhcmFtIGVuZHBvaW50c1xuICAgKi9cbiAgc2V0KGtleTogc3RyaW5nLCBlbmRwb2ludHM6IEVuZHBvaW50W10pIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHRoaXMuY2FjaGUuc2V0KFxuICAgICAga2V5LFxuICAgICAgZW5kcG9pbnRzLm1hcCgoeyBBZGRyZXNzLCBDYWNoZVBlcmlvZEluTWludXRlcyB9KSA9PiAoe1xuICAgICAgICBBZGRyZXNzLFxuICAgICAgICBFeHBpcmVzOiBub3cgKyBDYWNoZVBlcmlvZEluTWludXRlcyAqIDYwICogMTAwMCxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyB0aGUgdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXkgaW4gdGhlIGNhY2hlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAqL1xuICBkZWxldGUoa2V5OiBzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHdpdGggcmVtb3ZlL2RlbGV0ZSBjYWxsIG9uY2Ugc3VwcG9ydCBpcyBhZGRlZCB1cHN0cmVhbVxuICAgIC8vIFJlZnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9Zb21ndWl0aGVyZWFsL21uZW1vbmlzdC9pc3N1ZXMvMTQzXG4gICAgdGhpcy5jYWNoZS5zZXQoa2V5LCBbXSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgdGhlIGtleSBleGlzdHMgaW4gY2FjaGUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBoYXMoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgY2FsbCBmb3IgcGVlaywgb25jZSByZW1vdmUvZGVsZXRlIHN1cHBvcnQgaXMgYWRkZWQgdXBzdHJlYW1cbiAgICAvLyBSZWZzOiBodHRwczovL2dpdGh1Yi5jb20vWW9tZ3VpdGhlcmVhbC9tbmVtb25pc3QvaXNzdWVzLzE0M1xuICAgIGNvbnN0IGVuZHBvaW50cyA9IHRoaXMuY2FjaGUucGVlayhrZXkpO1xuICAgIGlmICghZW5kcG9pbnRzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBlbmRwb2ludHMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNhY2hlLlxuICAgKi9cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5jYWNoZS5jbGVhcigpO1xuICB9XG59XG4iXX0=