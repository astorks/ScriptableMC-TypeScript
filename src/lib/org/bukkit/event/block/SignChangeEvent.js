export default class SignChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.SignChangeEvent');
    }
    constructor(...args) {
        return new SignChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return SignChangeEvent.$javaClass.getHandlerList(...args);
    }
}
