export default class PlayerPortalEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerPortalEvent');
    }
    constructor(...args) {
        return new PlayerPortalEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerPortalEvent.$javaClass.getHandlerList(...args);
    }
}
