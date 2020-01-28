export class EnchantmentOffer {
    static get $javaClass() {
        return Java.type('org.bukkit.enchantments.EnchantmentOffer');
    }
    constructor(...args) {
        return new EnchantmentOffer.$javaClass(...args);
    }
}
//# sourceMappingURL=EnchantmentOffer.js.map