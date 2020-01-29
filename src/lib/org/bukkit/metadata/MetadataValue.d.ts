import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface MetadataValue {
    value(): any;
    asString(): string;
    asBoolean(): boolean;
    asLong(): number;
    asDouble(): number;
    asByte(): number;
    asShort(): number;
    asInt(): number;
    asFloat(): number;
    getOwningPlugin(): Plugin;
    invalidate(): void;
}
export declare class MetadataValue {
    static get $javaClass(): any;
}
