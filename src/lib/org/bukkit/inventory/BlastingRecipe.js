export default class BlastingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.BlastingRecipe');
    }
    constructor(...args) {
        return new BlastingRecipe.$javaClass(...args);
    }
}
