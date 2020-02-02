export default class LingeringPotionSplashEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.LingeringPotionSplashEvent');
    }
    constructor(...args) {
        return new LingeringPotionSplashEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return LingeringPotionSplashEvent.$javaClass.getHandlerList(...args);
    }
}
