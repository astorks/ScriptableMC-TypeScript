export default class PlayerAdvancementDoneEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAdvancementDoneEvent');
    }
    constructor(...args) {
        return new PlayerAdvancementDoneEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerAdvancementDoneEvent.$javaClass.getHandlerList(...args);
    }
}
