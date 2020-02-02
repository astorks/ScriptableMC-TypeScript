export default class FoodLevelChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.FoodLevelChangeEvent');
    }
    constructor(...args) {
        return new FoodLevelChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return FoodLevelChangeEvent.$javaClass.getHandlerList(...args);
    }
}
