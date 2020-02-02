export default class AreaEffectCloudApplyEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.AreaEffectCloudApplyEvent');
    }
    constructor(...args) {
        return new AreaEffectCloudApplyEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return AreaEffectCloudApplyEvent.$javaClass.getHandlerList(...args);
    }
}
