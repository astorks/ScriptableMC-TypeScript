export default class EnchantItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.enchantment.EnchantItemEvent');
    }
    constructor(...args) {
        return new EnchantItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EnchantItemEvent.$javaClass.getHandlerList(...args);
    }
}
