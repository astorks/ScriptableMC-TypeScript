export default class EntityTargetLivingEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTargetLivingEntityEvent');
    }
    constructor(...args) {
        return new EntityTargetLivingEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTargetLivingEntityEvent.$javaClass.getHandlerList(...args);
    }
}
