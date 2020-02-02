export default class PrepareItemCraftEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.PrepareItemCraftEvent');
    }
    constructor(...args) {
        return new PrepareItemCraftEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PrepareItemCraftEvent.$javaClass.getHandlerList(...args);
    }
}
