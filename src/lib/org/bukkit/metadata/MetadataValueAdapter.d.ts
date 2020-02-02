import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataValueAdapter extends MetadataValue {
    asString(): string;
    asInt(): number;
    asBoolean(): boolean;
    asLong(): number;
    asDouble(): number;
    asFloat(): number;
    asByte(): number;
    asShort(): number;
    getOwningPlugin(): Plugin;
    invalidate(): void;
    value(): any;
}
export default class MetadataValueAdapter {
    static get $javaClass(): any;
}
