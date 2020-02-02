export default class PlayerToggleSneakEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerToggleSneakEvent');
    }
    constructor(...args) {
        return new PlayerToggleSneakEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerToggleSneakEvent.$javaClass.getHandlerList(...args);
    }
}
