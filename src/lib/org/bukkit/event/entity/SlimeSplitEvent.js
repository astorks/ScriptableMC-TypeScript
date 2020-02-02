export default class SlimeSplitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.SlimeSplitEvent');
    }
    constructor(...args) {
        return new SlimeSplitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SlimeSplitEvent.$javaClass.getHandlerList(...args);
    }
}
