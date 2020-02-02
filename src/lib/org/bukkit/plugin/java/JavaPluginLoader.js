export default class JavaPluginLoader {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.java.JavaPluginLoader');
    }
    constructor(...args) {
        return new JavaPluginLoader.$javaClass(...args);
    }
    static get pluginParentTimer() {
        return JavaPluginLoader.$javaClass.pluginParentTimer;
    }
}
