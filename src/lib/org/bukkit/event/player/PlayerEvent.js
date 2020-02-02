export default class PlayerEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.player.PlayerEvent');
    }
    constructor(...args) {
        return new PlayerEvent.$javaClass(...args);
    }
}
