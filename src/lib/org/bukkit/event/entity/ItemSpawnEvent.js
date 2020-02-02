export default class ItemSpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ItemSpawnEvent');
    }
    constructor(...args) {
        return new ItemSpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ItemSpawnEvent.$javaClass.getHandlerList(...args);
    }
}
