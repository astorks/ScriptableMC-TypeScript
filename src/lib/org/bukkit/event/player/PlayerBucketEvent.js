export class PlayerBucketEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerBucketEvent');
    }
    constructor(...args) {
        return new PlayerBucketEvent.$javaClass(...args);
    }
}
//# sourceMappingURL=PlayerBucketEvent.js.map