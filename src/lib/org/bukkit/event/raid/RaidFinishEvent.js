export default class RaidFinishEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.raid.RaidFinishEvent');
    }
    constructor(...args) {
        return new RaidFinishEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return RaidFinishEvent.$javaClass.getHandlerList(...args);
    }
}
