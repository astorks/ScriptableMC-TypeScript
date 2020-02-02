export default class PotionSplashEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.PotionSplashEvent');
    }
    constructor(...args) {
        return new PotionSplashEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return PotionSplashEvent.$javaClass.getHandlerList(...args);
    }
}
