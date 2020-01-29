export class PluginLoadOrder {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginLoadOrder');
    }
    static get STARTUP() {
        return this.$javaClass.STARTUP;
    }
    static get POSTWORLD() {
        return this.$javaClass.POSTWORLD;
    }
}
