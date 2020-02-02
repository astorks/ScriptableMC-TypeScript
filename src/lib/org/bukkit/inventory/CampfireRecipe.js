export default class CampfireRecipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.CampfireRecipe');
    }
    constructor(...args) {
        return new CampfireRecipe.$javaClass(...args);
    }
}
