import LazyMetadataValue$CacheStrategy from '../../../org/bukkit/metadata/LazyMetadataValue$CacheStrategy.js';
import MetadataValueAdapter from '../../../org/bukkit/metadata/MetadataValueAdapter.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface LazyMetadataValue extends MetadataValueAdapter {
    value(): any;
    invalidate(): void;
    asString(): string;
    asBoolean(): boolean;
    asShort(): number;
    asLong(): number;
    asDouble(): number;
    asInt(): number;
    asFloat(): number;
    asByte(): number;
    getOwningPlugin(): Plugin;
}
export default class LazyMetadataValue {
    static get $javaClass(): any;
    constructor(owningPlugin: Plugin, cacheStrategy: LazyMetadataValue$CacheStrategy, lazyValue: any);
    constructor(owningPlugin: Plugin, lazyValue: any);
}
