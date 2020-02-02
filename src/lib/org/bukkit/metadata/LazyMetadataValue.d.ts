import LazyMetadataValue$CacheStrategy from '../../../org/bukkit/metadata/LazyMetadataValue$CacheStrategy.js';
import MetadataValueAdapter from '../../../org/bukkit/metadata/MetadataValueAdapter.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface LazyMetadataValue extends MetadataValueAdapter {
    invalidate(): void;
    value(): any;
    asString(): string;
    asInt(): number;
    asBoolean(): boolean;
    asLong(): number;
    asDouble(): number;
    asFloat(): number;
    asByte(): number;
    asShort(): number;
    getOwningPlugin(): Plugin;
}
export default class LazyMetadataValue {
    static get $javaClass(): any;
    constructor(owningPlugin: Plugin, lazyValue: any);
    constructor(owningPlugin: Plugin, cacheStrategy: LazyMetadataValue$CacheStrategy, lazyValue: any);
}
