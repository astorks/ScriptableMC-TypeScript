export default class PlayerInteractAtEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerInteractAtEntityEvent');
    }
    constructor(...args) {
        return new PlayerInteractAtEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerInteractAtEntityEvent.$javaClass.getHandlerList(...args);
    }
}
