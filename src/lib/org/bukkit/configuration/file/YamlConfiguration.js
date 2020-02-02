export default class YamlConfiguration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlConfiguration');
    }
    constructor(...args) {
        return new YamlConfiguration.$javaClass(...args);
    }
    static loadConfiguration(...args) {
        return YamlConfiguration.$javaClass.loadConfiguration(...args);
    }
    static createPath(...args) {
        return YamlConfiguration.$javaClass.createPath(...args);
    }
}
