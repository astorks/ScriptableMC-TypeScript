export default interface LazyMetadataValue$CacheStrategy {
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class LazyMetadataValue$CacheStrategy {
    static get $javaClass(): any;
    static get CACHE_AFTER_FIRST_EVAL(): LazyMetadataValue$CacheStrategy;
    static get NEVER_CACHE(): LazyMetadataValue$CacheStrategy;
    static get CACHE_ETERNALLY(): LazyMetadataValue$CacheStrategy;
}
