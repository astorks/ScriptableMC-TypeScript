export class ItemFlag {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ItemFlag');
    }
    static get HIDE_ENCHANTS() {
        return this.$javaClass.HIDE_ENCHANTS;
    }
    static get HIDE_ATTRIBUTES() {
        return this.$javaClass.HIDE_ATTRIBUTES;
    }
    static get HIDE_UNBREAKABLE() {
        return this.$javaClass.HIDE_UNBREAKABLE;
    }
    static get HIDE_DESTROYS() {
        return this.$javaClass.HIDE_DESTROYS;
    }
    static get HIDE_PLACED_ON() {
        return this.$javaClass.HIDE_PLACED_ON;
    }
    static get HIDE_POTION_EFFECTS() {
        return this.$javaClass.HIDE_POTION_EFFECTS;
    }
}
