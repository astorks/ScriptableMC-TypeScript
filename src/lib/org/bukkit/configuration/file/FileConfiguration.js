export default class FileConfiguration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.FileConfiguration');
    }
    constructor(...args) {
        return new FileConfiguration.$javaClass(...args);
    }
    static createPath(...args) {
        return FileConfiguration.$javaClass.createPath(...args);
    }
}
