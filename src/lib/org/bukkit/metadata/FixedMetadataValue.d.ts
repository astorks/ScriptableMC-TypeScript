import LazyMetadataValue from '../../../org/bukkit/metadata/LazyMetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface FixedMetadataValue extends LazyMetadataValue {
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
export default class FixedMetadataValue {
    static get $javaClass(): any;
    constructor(owningPlugin: Plugin, value: any);
}
