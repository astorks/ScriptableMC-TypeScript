export default class BlockPopulator {
    static get $javaClass() {
        return Java.type('org.bukkit.generator.BlockPopulator');
    }
    constructor(...args) {
        return new BlockPopulator.$javaClass(...args);
    }
}
