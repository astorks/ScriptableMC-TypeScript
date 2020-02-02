export default class WorldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldEvent');
    }
    constructor(...args) {
        return new WorldEvent.$javaClass(...args);
    }
}
