export default class PluginEnableEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.PluginEnableEvent');
    }
    constructor(...args) {
        return new PluginEnableEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PluginEnableEvent.$javaClass.getHandlerList(...args);
    }
}
