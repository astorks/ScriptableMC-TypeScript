export default class PlayerBedLeaveEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBedLeaveEvent');
    }
    constructor(...args) {
        return new PlayerBedLeaveEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBedLeaveEvent.$javaClass.getHandlerList(...args);
    }
}
