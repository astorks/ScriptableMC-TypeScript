export default class EntitySpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntitySpawnEvent');
    }
    constructor(...args) {
        return new EntitySpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntitySpawnEvent.$javaClass.getHandlerList(...args);
    }
}
