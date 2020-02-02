export default class CreatureSpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.CreatureSpawnEvent');
    }
    constructor(...args) {
        return new CreatureSpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CreatureSpawnEvent.$javaClass.getHandlerList(...args);
    }
}
