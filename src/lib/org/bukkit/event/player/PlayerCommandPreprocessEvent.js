export default class PlayerCommandPreprocessEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerCommandPreprocessEvent');
    }
    constructor(...args) {
        return new PlayerCommandPreprocessEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerCommandPreprocessEvent.$javaClass.getHandlerList(...args);
    }
}
