import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataValueAdapter extends MetadataValue {
    asString(): string;
    asBoolean(): boolean;
    asShort(): number;
    asLong(): number;
    asDouble(): number;
    asInt(): number;
    asFloat(): number;
    asByte(): number;
    getOwningPlugin(): Plugin;
    value(): any;
    invalidate(): void;
}
export default class MetadataValueAdapter {
    static get $javaClass(): any;
}
