export default class SpawnChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.SpawnChangeEvent');
    }
    constructor(...args) {
        return new SpawnChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SpawnChangeEvent.$javaClass.getHandlerList(...args);
    }
}
