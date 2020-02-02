export default class SmokingRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.SmokingRecipe');
    }
    constructor(...args) {
        return new SmokingRecipe.$javaClass(...args);
    }
}
