export default class ConfigurationSerialization {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.serialization.ConfigurationSerialization');
    }
    static get SERIALIZED_TYPE_KEY() {
        return ConfigurationSerialization.$javaClass.SERIALIZED_TYPE_KEY;
    }
    static deserializeObject(...args) {
        return ConfigurationSerialization.$javaClass.deserializeObject(...args);
    }
    static unregisterClass(...args) {
        return ConfigurationSerialization.$javaClass.unregisterClass(...args);
    }
    static getClassByAlias(...args) {
        return ConfigurationSerialization.$javaClass.getClassByAlias(...args);
    }
    static getAlias(...args) {
        return ConfigurationSerialization.$javaClass.getAlias(...args);
    }
    static registerClass(...args) {
        return ConfigurationSerialization.$javaClass.registerClass(...args);
    }
}
