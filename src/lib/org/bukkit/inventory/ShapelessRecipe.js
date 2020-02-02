export default class ShapelessRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ShapelessRecipe');
    }
    constructor(...args) {
        return new ShapelessRecipe.$javaClass(...args);
    }
}
