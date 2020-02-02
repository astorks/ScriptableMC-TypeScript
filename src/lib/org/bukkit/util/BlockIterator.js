export default class BlockIterator {
    static get $javaClass() {
        return Java.type('org.bukkit.util.BlockIterator');
    }
    constructor(...args) {
        return new BlockIterator.$javaClass(...args);
    }
}
