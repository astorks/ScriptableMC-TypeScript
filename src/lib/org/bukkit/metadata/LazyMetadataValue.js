export default class LazyMetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.LazyMetadataValue');
    }
    constructor(...args) {
        return new LazyMetadataValue.$javaClass(...args);
    }
}
