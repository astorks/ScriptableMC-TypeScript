export default class PluginDisableEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.server.PluginDisableEvent');
    }
    constructor(...args) {
        return new PluginDisableEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PluginDisableEvent.$javaClass.getHandlerList(...args);
    }
}
