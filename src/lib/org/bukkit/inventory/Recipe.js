export default class Recipe {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.Recipe');
    }
}
