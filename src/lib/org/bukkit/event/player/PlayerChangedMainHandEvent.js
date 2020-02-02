export default class PlayerChangedMainHandEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerChangedMainHandEvent');
    }
    constructor(...args) {
        return new PlayerChangedMainHandEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerChangedMainHandEvent.$javaClass.getHandlerList(...args);
    }
}
