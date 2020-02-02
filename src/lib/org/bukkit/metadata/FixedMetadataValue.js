export default class FixedMetadataValue {
    static get $javaClass() {
        return Java.type('org.bukkit.metadata.FixedMetadataValue');
    }
    constructor(...args) {
        return new FixedMetadataValue.$javaClass(...args);
    }
}
