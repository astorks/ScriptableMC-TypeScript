import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface MetadataValue {
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
export declare class MetadataValue {
    static get $javaClass(): any;
}
