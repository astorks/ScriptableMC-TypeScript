export default class PlayerToggleFlightEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerToggleFlightEvent');
    }
    constructor(...args) {
        return new PlayerToggleFlightEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerToggleFlightEvent.$javaClass.getHandlerList(...args);
    }
}
