export default class ChunkGenerator {
    static get $javaClass() {
        return Java.type('org.bukkit.generator.ChunkGenerator');
    }
    constructor(...args) {
        return new ChunkGenerator.$javaClass(...args);
    }
}
