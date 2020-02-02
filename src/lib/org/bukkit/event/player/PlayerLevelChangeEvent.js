export default class PlayerLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLevelChangeEvent');
    }
    constructor(...args) {
        return new PlayerLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
