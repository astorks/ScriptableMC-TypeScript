export default class MerchantRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.MerchantRecipe');
    }
    constructor(...args) {
        return new MerchantRecipe.$javaClass(...args);
    }
}
