export default class PlayerAnimationEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerAnimationEvent');
    }
    constructor(...args) {
        return new PlayerAnimationEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerAnimationEvent.$javaClass.getHandlerList(...args);
    }
}
