export default class MinecraftFont {
    static get $javaClass() {
        return Java.type('org.bukkit.map.MinecraftFont');
    }
    constructor(...args) {
        return new MinecraftFont.$javaClass(...args);
    }
    static get Font() {
        return MinecraftFont.$javaClass.Font;
    }
}
