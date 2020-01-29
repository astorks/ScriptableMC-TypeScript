import { MetadataValue } from '../../../org/bukkit/metadata/MetadataValue.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
export interface Metadatable {
    hasMetadata(arg0: string): boolean;
    getMetadata(arg0: string): any;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
}
export declare class Metadatable {
    static get $javaClass(): any;
}
