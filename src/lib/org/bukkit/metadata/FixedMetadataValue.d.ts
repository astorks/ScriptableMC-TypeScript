import LazyMetadataValue from '../../../org/bukkit/metadata/LazyMetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface FixedMetadataValue extends LazyMetadataValue {
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
export default class FixedMetadataValue {
    static get $javaClass(): any;
    constructor(owningPlugin: Plugin, value: any);
}
