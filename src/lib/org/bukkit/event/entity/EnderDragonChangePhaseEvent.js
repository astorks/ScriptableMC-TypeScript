export default class EnderDragonChangePhaseEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EnderDragonChangePhaseEvent');
    }
    constructor(...args) {
        return new EnderDragonChangePhaseEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EnderDragonChangePhaseEvent.$javaClass.getHandlerList(...args);
    }
}
