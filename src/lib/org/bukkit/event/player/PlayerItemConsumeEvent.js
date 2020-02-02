export default class PlayerItemConsumeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerItemConsumeEvent');
    }
    constructor(...args) {
        return new PlayerItemConsumeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerItemConsumeEvent.$javaClass.getHandlerList(...args);
    }
}
