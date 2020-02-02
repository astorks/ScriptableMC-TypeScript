export default class PlayerLocaleChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerLocaleChangeEvent');
    }
    constructor(...args) {
        return new PlayerLocaleChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerLocaleChangeEvent.$javaClass.getHandlerList(...args);
    }
}
