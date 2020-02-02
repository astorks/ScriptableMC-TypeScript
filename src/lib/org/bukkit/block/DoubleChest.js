export default class DoubleChest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.DoubleChest');
    }
    constructor(...args) {
        return new DoubleChest.$javaClass(...args);
    }
}
