export class MaterialData {
    static get $javaClass() {
        return Java.type('org.bukkit.material.MaterialData');
    }
    constructor(...args) {
        return new MaterialData.$javaClass(...args);
    }
}
//# sourceMappingURL=MaterialData.js.map