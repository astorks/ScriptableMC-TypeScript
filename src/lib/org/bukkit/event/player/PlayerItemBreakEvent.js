export default class PlayerItemBreakEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemBreakEvent');
    }
    constructor(...args) {
        return new PlayerItemBreakEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemBreakEvent.$javaClass.getHandlerList(...args);
    }
}
