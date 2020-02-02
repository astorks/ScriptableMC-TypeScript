export default class PlayerLeashEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PlayerLeashEntityEvent');
    }
    constructor(...args) {
        return new PlayerLeashEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLeashEntityEvent.$javaClass.getHandlerList(...args);
    }
}
