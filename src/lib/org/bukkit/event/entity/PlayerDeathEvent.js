export default class PlayerDeathEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PlayerDeathEvent');
    }
    constructor(...args) {
        return new PlayerDeathEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerDeathEvent.$javaClass.getHandlerList(...args);
    }
}
