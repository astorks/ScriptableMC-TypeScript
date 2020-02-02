export default class PlayerBedEnterEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBedEnterEvent');
    }
    constructor(...args) {
        return new PlayerBedEnterEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBedEnterEvent.$javaClass.getHandlerList(...args);
    }
}
