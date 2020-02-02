export default class PlayerItemDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemDamageEvent');
    }
    constructor(...args) {
        return new PlayerItemDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemDamageEvent.$javaClass.getHandlerList(...args);
    }
}
