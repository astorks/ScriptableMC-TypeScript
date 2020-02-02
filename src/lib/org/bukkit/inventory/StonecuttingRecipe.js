export default class StonecuttingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.StonecuttingRecipe');
    }
    constructor(...args) {
        return new StonecuttingRecipe.$javaClass(...args);
    }
}
