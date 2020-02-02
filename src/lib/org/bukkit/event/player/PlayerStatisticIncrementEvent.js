export default class PlayerStatisticIncrementEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerStatisticIncrementEvent');
    }
    constructor(...args) {
        return new PlayerStatisticIncrementEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerStatisticIncrementEvent.$javaClass.getHandlerList(...args);
    }
}
