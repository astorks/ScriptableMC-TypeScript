import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataStore {
    removeMetadata(arg0: any, arg1: string, arg2: Plugin): void;
    hasMetadata(arg0: any, arg1: string): boolean;
    setMetadata(arg0: any, arg1: string, arg2: MetadataValue): void;
    getMetadata(arg0: any, arg1: string): any;
    invalidateAll(arg0: Plugin): void;
}
export default class MetadataStore {
    static get $javaClass(): any;
}
