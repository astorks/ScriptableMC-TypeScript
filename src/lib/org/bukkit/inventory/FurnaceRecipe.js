export default class FurnaceRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.FurnaceRecipe');
    }
    constructor(...args) {
        return new FurnaceRecipe.$javaClass(...args);
    }
}
