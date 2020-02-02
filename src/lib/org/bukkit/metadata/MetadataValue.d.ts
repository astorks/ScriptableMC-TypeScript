import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataValue {
    asString(): string;
    asInt(): number;
    asBoolean(): boolean;
    asLong(): number;
    asDouble(): number;
    asFloat(): number;
    asByte(): number;
    asShort(): number;
    invalidate(): void;
    getOwningPlugin(): Plugin;
    value(): any;
}
export default class MetadataValue {
    static get $javaClass(): any;
}
