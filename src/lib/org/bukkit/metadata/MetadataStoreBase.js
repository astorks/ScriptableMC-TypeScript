export default class MetadataStoreBase {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.MetadataStoreBase');
    }
    constructor(...args) {
        return new MetadataStoreBase.$javaClass(...args);
    }
}
