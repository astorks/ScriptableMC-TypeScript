export class ExplosionPrimeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ExplosionPrimeEvent');
    }
    constructor(...args) {
        return new ExplosionPrimeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ExplosionPrimeEvent.$javaClass.getHandlerList(...args);
    }
}
//# sourceMappingURL=ExplosionPrimeEvent.js.map