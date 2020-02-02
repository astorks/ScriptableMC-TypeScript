export default class PlayerExpChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerExpChangeEvent');
    }
    constructor(...args) {
        return new PlayerExpChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerExpChangeEvent.$javaClass.getHandlerList(...args);
    }
}
