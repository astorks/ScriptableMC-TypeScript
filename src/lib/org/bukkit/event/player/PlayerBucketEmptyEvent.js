export default class PlayerBucketEmptyEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBucketEmptyEvent');
    }
    constructor(...args) {
        return new PlayerBucketEmptyEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PlayerBucketEmptyEvent.$javaClass.getHandlerList(...args);
    }
}
