export default class TexturedMaterial {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TexturedMaterial');
    }
    constructor(...args) {
        return new TexturedMaterial.$javaClass(...args);
    }
}
