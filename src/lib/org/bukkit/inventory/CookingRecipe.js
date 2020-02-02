export default class CookingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CookingRecipe');
    }
    constructor(...args) {
        return new CookingRecipe.$javaClass(...args);
    }
}
