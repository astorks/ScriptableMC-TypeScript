export default class EntityBreedEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityBreedEvent');
    }
    constructor(...args) {
        return new EntityBreedEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityBreedEvent.$javaClass.getHandlerList(...args);
    }
}
