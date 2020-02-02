export default class PlayerTeleportEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerTeleportEvent');
    }
    constructor(...args) {
        return new PlayerTeleportEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerTeleportEvent.$javaClass.getHandlerList(...args);
    }
}
