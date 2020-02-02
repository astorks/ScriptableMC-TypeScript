export default class EntityPoseChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPoseChangeEvent');
    }
    constructor(...args) {
        return new EntityPoseChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPoseChangeEvent.$javaClass.getHandlerList(...args);
    }
}
