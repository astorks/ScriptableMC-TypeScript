export default class SpongeAbsorbEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.SpongeAbsorbEvent');
    }
    constructor(...args) {
        return new SpongeAbsorbEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SpongeAbsorbEvent.$javaClass.getHandlerList(...args);
    }
}
