export default class PlayerBucketFillEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBucketFillEvent');
    }
    constructor(...args) {
        return new PlayerBucketFillEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBucketFillEvent.$javaClass.getHandlerList(...args);
    }
}
