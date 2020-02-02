export default class PlayerSwapHandItemsEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerSwapHandItemsEvent');
    }
    constructor(...args) {
        return new PlayerSwapHandItemsEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerSwapHandItemsEvent.$javaClass.getHandlerList(...args);
    }
}
