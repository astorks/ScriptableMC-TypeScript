export default class EntityAirChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityAirChangeEvent');
    }
    constructor(...args) {
        return new EntityAirChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityAirChangeEvent.$javaClass.getHandlerList(...args);
    }
}
