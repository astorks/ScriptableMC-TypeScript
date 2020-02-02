export default class ProjectileLaunchEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ProjectileLaunchEvent');
    }
    constructor(...args) {
        return new ProjectileLaunchEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ProjectileLaunchEvent.$javaClass.getHandlerList(...args);
    }
}
