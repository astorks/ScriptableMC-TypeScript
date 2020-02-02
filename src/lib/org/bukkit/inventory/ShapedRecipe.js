export default class ShapedRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ShapedRecipe');
    }
    constructor(...args) {
        return new ShapedRecipe.$javaClass(...args);
    }
}
