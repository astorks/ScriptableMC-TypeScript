export default class PlayerToggleSprintEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerToggleSprintEvent');
    }
    constructor(...args) {
        return new PlayerToggleSprintEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerToggleSprintEvent.$javaClass.getHandlerList(...args);
    }
}
