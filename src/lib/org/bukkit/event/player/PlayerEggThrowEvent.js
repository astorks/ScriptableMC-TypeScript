export default class PlayerEggThrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerEggThrowEvent');
    }
    constructor(...args) {
        return new PlayerEggThrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerEggThrowEvent.$javaClass.getHandlerList(...args);
    }
}
