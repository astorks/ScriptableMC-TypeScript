import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
export default interface MetadataStoreBase {
    setMetadata(subject: any, metadataKey: string, newMetadataValue: MetadataValue): void;
    getMetadata(subject: any, metadataKey: string): Array<MetadataValue>;
    hasMetadata(subject: any, metadataKey: string): boolean;
    removeMetadata(subject: any, metadataKey: string, owningPlugin: Plugin): void;
    invalidateAll(owningPlugin: Plugin): void;
}
export default class MetadataStoreBase {
    static get $javaClass(): any;
    constructor();
}
