export default class StructureGrowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.StructureGrowEvent');
    }
    constructor(...args) {
        return new StructureGrowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return StructureGrowEvent.$javaClass.getHandlerList(...args);
    }
}
