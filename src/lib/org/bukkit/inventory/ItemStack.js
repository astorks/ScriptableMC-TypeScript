export default class ItemStack {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ItemStack');
    }
    constructor(...args) {
        return new ItemStack.$javaClass(...args);
    }
    static deserialize(...args) {
        return ItemStack.$javaClass.deserialize(...args);
    }
}
