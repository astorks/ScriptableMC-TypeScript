export default class PluginLogger {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginLogger');
    }
    constructor(...args) {
        return new PluginLogger.$javaClass(...args);
    }
    static get GLOBAL_LOGGER_NAME() {
        return PluginLogger.$javaClass.GLOBAL_LOGGER_NAME;
    }
    static get global() {
        return PluginLogger.$javaClass.global;
    }
    static getGlobal(...args) {
        return PluginLogger.$javaClass.getGlobal(...args);
    }
    static getAnonymousLogger(...args) {
        return PluginLogger.$javaClass.getAnonymousLogger(...args);
    }
    static getLogger(...args) {
        return PluginLogger.$javaClass.getLogger(...args);
    }
}
