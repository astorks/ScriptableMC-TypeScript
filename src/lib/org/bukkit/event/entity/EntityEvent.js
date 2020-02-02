export default class EntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityEvent');
    }
    constructor(...args) {
        return new EntityEvent.$javaClass(...args);
    }
}
