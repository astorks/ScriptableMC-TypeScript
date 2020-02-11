import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataValue {
    value(): any;
    asString(): string;
    asBoolean(): boolean;
    asShort(): number;
    asLong(): number;
    asDouble(): number;
    asInt(): number;
    asFloat(): number;
    asByte(): number;
    invalidate(): void;
    getOwningPlugin(): Plugin;
}
export default class MetadataValue {
    static get $javaClass(): any;
}
