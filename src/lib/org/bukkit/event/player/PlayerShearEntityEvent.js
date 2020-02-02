export default class PlayerShearEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerShearEntityEvent');
    }
    constructor(...args) {
        return new PlayerShearEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerShearEntityEvent.$javaClass.getHandlerList(...args);
    }
}
