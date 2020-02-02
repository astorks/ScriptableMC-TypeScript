export default class SheepDyeWoolEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.SheepDyeWoolEvent');
    }
    constructor(...args) {
        return new SheepDyeWoolEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SheepDyeWoolEvent.$javaClass.getHandlerList(...args);
    }
}
