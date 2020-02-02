export default class YamlConstructor {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlConstructor');
    }
    constructor(...args) {
        return new YamlConstructor.$javaClass(...args);
    }
    static get undefinedConstructor() {
        return YamlConstructor.$javaClass.undefinedConstructor;
    }
}
