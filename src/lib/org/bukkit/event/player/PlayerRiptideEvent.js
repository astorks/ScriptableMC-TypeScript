export default class PlayerRiptideEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRiptideEvent');
    }
    constructor(...args) {
        return new PlayerRiptideEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRiptideEvent.$javaClass.getHandlerList(...args);
    }
}
