export default class ExpBottleEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ExpBottleEvent');
    }
    constructor(...args) {
        return new ExpBottleEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ExpBottleEvent.$javaClass.getHandlerList(...args);
    }
}
