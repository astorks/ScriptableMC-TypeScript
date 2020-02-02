export default class ProjectileHitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ProjectileHitEvent');
    }
    constructor(...args) {
        return new ProjectileHitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ProjectileHitEvent.$javaClass.getHandlerList(...args);
    }
}
