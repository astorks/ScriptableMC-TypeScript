export default class PlayerRecipeDiscoverEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerRecipeDiscoverEvent');
    }
    constructor(...args) {
        return new PlayerRecipeDiscoverEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerRecipeDiscoverEvent.$javaClass.getHandlerList(...args);
    }
}
