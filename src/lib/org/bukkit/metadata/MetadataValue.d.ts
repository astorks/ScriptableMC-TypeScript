import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataValue {
    value(): any;
    asString(): string;
    asDouble(): number;
    asByte(): number;
    asBoolean(): boolean;
    asShort(): number;
    asFloat(): number;
    asLong(): number;
    asInt(): number;
    getOwningPlugin(): Plugin;
    invalidate(): void;
}
export default class MetadataValue {
    static get $javaClass(): any;
}
