export default class EntityPotionEffectEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent');
    }
    constructor(...args) {
        return new EntityPotionEffectEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPotionEffectEvent.$javaClass.getHandlerList(...args);
    }
}
