export default class CraftItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.CraftItemEvent');
    }
    constructor(...args) {
        return new CraftItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CraftItemEvent.$javaClass.getHandlerList(...args);
    }
}
