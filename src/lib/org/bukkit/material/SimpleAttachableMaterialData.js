export default class SimpleAttachableMaterialData {
    static get $javaClass() {
        return Java.type('org.bukkit.material.SimpleAttachableMaterialData');
    }
    constructor(...args) {
        return new SimpleAttachableMaterialData.$javaClass(...args);
    }
}
