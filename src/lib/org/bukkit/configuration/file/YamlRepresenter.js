export default class YamlRepresenter {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlRepresenter');
    }
    constructor(...args) {
        return new YamlRepresenter.$javaClass(...args);
    }
}
