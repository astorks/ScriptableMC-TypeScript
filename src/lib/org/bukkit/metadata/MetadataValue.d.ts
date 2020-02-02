import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataValue {
    value(): any;
    asString(): string;
    asDouble(): number;
    asLong(): number;
    asInt(): number;
    asBoolean(): boolean;
    asShort(): number;
    asFloat(): number;
    asByte(): number;
    getOwningPlugin(): Plugin;
    invalidate(): void;
}
export default class MetadataValue {
    static get $javaClass(): any;
}
